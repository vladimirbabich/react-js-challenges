import './PalindromeChecker.css';
import React, { useEffect, useState } from 'react';
function PalindromeChecker() {
  const [inputValue, setInputValue] = useState<string>('');
  const [isPalindrome, setIsPalindrome] = useState<boolean>(false);
  function checkPalindrome(str: string) {
    if (str.length < 1) return false;
    const lStr = str.toLowerCase();
    for (let i = 0; i < lStr.length / 2 + 1; i++) {
      if (lStr[i] != lStr[lStr.length - i - 1]) return false;
    }
    return true;
  }

  useEffect(() => {
    if (inputValue) setIsPalindrome(checkPalindrome(inputValue));
    else {
      setIsPalindrome(false);
    }
    // console.log(inputValue);
  }, [inputValue]);

  return (
    <main>
      <h1>Type any word to check if it`s a palindrome:</h1>
      <input
        autoFocus={true}
        placeholder="Example: tenet"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}></input>
      {isPalindrome ? (
        <div className="result">"{inputValue}" is a palindrome!</div>
      ) : (
        inputValue && (
          <div className="wrong result">
            "{inputValue}" is NOT a palindrome!
          </div>
        )
      )}
      <h3>About</h3>
      Simple palindrome checker, nothing special.
      <h4>Techs</h4>
      <div className="tech-list">Javascript &#183; React</div>
    </main>
  );
}

export default PalindromeChecker;
