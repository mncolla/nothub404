import React from "react"
import { render } from '@testing-library/react-native';
import Avatar from "../../../../src/presentation/components/ui/Avatar"

describe('Avatar Component', () => {
  it('renders an Image with the correct source', () => {
    const src = 'https://example.com/avatar.png';
    const { getByTestId } = render(<Avatar src={src} />);

    const image = getByTestId("avatar-image");
    expect(image.props.source).toEqual({ uri: src });
  });

  it('applies the correct styles', () => {
    const src = 'https://example.com/avatar.png';
    const { getByTestId } = render(<Avatar src={src} />);

    const image = getByTestId("avatar-image");
    expect(image.props.style).toEqual({
      width: 30,
      height: 30,
      borderRadius: 100,
    });
  });
});