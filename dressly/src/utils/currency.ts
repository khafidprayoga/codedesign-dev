import currency from 'currency.js';

export const IDR = (value: any) => {
    return currency(value, { symbol: 'Rp. ', separator: '.', decimal: ',', precision: 0 });
}