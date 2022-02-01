import { render, screen } from '@testing-library/react';
import App from './App';

describe("Testing App.js - Renders learn react link", ()=>{
  test('1. Accessibility by Text', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  test("2. Accessibility by Role ", ()=>{
    render(<App />);
    const linkElement = screen.getByRole('link', { name: /learn react/i} );
    expect(linkElement).toBeInTheDocument();
  })
})

