import React, { useState, useEffect } from "react"
import { withRouter } from "react-router-dom"

import S from "./style"

const TodoList = (props) => {
    const [searchInput, setSearchInput] = useState("")
    const [input, setInput] = useState("")
    const [showForm, setShowForm] = useState(false)
    const [showEdit, setShowEdit] = useState(null)
    const [todos, setTodos] = useState([])

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const addTodo = () => {
        if(input) {
            setTodos(() => ([...todos, input]))
            setInput("")
        }
        setShowForm(false)
    }

    const handleEdit = (todo, index) => {
        setShowEdit(index)
        setInput(todo)
    }
    
    const editTodo = (index) => {
        let todoList = [...todos]
        todoList[index] = input
        if(!input) {
            deleteTodo(index)
        } else {
            setTodos(todoList)
        }
        setShowEdit(null)
    }

    const deleteTodo = (index) => {
        let todoList = [...todos]
        todoList.splice(index, 1)
        setTodos(todoList)
    }
    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem("todos"))
        setTodos(savedTodos)
    }, [])

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    useEffect(() => {
        let input = document.querySelector("#input")
        input.focus()
        setShowEdit(false)
        setInput("")
    }, [showForm])



    const todoList = todos.filter(todo => {
        if(searchInput) {
            return todo.indexOf(searchInput) >= 0
        } else {
            return true
        }
    }).map((todo, i) => {
        return(
            <>
                <S.TodoContainer className={showEdit === i ? "hide" : ""} key={i}>
                    <S.Todo>{todo}</S.Todo>
                    <S.InterfaceContainer>
                        <S.Edit className="fas fa-pencil-alt" onClick={() => handleEdit(todo, i)}></S.Edit>
                        <S.Delete className="fas fa-trash" onClick={() => deleteTodo(i)}></S.Delete>
                    </S.InterfaceContainer>
                </S.TodoContainer>
                <S.EditForm className={showEdit === i ? "" : "hide"}>
                    <S.TodoInput defaultValue={input} onChange={(e) => handleInput(e)}></S.TodoInput>
                    <S.SaveButton onClick={() => editTodo(i)}>Save</S.SaveButton>
                </S.EditForm>
            </>
        )
    })

    return(
        <S.TodoList>
            <S.Title>To-do List</S.Title>
            <S.Container1>
                <S.SearchContainer>
                    <S.Search placeholder="search" onChange={(e) => setSearchInput(e.target.value)}></S.Search>
                    <S.SearchIcon className="fas fa-search"></S.SearchIcon>
                </S.SearchContainer>
                <S.NewButton onClick={() => setShowForm(true)}>New</S.NewButton>
            </S.Container1>
            <S.TodoForm className={showForm ? "show" : ""}>
                <S.TodoInput id="input" value={input} placeholder="item name" onChange={(e) => handleInput(e)}></S.TodoInput>
                <S.Container2>
                    <S.Cancel className="fas fa-times" onClick={() => {setShowForm(false)}}></S.Cancel>  
                    <S.SaveButton onClick={() => addTodo()}>Add</S.SaveButton>
                </S.Container2>
            </S.TodoForm>
            {todoList.reverse()}
            <S.Logout onClick={() => props.history.push("/")}>Log out</S.Logout>
        </S.TodoList>
    )
}

export default withRouter(TodoList)