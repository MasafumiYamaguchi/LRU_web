import React from 'react';
import './data.css';

export type DataItem = {
  id: string;
  clock: number;
};

export type DataProps = {
  list: DataItem[];
  pageAction?: { inid: string; outid: string; type: 'in' | 'out' } | null;
};

const Data: React.FC<DataProps> = ({ list, pageAction }) => {
  return (
    <div>
      <ul>
        <hr />
        <li>
          {list[0] ? (
            <div className='data-item'>
              <h2>1</h2>&nbsp;
              <h2>{list[0].id}</h2>
              <h2>Clock: {list[0].clock}</h2>
              {pageAction && (
                <>
                  {list[0].id === pageAction.inid && <h2>Page In</h2>}
                  {list[0].id === pageAction.outid && <h2>Page Out</h2>}
                </>
              )}
            </div>
          ) : <h2>1</h2>}
        </li>
        <hr />
        <li>
          {list[1] ? (
            <div className='data-item'>
              <h2>2</h2>&nbsp;
              <h2>{list[1].id}</h2>
              <h2>Clock: {list[1].clock}</h2>
              {pageAction && (
                <>
                  {list[1].id === pageAction.inid && <h2>Page In</h2>}
                  {list[1].id === pageAction.outid && <h2>Page Out</h2>}
                </>
              )}
            </div>
          ) : <h2>2</h2>}
        </li>
        <hr />
        <li>
          {list[2] ? (
            <div className='data-item'>
              <h2>3</h2>&nbsp;
              <h2>{list[2].id}</h2>
              <h2>Clock: {list[2].clock}</h2>
              {pageAction && (
                <>
                  {list[2].id === pageAction.inid && <h2>Page In</h2>}
                  {list[2].id === pageAction.outid && <h2>Page Out</h2>}
                </>
              )}
            </div>
          ) : <h2>3</h2>}
        </li>
        <hr />
        <li>
          {list[3] ? (
            <div className='data-item'>
              <h2>4</h2>&nbsp;
              <h2>{list[3].id}</h2>
              <h2>Clock: {list[3].clock}</h2>
              {pageAction && (
                <>
                  {list[3].id === pageAction.inid && <h2>Page In</h2>}
                  {list[3].id === pageAction.outid && <h2>Page Out</h2>}
                </>
              )}
            </div>
          ) : <h2>4</h2>}
        </li>
      </ul>
    </div>
  );
};

export default Data;