import React, { useEffect, useState } from 'react';
function BracketsChecker() {
  const [inputValue, setInputValue] = useState<string>('');
  const [isEqual, setIsEqual] = useState<boolean>(false);
  const str = '((([](({}())))))';
  function checkBrackets(str: string) {
    if (str.length < 2) return false;
    const match = str.match(/[(){}\[\]]/g);
    if (!match) return false;
    const preparedStr = match.join('');
    const brackets = {
      '(': ')',
      '{': '}',
      '[': ']',
    };
    const bracketsCount = preparedStr.split('').length;
    console.log(1);
    if (bracketsCount % 2 != 0) return false;
    console.log(2);

    const stack: string[] = [];
    for (let i = 0; i < preparedStr.length; i++) {
      console.log(preparedStr[i]);
      if (brackets.hasOwnProperty(preparedStr[i])) {
        stack.push(preparedStr[i]);
        console.log(stack);
        continue;
      } else if (!stack.length) {
        console.log(3);
        console.log(stack);
        return false;
      }
      // console.log(`${brackets[stack[stack.length - 1]]} == ${preparedStr[i]}`)
      if (brackets[stack[stack.length - 1]] == preparedStr[i]) {
        console.log('pop');
        stack.pop();
      } else {
        console.log(4);
        return false;
      }
    }
    if (stack.length > 0) return false;
    return true;
  }

  useEffect(() => {
    if (inputValue) setIsEqual(checkBrackets(inputValue));
    else {
      setIsEqual(false);
    }
  }, [inputValue]);

  return (
    <main>
      <h1>
        Type brackets: {`(, ), {, }, [ or ] `}to check if the sequence is
        correct:
      </h1>
      <input
        autoFocus={true}
        placeholder="Example: ((([](({}())))))"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}></input>
      {isEqual ? (
        <div className="result">Sequence of brackets is correct</div>
      ) : (
        inputValue && (
          <div className="wrong result">Sequence of brackets is incorrect</div>
        )
      )}
      <h4>Techs</h4>
      <div className="tech-list">Javascript &#183; React</div>
    </main>
  );
}

export default BracketsChecker;
