import React from 'react';
import './Historic.css'

function Historic({historyLog}) {

  return (
    <div className='historic-div'>
        <p>Historic</p>
        <ul>
          {historyLog.map((histItem) => <li key={histItem.id}>
            <p>Type: {histItem.text}</p>
            <p className={histItem.value >= 0 ? 'positive' : 'negative' }>Value: {histItem.value}</p>
          </li>)}
        </ul>
    </div>
  );
}

export default Historic;
