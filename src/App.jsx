import { useState } from 'react';
import './App.scss';
import './assets/reset_style.scss';
import { Header } from './components/Smart/Header/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <div className="wrapper">
            <Header/>
      </div>

    </div>
  )
}

export default App
