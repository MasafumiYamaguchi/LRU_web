import React from 'react';
import './data.css';

export type DataItem = {
  id: string;
  clock: number;
  PageFlag?: number; 
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
              {pageAction && (
                <>
                  {list[3].id === pageAction.inid && <h2>Page In</h2>}
                  {list[3].id === pageAction.outid && <h2>Page Out</h2>}
                </>
              )}
            </div>
          ) : <h2>4</h2>}
        </li>
        <hr />
        <li>
          {list[4] ? (
            <div className='data-item'>
              <h2>5</h2>&nbsp;
              <h2>{list[4].id}</h2>
              {pageAction && (
                <>
                  {list[4].id === pageAction.inid && <h2>Page In</h2>}
                  {list[4].id === pageAction.outid && <h2>Page Out</h2>}
                </>
              )}
            </div>
          ) : <h2>5</h2>}
        </li>
        <hr />
        <li>
          {list[5] ? (
            <div className='data-item'>
              <h2>6</h2>&nbsp;
              <h2>{list[5].id}</h2>
              {pageAction && (
                <>
                  {list[5].id === pageAction.inid && <h2>Page In</h2>}
                  {list[5].id === pageAction.outid && <h2>Page Out</h2>}
                </>
              )}
            </div>
          ) : <h2>6</h2>}
        </li>
        <hr />
        <li>
          {list[6] ? (
            <div className='data-item'>
              <h2>7</h2>&nbsp;
              <h2>{list[6].id}</h2>
              {pageAction && (
                <>
                  {list[6].id === pageAction.inid && <h2>Page In</h2>}
                  {list[6].id === pageAction.outid && <h2>Page Out</h2>}
                </>
              )}
            </div>
          ) : <h2>7</h2>}
        </li>
        <hr />
        <li>
          {list[7] ? (
            <div className='data-item'>
              <h2>8</h2>&nbsp;
              <h2>{list[7].id}</h2>
              {pageAction && (
                <>
                  {list[7].id === pageAction.inid && <h2>Page In</h2>}
                  {list[7].id === pageAction.outid && <h2>Page Out</h2>}
                </>
              )}
            </div>
          ) : <h2>8</h2>}
        </li>
      </ul>
    </div>
  );
};

export default Data;