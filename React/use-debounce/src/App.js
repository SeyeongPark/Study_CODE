import { useState, useEffect } from "react";
import './App.css';
import useDebounce from './use-debounce';

const DATA = ['spider man', 'minions', 'tesla', 'coin', 'stock', 'chair']

function App() {
  const [results, setResult] = useState([])
  const [text, setText] = useState("")

  const deb = useDebounce(text, 500)

  useEffect(()=>{
    const d = DATA.filter(el => el.toLowerCase().includes(deb))
    setResult(d)
    console.log('results: ', results)
  }, [deb])


  return (
    <div className="App">
      <input
        type="text"
        value={text}
        onChange={(e)=>setText(e.target.value)}
      />
      {
        results.length > 0 ?
        results.map((el, i) => <div key={i}>{el}</div>)
        :
        <div>no results</div>
      }
    </div>
  );
}

export default App;
