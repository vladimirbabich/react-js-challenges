import './ArrayModifier.css';
import React, { useEffect, useState } from 'react';

function ArrayModifier() {
  const [array, setArray] = useState<string>('1,5,2,6,3,2,8,5');
  const [result, setResult] = useState<string>('');
  const [resultTitle, setResultTitle] = useState<string>('Click a button');

  function getUniqueItems(arr: Array<any>) {
    const uniqueValues: Array<any> = [];
    const recurrentValues: Array<any> = [];
    for (let i = 0; i < arr.length; i++) {
      const index = uniqueValues.indexOf(arr[i]);
      if (index > -1) {
        uniqueValues.splice(index, 1);
        recurrentValues.push(arr[i]);
        continue;
      }
      if (recurrentValues.indexOf(arr[i]) > -1) {
        continue;
      }
      uniqueValues.push(arr[i]);
    }
    return uniqueValues;
  }

  return (
    <main>
      <h1>Array modifications</h1>
      <select
        name="array-select"
        id="array-select"
        onChange={({ target }) => {
          setArray(target.value);
        }}>
        <option>1,5,2,6,3,2,8,5</option>
        <option>{`'abc','123','c42','abc','abc','ABC','l33t'`}</option>
        {/* <option value="asd">3</option> */}
      </select>
      <button
        className="btn-mod-array"
        onClick={() => {
          const arr = getUniqueItems(array.split(','));
          console.log(arr);
          //call func to get unique items and set result
          setResult(arr.join(','));
          setResultTitle('Unique items:');
        }}>
        Get unique items
      </button>
      <span style={{ marginLeft: '5px' }}>
        (I`ll add more functions if I find other interesting challenges)
      </span>

      <h4>{resultTitle}</h4>
      <input className="input-mod-array" disabled value={result}></input>

      <h4>Techs</h4>
      <div className="tech-list">Typescript &#183; React</div>
    </main>
  );
}

export default ArrayModifier;
