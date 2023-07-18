import { useState } from 'react';
import { Form } from './components';
import type { UnicElement } from './types';
import './App.css';

function App() {

  const [symbol, setSymbol] = useState<UnicElement>('')

  return (
    <>
      <Form changeSymbol={setSymbol}/>
      {symbol && <p className='Symbol'>{symbol}</p>}
    </>
  );
}

export default App;
