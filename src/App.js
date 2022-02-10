import { useState } from 'react';
import './App.css';

function App() {
  const [ buttonColor, setButtonColor ] = useState('red');

  const newBtnColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button 
        style={ {backgroundColor: buttonColor } }
        onClick={ () => { 
          setButtonColor(newBtnColor)
        }}  
      >Change to {newBtnColor}</button>
    </div>
  );
}

export default App;
