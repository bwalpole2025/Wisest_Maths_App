/**
 * Object-storage abstraction.
 *
 * The app stores ONLY a storage key in Postgres (never the bytes). This thin
 * interface lets the upload pipeline write objects without caring where they
 * live. The current implementation writes to local disk for development.
 *
 * TODO: swap LocalDiskStorage for an S3-compatible implementation (same
 * StorageService interface) when production object storage is provisioned.
 */

import { promises as fs, createWriteStream } from "fs";
import path from "path";
import os from "os";
import { Readable } from "stream";
import { pipeline } from "stream/promises";

export interface PutOptions {
  contentType: string;
}

export interface StorageService {
  /** Store an object under `key`. `body` may be a Buffer or a readable stream. */
  put(key: string, body: Buffer | Readable, opts: PutOptions): Promise<void>;
  /** Delete an object (used by the retention-cleanup job). No-op if absent. */
  delete(key: string): Promise<void>;
}

/**
 * Local-disk implementation. Keys map to files under a base directory; nested
 * keys (e.g. "submissions/<uuid>.png") create subdirectories. Defaults to a
 * temp dir so nothing is written inside the repo; override with
 * SUBMISSIONS_LOCAL_DIR.
 */
export class LocalDiskStorage implements StorageService {
  private readonly baseDir: string;

  constructor(baseDir?: string) {
    this.baseDir =
      baseDir ?? process.env.SUBMISSIONS_LOCAL_DIR ?? path.join(os.tmpdir(), "wisest-submissions");
  }

  private resolve(key: string): string {
    // Prevent path traversal: keys are app-generated (uuid-based), but be safe.
    const full = path.resolve(this.baseDir, key);
    if (!full.startsWith(path.resolve(this.baseDir) + path.sep)) {
      throw new Error("Invalid storage key.");
    }
    return full;
  }

  // contentType (from PutOptions) is unused for local disk; an S3 impl would use it.
  async put(key: string, body: Buffer | Readable): Promise<void> {
    const full = this.resolve(key);
    await fs.mkdir(path.dirname(full), { recursive: true });
    if (Buffer.isBuffer(body)) {
      await fs.writeFile(full, body);
    } else {
      await pipeline(body, createWriteStream(full));
    }
  }

  async delete(key: string): Promise<void> {
    await fs.rm(this.resolve(key), { force: true });
  }
}

/** Default storage singleton used by the app (DI-overridable in tests). */
export const storage: StorageService = new LocalDiskStorage();
