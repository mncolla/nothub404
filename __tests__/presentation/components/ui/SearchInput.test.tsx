import React from "react"
import SearchInput from "../../../../src/presentation/components/ui/SearchInput"
import { fireEvent, render } from "@testing-library/react-native";

describe('SearchInput', () => {
    const mockOnChangeText = jest.fn();
  
    beforeEach(() => {
      mockOnChangeText.mockClear();
    });
  
    test('renders correctly with initial value', () => {
      const { getByPlaceholderText } = render(<SearchInput value="Initial" onChangeText={mockOnChangeText} />);
      
      const input = getByPlaceholderText('Type to search');
      expect(input.props.value).toBe('Initial');
    });
  
    test('calls onChangeText when text is entered', () => {
      const { getByPlaceholderText } = render(<SearchInput value="" onChangeText={mockOnChangeText} />);
      const input = getByPlaceholderText('Type to search');
  
      fireEvent.changeText(input, 'New input');
      
      expect(mockOnChangeText).toHaveBeenCalledTimes(1);
      expect(mockOnChangeText).toHaveBeenCalledWith('New input');
    });
  
    test('shows error message when error prop is true', () => {
      const { getByText } = render(<SearchInput value="" onChangeText={mockOnChangeText} error errorText="Error message" />);
      
      expect(getByText('Error message')).toBeTruthy();
    });
  
    test('does not show error message when error prop is false', () => {
      const { queryByText } = render(<SearchInput value="" onChangeText={mockOnChangeText} error={false} />);
      
      expect(queryByText('Min 3 characters')).toBeNull();
    });
  
    test('applies error style when error is true', () => {
      const { getByPlaceholderText } = render(<SearchInput value="" onChangeText={mockOnChangeText} error />);
      const input = getByPlaceholderText('Type to search');
  
      expect(input.props.style).toEqual(expect.arrayContaining([expect.objectContaining({ borderColor: 'red' })]));
    });
  
    test('does not apply error style when error is false', () => {
      const { getByPlaceholderText } = render(<SearchInput value="" onChangeText={mockOnChangeText} error={false} />);
      const input = getByPlaceholderText('Type to search');
  
      expect(input.props.style).toEqual(expect.not.arrayContaining([expect.objectContaining({ borderColor: 'red' })]));
    });
  });