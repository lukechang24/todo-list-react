import styled from "styled-components"

const S = {}

S.TodoList = styled.div`
    width: 300px;
    height: 500px;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 10px;
    padding: 0 25px;
    box-shadow: 0px 5px 50px -15px black;
`

S.Title = styled.h1`
    width: 100%;
    text-align: center;
    margin: 25px 0;
`

S.Container1 = styled.div`
    display: flex;
    justify-content: space-between;
`

S.SearchContainer = styled.div`
    position: relative;
    align-items: center;
`

S.Search = styled.input`
    width: 200px;
    padding: 0 0 5px 30px;
    border-width: 0 0 2px;
    outline: 0;
`

S.SearchIcon = styled.i`
    position: absolute;
    left: 0;
    margin: 3px 0 0 3px;
`

S.NewButton = styled.button`
    background-color: #12e042;
    color: white;
    padding: 5px 10px;
    border: none;
    border-radius: 10px;
`

S.TodoForm = styled.div`
    width: 100%;
    display: none;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    &.show {
        display: flex;
    }
`

S.TodoInput = styled.input`
    width: 100px;
    padding: 0 0 2.5px;
    border-width: 0 0 2px;
    outline: 0;
`

S.Container2 = styled.div`
    display: flex;
    align-items: center;
`

S.SaveButton = styled.button`
    background-color: #4A8BF5;
    color: white;
    padding: 5px 10px;
    margin-left: 15px;
    border: none;
    border-radius: 10px;
`

S.Cancel = styled.i`
`

S.TodoContainer = styled.div`
    display: flex;
    margin-top: 30px;
    justify-content: space-between;
    &.hide {
        display: none;
    }
`

S.Todo = styled.p`

`

S.InterfaceContainer = styled.div`
    display: flex;
`

S.Edit = styled.i`
    margin-left: 15px;
`

S.Delete = styled.i`
    margin-left: 15px;
`

S.EditForm = styled.div`
    display: flex;
    margin-top: 30px;
    justify-content: space-between;
    &.hide {
        display: none;
    }
`

S.Logout = styled.h3`
    position: absolute;
    top: 25px;
    right: 25px;
    color: white;
    cursor: pointer;
    &:hover {
        border-bottom: 2px solid white;
    }
`

export default S