import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    background-color: #DDD;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size:1.5 rem;
    font-family: sans-serif;
    flex-direction: row-reverse;

    input{
        width: 100%;
        height: 75px;
        background-color: #DDD;
        border: 0px;
        float: right;
        clear: both;
        padding: 10px;
        display: flex;
        flex-direction: row-reverse;
        justify-content: flex-start;
        align-items: flex-start;
    }
`