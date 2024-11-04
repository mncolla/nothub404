import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import GithubCard from '../../../src/presentation/components/GithubCard'
import { Repository } from '../../../src/domain/entities/github-repository.entity';

describe('GithubCard Component', () => {
    const mockRepository: Repository = {
        id: 1,
        name: 'Sample Repo',
        avatar: 'https://example.com/avatar.png',
        url: "https://example.com/url",
        description: 'This is a sample repository.',
        tags: ['TypeScript', 'React'],
        language: 'JavaScript',
        stars: 10,
        activity: new Date(),
    };

    beforeEach(() => {
        jest.clearAllMocks()
    });

    it('renders correctly with repository data', () => {
        const { getByText } = render(<GithubCard repository={mockRepository} />);

        expect(getByText('Sample Repo')).toBeTruthy();
        expect(getByText('This is a sample repository.')).toBeTruthy();
        expect(getByText('JavaScript')).toBeTruthy();
    });

    it('renders tags correctly', () => {
        const { getByText } = render(<GithubCard repository={mockRepository} />);

        expect(getByText('JavaScript')).toBeTruthy();
        expect(getByText('React')).toBeTruthy();
    });

});
