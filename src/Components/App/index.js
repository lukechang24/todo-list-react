import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"

import Login from "../Login"
import TodoList from "../TodoList"

import S from "./style"

const App = () => {
    return (
        <S.AppContainer>
            <Switch>
                <Route exact path="/" render={() => <Login />}></Route>
                <Route exact path="/todos" render={() => <TodoList />}></Route>
            </Switch>
        </S.AppContainer>
    );
}

export default App;
