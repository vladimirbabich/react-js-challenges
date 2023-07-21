import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const navUrls = {
    react: [
      { title: 'TODO List', path: '/todo-list' },
      { title: 'Redux example', path: '/redux' },
    ],
    javascript: [
      { title: 'Palindrome checker', path: '/palindrome' },
      { title: 'Brackets checker', path: '/brackets' },
      { title: 'Array modifier', path: '/arrays' },
      { title: 'Prime counter', path: '/prime-counter' },
    ],
  };

  return (
    <header>
      <span className="logo">Challenges BBCH</span>
      <nav>
        {Object.keys(navUrls).map((type) => (
          <div className="menu" key={type}>
            <div className="menu-item">{type}</div>
            <div className="sub-menu">
              {navUrls[type].map((item) => (
                <NavLink className="link" key={item.path} to={item.path}>
                  {item.title}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </header>
  );
}
