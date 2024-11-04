import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import FavoriteButton from "../../../../src/presentation/components/ui/FavoriteButton"


describe('FavoriteButton', () => {
  const onPressMock = jest.fn();

  beforeEach(() => {
    onPressMock.mockClear();
  });

  test('renders correctly with unchecked state', () => {
    const { getByTestId } = render(<FavoriteButton onPress={onPressMock} />);
    const button = getByTestId('favorite-button');
    const buttonIcon = button.props.children.find(child => child.testID = 'favorite-button-icon')

    expect(buttonIcon.props).toEqual(expect.objectContaining({ name: 'hearto'}));
  });

  test('renders correctly with checked state', () => {
    const { getByTestId } = render(<FavoriteButton checked onPress={onPressMock} />);
    const button = getByTestId('favorite-button');
    const buttonIcon = button.props.children.find(child => child.testID = 'favorite-button-icon')

    expect(buttonIcon.props).toEqual(expect.objectContaining({ name: 'heart'}));
  });

  test('calls onPress when pressed', () => {
    const { getByTestId } = render(<FavoriteButton onPress={onPressMock} />);
    const button = getByTestId('favorite-button');
    
    fireEvent.press(button);
    
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  test('renders with custom style', () => {
    const customStyle = { backgroundColor: 'blue' };
    const { getByTestId } = render(<FavoriteButton onPress={onPressMock} style={customStyle} />);
    const button = getByTestId('favorite-button');

    expect(button.props.style).toEqual(expect.objectContaining(customStyle));
  });
});