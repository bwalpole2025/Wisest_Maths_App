import { describe, it, expect } from "vitest";
import { sniffUploadType, extFor } from "./imageSniffer";

const png = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0x00, 0x00]);
const jpeg = Buffer.from([0xff, 0xd8, 0xff, 0xe0, 0x00, 0x10]);
const webp = Buffer.concat([Buffer.from("RIFF"), Buffer.from([0, 0, 0, 0]), Buffer.from("WEBP"), Buffer.from([0])]);
const heic = Buffer.concat([Buffer.from([0, 0, 0, 0x18]), Buffer.from("ftyp"), Buffer.from("heic"), Buffer.from([0])]);
const pdf = Buffer.from("%PDF-1.7\n%\xe2\xe3\xcf\xd3\n", "binary");
const text = Buffer.from("this is plainly not an image at all");

describe("sniffUploadType", () => {
  it("detects PNG / JPEG / WEBP / HEIC / PDF by magic bytes", () => {
    expect(sniffUploadType(png)).toBe("image/png");
    expect(sniffUploadType(jpeg)).toBe("image/jpeg");
    expect(sniffUploadType(webp)).toBe("image/webp");
    expect(sniffUploadType(heic)).toBe("image/heic");
    expect(sniffUploadType(pdf)).toBe("application/pdf");
  });

  it("returns null for non-matching content", () => {
    expect(sniffUploadType(text)).toBeNull();
    expect(sniffUploadType(Buffer.from([0x00, 0x01]))).toBeNull();
  });
});

describe("extFor", () => {
  it("maps types to extensions", () => {
    expect(extFor("image/png")).toBe("png");
    expect(extFor("image/jpeg")).toBe("jpg");
    expect(extFor("image/webp")).toBe("webp");
    expect(extFor("image/heic")).toBe("heic");
    expect(extFor("application/pdf")).toBe("pdf");
  });
});
