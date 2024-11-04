import React from "react";
import { render } from "@testing-library/react-native";
import Pill from "../../../../src/presentation/components/ui/Pill"

describe('Pill', () => {
    test('renders correctly with specific label', () => {
        const labelMock = 'customLabel'
        const { getByTestId } = render(<Pill label={labelMock} />);
        const pillLabel = getByTestId('pill-label');

        console.log("pilllabel", pillLabel)

        expect(pillLabel.props.children).toBe(labelMock);
    });
    
});