import numeral from 'numeral';

export const formatUnitNumber = (value: number) => numeral(value).format('0.0a');
