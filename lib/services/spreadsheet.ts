/**
 * Spreadsheet import/export (.xlsx + .csv) — SERVER ONLY.
 *
 * `parseRosterSheet` reads an uploaded roster (Google Sheets / Excel exported as
 * .xlsx or .csv) into {name, email} rows. `buildCredentialsSheet` produces the
 * one-time credentials .xlsx the School Admin downloads after an import.
 *
 * SheetJS (`xlsx`) is server-only — never import it into a client bundle.
 */

import * as XLSX from "xlsx";

const EMAIL_RE = /([\w.+-]+@[\w.-]+\.\w+)/;

export interface SheetRow {
  name: string;
  email: string;
}

/** Parse the first sheet of an .xlsx/.csv buffer into deduped {name, email} rows. */
export function parseRosterSheet(buffer: Buffer): SheetRow[] {
  const wb = XLSX.read(buffer, { type: "buffer" });
  const sheet = wb.Sheets[wb.SheetNames[0]];
  if (!sheet) return [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const rows: any[][] = XLSX.utils.sheet_to_json(sheet, { header: 1, blankrows: false, defval: "" });
  if (rows.length === 0) return [];

  // Detect an optional header row and the Name / Email column positions.
  const first = rows[0].map((c) => String(c).trim().toLowerCase());
  const hasHeader = first.some((c) => c.includes("name") || c.includes("email") || c.includes("mail"));
  let nameIdx = 0;
  let emailIdx = 1;
  let dataRows = rows;
  if (hasHeader) {
    const ni = first.findIndex((c) => c.includes("name"));
    const ei = first.findIndex((c) => c.includes("email") || c.includes("mail"));
    nameIdx = ni >= 0 ? ni : 0;
    emailIdx = ei >= 0 ? ei : 1;
    dataRows = rows.slice(1);
  }

  const out: SheetRow[] = [];
  for (const r of dataRows) {
    const rawName = String(r[nameIdx] ?? "").trim();
    let email = String(r[emailIdx] ?? "").trim();
    let m = email.match(EMAIL_RE);
    if (!m) {
      // Email not where expected — find one anywhere in the row.
      m = r.map((x) => String(x)).join(" ").match(EMAIL_RE);
    }
    email = m ? m[1].toLowerCase() : "";
    if (!email) continue; // an email is required to provision an account
    const name = rawName || email.split("@")[0];
    out.push({ name, email });
  }

  const seen = new Set<string>();
  return out.filter((r) => (seen.has(r.email) ? false : (seen.add(r.email), true)));
}

export interface CredentialRow {
  name: string;
  email: string;
  role: string;
  password: string | null;
  status: string;
}

/** Build the one-time credentials sheet as an .xlsx buffer. */
export function buildCredentialsSheet(rows: CredentialRow[], title = "Credentials"): Buffer {
  const aoa: (string)[][] = [
    ["Name", "Email", "Role", "Password", "Status"],
    ...rows.map((r) => [r.name, r.email, r.role, r.password ?? "— already had an account —", r.status]),
  ];
  const ws = XLSX.utils.aoa_to_sheet(aoa);
  ws["!cols"] = [{ wch: 24 }, { wch: 32 }, { wch: 10 }, { wch: 16 }, { wch: 22 }];
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, title.slice(0, 31));
  return XLSX.write(wb, { type: "buffer", bookType: "xlsx" }) as Buffer;
}
