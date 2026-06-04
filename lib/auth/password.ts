import { randomBytes } from "crypto";

// Human-typable + URL-safe: no ambiguous glyphs (0/O, 1/l/I) so a teacher can
// read a printed credential sheet aloud without confusion.
const ALPHABET = "abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789";

/**
 * A crypto-strong, easy-to-read one-time password for provisioned accounts.
 * 12 chars over a 55-symbol alphabet ≈ 71 bits of entropy.
 */
export function generatePassword(length = 12): string {
  const bytes = randomBytes(length);
  let out = "";
  for (let i = 0; i < length; i++) out += ALPHABET[bytes[i] % ALPHABET.length];
  return out;
}
