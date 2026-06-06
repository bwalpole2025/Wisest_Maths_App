/**
 * Magic-byte upload sniffing.
 *
 * Validates the ACTUAL content of an upload by its file signature, not the
 * client-declared MIME type or extension (both are trivially spoofable). Used by
 * the submissions upload endpoint to reject e.g. a text/script file renamed and
 * declared as image/png or application/pdf.
 */

export type SniffedUploadType =
  | "image/png"
  | "image/jpeg"
  | "image/webp"
  | "image/heic"
  | "application/pdf";

/** Return the type implied by the file's magic bytes, or null if not a known upload type. */
export function sniffUploadType(buf: Buffer): SniffedUploadType | null {
  // PNG: 89 50 4E 47 0D 0A 1A 0A
  if (buf.length >= 8 &&
      buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47 &&
      buf[4] === 0x0d && buf[5] === 0x0a && buf[6] === 0x1a && buf[7] === 0x0a) {
    return "image/png";
  }
  // JPEG: FF D8 FF
  if (buf.length >= 3 && buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) {
    return "image/jpeg";
  }
  // WEBP: "RIFF" .... "WEBP"
  if (buf.length >= 12 &&
      buf.toString("ascii", 0, 4) === "RIFF" &&
      buf.toString("ascii", 8, 12) === "WEBP") {
    return "image/webp";
  }
  // HEIC/HEIF: box "ftyp" at bytes 4..8, brand heic/heix/hevc/hevx/mif1/msf1 at 8..12
  if (buf.length >= 12 && buf.toString("ascii", 4, 8) === "ftyp") {
    const brand = buf.toString("ascii", 8, 12);
    if (["heic", "heix", "hevc", "hevx", "mif1", "msf1"].includes(brand)) {
      return "image/heic";
    }
  }
  // PDF: "%PDF-"
  if (buf.length >= 5 && buf.toString("ascii", 0, 5) === "%PDF-") {
    return "application/pdf";
  }
  return null;
}

const EXT: Record<SniffedUploadType, string> = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/webp": "webp",
  "image/heic": "heic",
  "application/pdf": "pdf",
};

/** File extension for a sniffed upload type (used to build the storage key). */
export function extFor(type: SniffedUploadType): string {
  return EXT[type];
}
