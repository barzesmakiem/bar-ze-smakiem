import { readMenuExcel } from '@/lib/readMenuExcel';

export async function GET() {
  const data = readMenuExcel();
  return Response.json(data);
}
