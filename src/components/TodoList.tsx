import React, { useEffect, useState } from "react"
import { Button, Form } from 'react-bootstrap'

export default function TodoList({ head }) {
  const [nameValue, setNameValue] = useState<string>('')
  const [descriptionValue, setDescriptionValue] = useState<string>('')
  const [todoList, setTodoList] = useState<any[]>([]);
  useEffect(() => {
    // console.log(nameValue)
  }, [nameValue])
  useEffect(() => {
    console.log(todoList)
  }, [todoList])

  function handleClickAdd({ target }) {
    setTodoList(prev => {
      const key = new Date().getTime();
      return [...prev, [nameValue, descriptionValue, key]]
    })
    setNameValue('')
    setDescriptionValue('')
  }
  function handleClickDelete(e, key) {
    e.preventDefault();
    // console.log(target)
    setTodoList(prev => {
      const index = prev.findIndex(el => {
        return el[2] === key
      });
      console.log(`index: ${index}`)
      if (index < 0) return [...prev];
      prev.splice(index, 1)
      return [...prev]
    })
  }
  function showTodoList(array) {
    if (todoList.length < 1) return;
    const jsxList: React.ReactElement[] = [];
    array.forEach(element => {
      jsxList.push(<div className="container border border-secondary rounded-2 w-100 p-0">
        <div className="row m-0 p-0">
          <div className="d-flex justify-content-between p-1" key={element[2]}>
            <b>{element[0]}</b>
            <span onClick={(e) => handleClickDelete(e, element[2])}>x</span>
          </div>
        </div>
        <span className="d-flex justify-content-start p-1">{element[1]}</span>
      </div>)
    });
    return jsxList;
  }

  return (<div className="container p-0">
    <h1 className="mx-auto">TODO LIST</h1>
    <Form className='row d-flex'>
      <Form.Control
        as='input'
        placeholder={'Type task\'s name'}
        className="col no-gutters"
        value={nameValue}
        onChange={(e) => setNameValue(e.target.value)}></Form.Control>
      <Form.Control
        placeholder='Type description'
        as="input"
        className="col lg-2 no-gutters"
        value={descriptionValue}
        onChange={({ target }) => setDescriptionValue(target.value)}></Form.Control>
      {/* <input
      type='text'
      
      className="row input"
      </input> */}
      <Button className="col sm primary" onClick={handleClickAdd}>Add</Button>
    </Form>
    {showTodoList(todoList)}
  </div >);
}