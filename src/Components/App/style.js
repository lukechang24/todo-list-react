import styled from "styled-components"
import gradient from "../../Images/gradient-pattern.jpg"

const S = {}

S.AppContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    background-image: url(${gradient});
    background-size: cover;
    background-repeat: no-repeat;
`

export default S