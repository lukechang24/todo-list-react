import styled from "styled-components"

const S = {}

S.LoginForm = styled.form`
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

S.InputContainer = styled.div`
    position: relative;
`

S.InputTitle = styled.h3`
    margin: 10px 0;
`

S.Input = styled.input`
    width: 300px;
    padding: 0 0 10px 25px;
    border-width: 0 0 2px;
    margin: 0 0 5px;
    outline: 0;
    &.red {
        border-color: red;
    }
`

S.Icon = styled.i`
    position: absolute;
    left: 0;
    margin: 3px 0 0 3px;
    width: 15px;
    height: 15px;
    color: black;
`

S.Submit = styled.button`
    width: 100%;
    background: rgb(139,231,255);
    background: linear-gradient(90deg, rgba(139,231,255,1) 0%, rgba(0,121,255,1) 100%);
    color: white;
    text-align: center;
    padding: 15px;
    border: none;
    border-radius: 25px;
    margin: 25px 0 50px;
    cursor: pointer;
`

S.Error = styled.p`
    color: red;
    font-size: 10px;
    min-height: 12px;
`

export default S