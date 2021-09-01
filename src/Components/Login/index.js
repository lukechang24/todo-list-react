import React, { useState, useEffect } from "react"
import { withRouter } from "react-router-dom"

import S from "./style"

const Login = (props) => {
    const initState = {
        email: "",
        password: ""
    }
    const [inputs, setInputs] = useState(initState)
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [formError, setFormError] = useState("")

    const handleInputChange = (e) => {
        setInputs((inputs) => ({...inputs, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // const requestOptions = {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(inputs)
        // };
        // const response = await fetch("http://dev.rapptrlabs.com/Tests/scripts/user-login.php", requestOptions)
        // const data = await response.json()
        // console.log(data)
        if(inputs.email === "test@rapptrlabs.com" && inputs.password === "Test123") {
            props.history.push("/todos")
        } else {
            handleErrors()
        }
    }

    const handleErrors = () => {
        if(!inputs.password) {
            setPasswordError("Please fill the required fields")
        } else if(inputs.password.length < 4) {
            setPasswordError("Password must be at least 4 characters")
        }
        if(!inputs.email) {
            setEmailError("Please fill the required fields")
        } else if(inputs.email.indexOf("@") === -1 || inputs.email.indexOf(" ") === -1) {
            setEmailError("Not a valid email")
        }
    }

    return(
        <S.LoginForm onSubmit={(e) => handleSubmit(e)}>
            <S.Title>Rapptr Labs</S.Title>
            <S.InputTitle>Email</S.InputTitle>
            <S.InputContainer>
                <S.Input className={emailError ? "red" : ""} name="email" placeholder="user@rapptrlabs.com" onChange={(e) => handleInputChange(e)}></S.Input>
                <S.Icon className="fas fa-user"></S.Icon>
            </S.InputContainer>
            <S.Error>{emailError}</S.Error>
            <S.InputTitle>Password</S.InputTitle>
            <S.InputContainer>
                <S.Input className={passwordError ? "red" : ""} name="password" type="password" placeholder="Must be at least 4 characters" onChange={(e) => handleInputChange(e)}></S.Input>
                <S.Icon className="fas fa-lock"></S.Icon>
            </S.InputContainer>
            <S.Error>{passwordError}</S.Error>
            <S.Submit>Login</S.Submit>
        </S.LoginForm>
    )
}

export default withRouter(Login)