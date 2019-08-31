import numeral from 'numeral';
import 'numeral/locales/en-gb';

numeral.locale('en-gb');

export const formatPrice = num => `US$ ${numeral(num).format('0,0.00')}`;
