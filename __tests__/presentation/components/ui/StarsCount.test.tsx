import React from 'react';
import { render } from '@testing-library/react-native';
import StarsCount from "../../../../src/presentation/components/ui/StarsCount"
import { formatUnitNumber } from '../../../../src/config/helpers/formatUnitNumbers';

jest.mock('../../../../src/config/helpers/formatUnitNumbers', () => ({
  formatUnitNumber: jest.fn((count) => `${count} units`), 
}));

describe('StarsCount', () => {
  test('renders correctly with given count', () => {
    const count = 5;
    const { getByText } = render(<StarsCount count={count} />);
    
    expect(getByText('5 units')).toBeTruthy();
  });

  test('renders with zero count', () => {
    const count = 0;
    const { getByText } = render(<StarsCount count={count} />);
    
    expect(getByText('0 units')).toBeTruthy();
  });

  test('renders with negative count', () => {
    const count = -3;
    const { getByText } = render(<StarsCount count={count} />);
    
    expect(getByText('-3 units')).toBeTruthy();
  });

  test('formats numbers correctly', () => {
    const count = 1000;
    const { getByText } = render(<StarsCount count={count} />);
    
    expect(formatUnitNumber).toHaveBeenCalledWith(count);
    expect(getByText('1000 units')).toBeTruthy();
  });
});
