import styled from "styled-components";

export const Form = styled.form`//announceForm
    text-align: left;

    & div {
        margin: 1rem 0;
    }

    & > div:first-child,
    & h2 {
        margin: 0;
    }

    & > div:first-child {
        margin-bottom: .8rem;
    }

    & textarea {
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
        -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
        transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
        transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
        transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
        width: 100%;
    }

    .titleContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: .9rem;
    }

    .inputButtonContainer {
        display: flex;
        margin: 0;
    }

    .inputButtonContainer button {
        border: 0;
        min-width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: .8rem;
        transition: all .3s;
        ${({theme}) => theme.anchors.primary}
    }

    .ErrorMessage {
        margin-top: .6rem;
        color: rgb(197, 0, 10);
        font-weight: 600;
    }

    .labelBlock {
        display: block;
    }

    .SubmitContainer {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        input {
            ${({theme}) => theme.anchors.primary}
        }
    }

    .checkContainer {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 0;
    }

    .DropDownContainer {
        margin-top: .6rem;
    }

    .DropDownContainer label {
        font-weight: 400;
        font-size: 14px;
        color: #333;
    }

    .DropDownContainer input {
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

    .DropDownContainer input[type=checkbox] {
        display: inline-block;
        width: auto;
        height: auto;
        text-align: left;
    }

    @media (max-width: 370px) {
        .DropDownContainer label {
            font-size: .8rem;
        }
    }
`