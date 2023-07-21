import { Routes, Route, Navigate } from 'react-router-dom';
import ReduxExample from '../Challenges/ReduxExample/ReduxExample';
import TodoList from '../Challenges/TodoList/TodoList.tsx';
import PalindromeChecker from '../Challenges/PalindromeChecker/PalindromeChecker.tsx';
import BracketsChecker from '../Challenges/BracketsChecker/BracketsChecker.tsx';
import ArrayModifier from '../Challenges/ArrayModifier/ArrayModifier.tsx';
import PrimeCounter from '../Challenges/PrimeCounter/PrimeCounter.tsx';

export default function AppRouter() {
  const routes = [
    {
      path: '/',
      key: '/',
      element: <Navigate to="/redux" replace={true}/>,
    },
    {
      path: '/todo-list',
      key: '/todo-list',
      element: <TodoList />,
    },
    {
      path: '/redux',
      key: '/redux',
      element: <ReduxExample />,
    },
    {
      path: '/palindrome',
      key: '/palindrome',
      element: <PalindromeChecker />,
    },
    {
      path: '/brackets',
      key: '/brackets',
      element: <BracketsChecker />,
    },
    {
      path: '/arrays',
      key: '/arrays',
      element: <ArrayModifier />,
    },
    {
      path: '/prime-counter',
      key: '/prime-counter',
      element: <PrimeCounter />,
    },
  ];
  return (
    <Routes>
      {routes.map((el) => (
        <Route path={el.path} key={el.key} element={el.element}></Route>
      ))}
    </Routes>
  );
}
