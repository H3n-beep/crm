export function toPersianNum(value) {
  if (value === null || value === undefined) return '';
  
  const str = String(value);
  
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  
  return str.replace(/\d/g, (x) => persianDigits[x]);
}

export function formatPersianCurrency(value) {
  if (!value) return '۰';
  const parts = Number(value).toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return toPersianNum(parts.join('.'));
}
