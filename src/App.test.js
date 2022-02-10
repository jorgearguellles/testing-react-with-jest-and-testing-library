import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe("Testing <ColorButtonApp />", ()=>{
  
  render(<App/>);
  const btn = screen.getByRole('button', { name: 'Change to blue' }); // Find an element with Button & text 'Change to blue'

  test('1. Button has correct initial color: ', () => {
    expect(btn).toHaveStyle({ backgroundColor: 'red' }) // Expect the background color to be red
  });

  test('2. Button has correct initial text "Change to blue" ', () => {
    expect(btn.textContent).toEqual('Change to blue'); // Expect the text to be 'Change to blue'
  });
  
  test('3. Button turned Blue when clicked ', () => {
    render(<App/>);
    const btn = screen.getByRole('button', { name: 'Change to blue' }); // Find an element with Button & text 'Change to blue'
    // Simulate event: Click button
    fireEvent.click(btn); 
    
    // Expect background color turn to blue
    expect(btn).toHaveStyle({ backgroundColor: 'blue' });
  });

  test('4. Button turned text to: "Change to red" when clicked ', () => {
    render(<App/>);
    const btn = screen.getByRole('button', { name: 'Change to blue' }); // Find an element with Button & text 'Change to blue'
    // Simulate event: Click button
    fireEvent.click(btn); 

    // Expect test turn to Change to red
    expect(btn.textContent).toEqual('Change to red');
  });
})

