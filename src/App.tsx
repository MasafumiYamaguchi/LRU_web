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
  const [isPagefault, setIsPagefault] = useState(false); // 追加

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setList(prev => {
      const existIndex = prev.findIndex(item => item.id === inputId);
      if (existIndex !== -1) {
        const updated = [...prev];
        updated[existIndex] = { id: inputId, clock: clock + 1 };
        setIsPagefault(false); // 既存ページはフォルトしない
        return updated;
      }
      // 空きがあれば追加
      if (prev.length < MAX_LENGTH) {
        setIsPagefault(true); // ページフォルト
        return [...prev, { id: inputId, clock: clock + 1 }];
      }
      // 一番古いデータを削除して新しいデータを追加
      const minClock = Math.min(...prev.map(item => item.clock));
      const minIndex = prev.findIndex(item => item.clock === minClock);
      const replaced = [...prev];
      replaced[minIndex] = { id: inputId, clock: clock + 1 };
      setIsPagefault(true); // ページフォルト
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
      {isPagefault ? (<h2 className='pagefault'>Page Fault</h2>) : null}
    </>
  )
}

export default App
