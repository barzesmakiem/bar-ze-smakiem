import * as XLSX from 'xlsx';
import path from 'path';
import { readFileSync } from 'fs';

const isWeekend = (d) => d.getDay() === 0 || d.getDay() === 6;
//const isWeekend = () => false;


const formatDate = (d) => {
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}.${month}.${year}`;
};

const getClosedDates = () => {
  const filePath = path.join(process.cwd(), 'public', 'closed_days.xlsx');
  const buffer = readFileSync(filePath);
  const wb = XLSX.read(buffer, { type: 'buffer' });
  const ws = wb.Sheets[wb.SheetNames[0]];
  const data = XLSX.utils.sheet_to_json(ws, { defval: '' });

  return new Set(
    data.map((row) => {
      const raw = row.Date;
      if (raw instanceof Date) return formatDate(raw);
      if (typeof raw === 'string') return raw.trim();
      return '';
    })
  );
};

export const readMenuExcel = () => {
  const filePath = path.join(process.cwd(), 'public', 'menu.xlsx');
  const buffer = readFileSync(filePath);
  const wb = XLSX.read(buffer, { type: 'buffer' });
  const ws = wb.Sheets[wb.SheetNames[0]];
  const rawRows = XLSX.utils.sheet_to_json(ws, { defval: '' });

  const rows = rawRows.map((row) => {
    const raw = row.Date;
    let parsedDate = '';
    if (raw instanceof Date) {
      parsedDate = formatDate(raw);
    } else if (typeof raw === 'string' && raw.includes('.')) {
      parsedDate = raw.trim();
    }
    return { ...row, Date: parsedDate };
  });

  const closed = getClosedDates();

  const now = new Date();
  if (now.getHours() >= 18) now.setDate(now.getDate() + 1);

  const dateStr = formatDate(now);

  if (closed.has(dateStr) || isWeekend(now)) {
    // Find next open day
    const nextDay = new Date(now);
    for (let i = 1; i <= 10; i++) {
      nextDay.setDate(nextDay.getDate() + 1);
      const nextStr = formatDate(nextDay);
      if (!closed.has(nextStr) && !isWeekend(nextDay)) {
        return {
          show: true,
          title: `Dnia ${dateStr} bar jest nieczynny. Zapraszamy ${nextStr}.`,
          subtext: '',
          oferta: [],
        };
      }
    }
  
    // fallback if no open day found
    return {
      show: true,
      title: `Dnia ${dateStr} bar jest nieczynny. Zapraszamy wkrótce.`,
      subtext: '',
      oferta: [],
    };
  }
  

  const filtered = rows.filter((row) => row.Date === dateStr);
  if (filtered.length > 0) {
    return {
      show: true,
      title: `Menu dnia: ${dateStr}`,
      subtext: '',
      oferta: filtered.map((row) => ({
        title: row.Name,
        price: row.Price,
        img: row['Image Path'] ? `/photos/${row['Image Path'].trim()}` : null,
      })),
    };
  }

  return {
    show: true,
    title: '',
    subtext: { facebook: true, date: dateStr },
    oferta: [],
  };  
};
