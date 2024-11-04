import React from 'react';
import { render } from '@testing-library/react-native';
import TechnologyLang from "../../../../src/presentation/components/ui/TechnologyLang"
import { getGithubTechnologyColor } from '../../../../src/config/helpers/getGithubTechnologyColor';

jest.mock('../../../../src/config/helpers/getGithubTechnologyColor', () => ({
    getGithubTechnologyColor: jest.fn<string | null, [string]>(),
}));

describe('TechnologyLang', () => {
  test('renders correctly with a given language', () => {
    const language = 'JavaScript';
    (getGithubTechnologyColor as jest.Mock).mockReturnValue('#f7df1e');

    const { getByText } = render(<TechnologyLang language={language} />);
    
    expect(getByText(language)).toBeTruthy();
  });

  test('renders the correct language color', () => {
    const language = 'JavaScript';
    const languageColor = '#f7df1e';
    (getGithubTechnologyColor as jest.Mock).mockReturnValue(languageColor);

    const { getByTestId } = render(<TechnologyLang language={language} />);
    
    const colorView = getByTestId('lang-color-dot')

    expect(colorView.props.style[1].backgroundColor).toBe(languageColor);
  });

  test('does not render color view when color is undefined', () => {
    const language = 'UnknownLanguage';
    (getGithubTechnologyColor as jest.Mock).mockReturnValue(undefined); 

    const { queryByTestId } = render(<TechnologyLang language={language} />);
    
    const langColorDot = queryByTestId('lang-color-dot');

    expect(langColorDot).toBeNull(); 
  });
});
