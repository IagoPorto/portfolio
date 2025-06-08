import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { About } from '../../components/About';

describe('<About />', () => {
  it('renders the section title', () => {
    render(<About />);
    expect(screen.getByRole('heading', { name: /about me/i })).toBeInTheDocument();
  });

  it('renders all paragraphs', () => {
    render(<About />);
    const paragraphs = screen.getAllByText(/i[’']?m/i);
    expect(paragraphs.length).toBeGreaterThanOrEqual(3); // Expecting 3 paragraphs
  });

  it('includes content about Technica Engineering', () => {
    render(<About />);
    expect(screen.getByText(/technica engineering/i)).toBeInTheDocument();
  });

  it('includes mention of tech stack', () => {
    render(<About />);
    expect(
      screen.getByText(/java\/spring, django or postgresql/i)
    ).toBeInTheDocument();
  });
});
