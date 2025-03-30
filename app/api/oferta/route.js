import { readFileSync } from 'fs';
import path from 'path';
import { readOfertaExcel } from '@/lib/readExcel';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'oferta.xlsx');
  const buffer = readFileSync(filePath);
  const data = readOfertaExcel(buffer);
  return Response.json(data);
}
