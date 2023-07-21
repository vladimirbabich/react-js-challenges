import React, { useEffect, useState } from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import { ListItem } from './ListItem';

export default function TodoList({ head }): JSX.Element {
  const [nameValue, setNameValue] = useState<string>('');
  const [descriptionValue, setDescriptionValue] = useState<string>('');
  const [todoList, setTodoList] = useState<any[]>([]);

  function handleClickAdd({ target }) {
    setTodoList((prev) => {
      const key = new Date().getTime();
      return [...prev, [nameValue, descriptionValue, key]];
    });
    setNameValue('');
    setDescriptionValue('');
  }
  function handleClickDelete(e, key) {
    // e.preventDefault();
    setTodoList((prev) => {
      const index = prev.findIndex((el) => {
        return el[2] === key;
      });
      console.log(`index: ${index}`);
      if (index < 0) return [...prev];
      prev.splice(index, 1);
      return [...prev];
    });
  }
  function showTodoList(array) {
    if (todoList.length < 1) return;
    const jsxList: React.ReactElement[] = [];
    array.forEach((element) => {
      jsxList.push(
        <ListItem item={element} deleteCallback={handleClickDelete} />
      );
    });
    return jsxList;
  }

  return (
    <main>
      <div className="container p-1">
        <h1 className="mx-auto">TODO LIST</h1>
        <Form className="row d-flex">
          <Form.Control
            as="input"
            placeholder={"Type task's name"}
            className="col no-gutters"
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}></Form.Control>
          <Form.Control
            placeholder="Type description"
            as="input"
            className="col lg-2 no-gutters"
            value={descriptionValue}
            onChange={({ target }) =>
              setDescriptionValue(target.value)
            }></Form.Control>
          <Button className="col sm primary" onClick={handleClickAdd}>
            Add
          </Button>
        </Form>
        {showTodoList(todoList)}
        <h2>Techs</h2>
        <div className="row d-flex justify-content-center">
          Bootstrap &#183; Typescript &#183; React
        </div>
      </div>
    </main>
  );
}
