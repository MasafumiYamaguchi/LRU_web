import React, { useState } from 'react';
import './App.css'
import Data from './data';

type DataItem = {
  id: string;
  clock: number;
};

const MAX_LENGTH = 4;

function App() {
  const [clock, setClock] = useState(0);
  const [inputId, setInputId] = useState('');
  const [list, setList] = useState<DataItem[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setList(prev => {
      // 既存のデータがある場合は、clockを更新
      const existIndex = prev.findIndex(item => item.id === inputId);
      if (existIndex !== -1) {
        const updated = [...prev];
        updated[existIndex] = { id: inputId, clock: clock + 1 };
        return updated;
      }

      // 空きがあれば追加
      if (prev.length < MAX_LENGTH) {
        return [...prev, { id: inputId, clock: clock + 1 }];
      }

      // 一番古いデータを削除して新しいデータを追加
      const minClock = Math.min(...prev.map(item => item.clock));
      const minIndex = prev.findIndex(item => item.clock === minClock);
      const replaced = [...prev];
      replaced[minIndex] = { id: inputId, clock: clock + 1 };
      return replaced;
    });
    setClock(prev => prev + 1);
    setInputId('');
  };

  return (
    <>
      <h1>LRU</h1>
      <h2>
        {clock === 0 ? `Clock:` : `Clock: ${clock}`}
      </h2>
      <div className='buttons'>
        <form className='form' onSubmit={handleSubmit}>
          <input
            className='input'
            placeholder='id'
            required
            value={inputId}
            onChange={e => setInputId(e.target.value)}
          />
          <button className='button' type='submit'>追加</button>
        </form>
      </div>
      <Data list={list} />
    </>
  )
}

export default App
