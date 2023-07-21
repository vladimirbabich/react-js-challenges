import React, { useEffect, useRef, useState } from 'react';
function PrimeCounter() {
  const [numbers, setNumbers] = useState<number[]>([]);

  function getPrimeCount(n: number) {
    if (n < 1) return [];
    let primeNumbers: number[] = [];
    for (let i = n - 1; i > 1; i--) {
      if (isPrime(i)) {
        primeNumbers.push(i);
      }
    }
    //primeNumbers array contains all prime numbers less than 'n'
    return primeNumbers.reverse();

    function isPrime(num: number) {
      var sqrtnum = Math.floor(Math.sqrt(num));
      for (var i = 2; i < sqrtnum + 1; i++) {
        if (num % i == 0) {
          return false;
        }
      }
      return num != 1;
    }
  }

  return (
    <main>
      <h1>Find out how many prime number are lower than in the input</h1>
      <input
        autoFocus={true}
        placeholder="Type any number"
        onChange={(e) => {
          const n = Number(e.target.value);
          if (n) setNumbers(getPrimeCount(n));
          else setNumbers([]);
        }}></input>
      {numbers.length > 0 ? (
        <div className="result" style={{ wordWrap: 'break-word' }}>
          Found {numbers.length} prime numbers: {numbers.join(', ')}
        </div>
      ) : (
        <div className="wrong result">Found 0 prime numbers</div>
      )}
      <h4>Techs</h4>
      <div className="tech-list">Typescript &#183; React</div>
    </main>
  );
}

export default PrimeCounter;
