import * as XLSX from 'xlsx';

export function readOfertaExcel(buffer) {
  const workbook = XLSX.read(buffer, { type: 'buffer' });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });

  const show = String(rows[0]?.[1] || '').trim().toLowerCase() === 'true';
  const title = rows[1]?.[1] || '';
  const subtext = rows[2]?.[1] || '';
  const oferta = rows.slice(3).filter(row => row[0] && row[1]);

  return { show, title, subtext, oferta };
}
