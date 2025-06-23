import { useState } from 'react';
import './App.css'
import Data from './data';
import Vdata from './vdata';

type DataItem = {
  id: string;
  clock: number;
  pageFlag?: number; 
};

const MAX_LENGTH = 4;

function getRandomElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

const VDATA_LIST: DataItem[] = [
  { id: 'A', clock: 0 },
  { id: 'B', clock: 0 },
  { id: 'C', clock: 0 },
  { id: 'D', clock: 0 },
  { id: 'E', clock: 0 },
  { id: 'F', clock: 0 },
  { id: 'G', clock: 0 },
  { id: 'H', clock: 0 },
];

function App() {
  const [clock, setClock] = useState(0);
  const [list, setList] = useState<DataItem[]>([]);
  const [isPagefault, setIsPagefault] = useState(false);
  const [vdataList] = useState<DataItem[]>(VDATA_LIST);
  const [pageAction, setPageAction] = useState<{ inid: string; outid: string; type: 'in' | 'out' } | null>(null);

  const handleClick = () => {
      const random = getRandomElement(vdataList);
      setList(prev => {
        const existIndex = prev.findIndex(item => item.id === random.id);
        if (existIndex !== -1) {
          setPageAction({ inid: random.id, outid: '', type: 'in' });
          setIsPagefault(false);
          const updated = [...prev];
          updated[existIndex] = { id: random.id, clock: clock + 1 };
          return updated;
        }
        if (prev.length < MAX_LENGTH) {
          setPageAction({ inid: random.id, outid: '', type: 'in' });
          setIsPagefault(true);
          return [...prev, { id: random.id, clock: clock + 1 }];
        }
        // pageout & pagein
        const minClock = Math.min(...prev.map(item => item.clock));
        const minIndex = prev.findIndex(item => item.clock === minClock);
        const outId = prev[minIndex].id;
        setPageAction({ inid: random.id, outid: outId, type: 'out' });
        setIsPagefault(true);
        const replaced = [...prev];
        replaced[minIndex] = { id: random.id, clock: clock + 1 };
        return replaced;
      });
      setClock(prev => prev + 1);
  };

  return (
    <>
      <h1>LRU</h1>
      <h2>
        {clock === 0 ? `Clock:` : `Clock: ${clock}`}
      </h2>
      <button onClick={handleClick} className='btn'>Next</button>
      <div className='list-container'>
        <div className='data-list'>
          <h2>Physical Memory</h2>
          <Data list={list} pageAction={pageAction} />
          {isPagefault ? (<h2 className='pagefault'>Page Fault</h2>) : null}
        </div>
        <div className='vdata-list'>
          <h2>Virtual Memory</h2>
          <Vdata list={vdataList} pageAction={pageAction} />
        </div>
      </div>
    </>
  )
}

export default App
