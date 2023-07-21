import './ReduxExample.css';
import { actions, removeFromArray } from '../../rtk';
import { useDispatch, useSelector } from 'react-redux';
function ReduxExample() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.global);

  const dispatchRemoveFromArray = (index) => {
    dispatch(removeFromArray(index));
  };

  return (
    <main>
      <h1>Redux example</h1>
      <h2>State:</h2>
      <div className="state-list">
        {Object.keys(state).map((el) => (
          <div className="state-row" key={el}>
            <div>{el}</div>
            {state[el] instanceof Array ? (
              <div className="array-list">
                {state[el].map((item, index) => (
                  <div
                    key={index}
                    onClick={({ target }) => dispatchRemoveFromArray(index)}
                    className="array-item">
                    {item}
                  </div>
                ))}
              </div>
            ) : (
              <div>{state[el] === '' ? '-empty-' : state[el]}</div>
            )}
          </div>
        ))}
      </div>
      <h3>Modify State:</h3>
      {Object.keys(actions).map((actionName, index) => (
        <div className="action" key={index}>
          <input placeholder="type something"></input>
          <button
            onClick={(e) => {
              dispatch(actions[actionName](e.target.previousSibling.value));
              e.target.previousSibling.value = '';
            }}>
            {actionName}
          </button>
        </div>
      ))}
      <h3>About</h3>
      Simple example of state management using react & redux. Functionality:
      <ul>
        <li>Display state</li>
        <li>Update name and score</li>
        <li>Push items in array</li>
        <li>Remove items from array by clicking on item</li>
      </ul>
      <h4>Techs</h4>
      <div className="tech-list">React &#183; Redux</div>
    </main>
  );
}

export default ReduxExample;
