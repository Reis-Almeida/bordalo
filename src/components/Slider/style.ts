import styled from "styled-components";

export const SliderContainer = styled.div`
    position: relative;
    width: 100%;

    &, .SliderInputContainer {
        margin-top: .6rem;
    }

    .SliderInputContainer > div > span {
        font-size: .8rem;
    }
    
    .SliderInputContainer {
        display: flex;
        justify-content: space-between;
    }

    .SliderInputContainer input {
        display: block;
        width: 100%;
        height: 42px;
        padding: 6px 15px;
        font-size: 14px;
        line-height: 1.42857;
        color: #959595;
        background-color: #fff;
        background-image: none;
        border: 1px solid #ccc;
        border-radius: 4px;
        -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
        -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
        transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
        width: 100%;
    }

    label, .SliderInputContainer div span {
        color: ${({theme}) => theme.colors.title } ;
    }

    .SliderInputContainer > div:first-child {
        width: 46%;
    }

    .SliderInputContainer > div:nth-child(2) {
        width: 49%;
    }

    .ErrorMessage {
        margin-top: .6rem;
        color: rgb(197, 0, 10);
        font-weight: 600;
    }
`