import { useState } from 'react';
import './App.scss';
import './assets/reset_style.scss';
import { Header } from './components/Smart/Header/Header';
import { Section } from './components/Smart/Section/Section';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <div className="wrapper">
            <Header/>
            <Section/>
      </div>

    </div>
  )
}

export default App
