import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CancelButton from '../../../../src/presentation/components/ui/CancelButton'


describe('CancelButton', () => {
  const label = 'Cancel';
  const onPressMock = jest.fn();

  beforeEach(() => {
    onPressMock.mockClear();
  });

  test('renders correctly with given label', () => {
    const { getByTestId } = render(<CancelButton label={label} />);

    const labelElement = getByTestId('cancel-button-label');
    
    expect(labelElement.props.children).toBe(label);
  });

  test('calls onPress when pressed', () => {
    const { getByTestId } = render(<CancelButton label={label} onPress={onPressMock} />);
    
    const button = getByTestId('cancel-button');
    
    fireEvent.press(button);
    
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  test('renders with custom style', () => {
    const customStyle = { backgroundColor: 'red' };
    const { getByTestId } = render(<CancelButton label={label} style={customStyle} />);
    
    const button = getByTestId('cancel-button-container');

    expect(button.props.style).toEqual(expect.arrayContaining([expect.objectContaining(customStyle)]));
  });
});
