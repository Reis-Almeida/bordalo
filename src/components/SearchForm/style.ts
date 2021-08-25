import styled from "styled-components";


export const Form = styled.div`
    max-width: 1170px;
    width: 100%;
    min-height: 450px;
    position: relative;
    top: 15px;
    opacity: 0;
    z-index: 20;
    animation-name: fadeInForm;
    animation-duration: 1s;
    animation-delay: .3s;
    animation-fill-mode: forwards;

    & > ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        height: 42px;
    }

    & > ul li {
        float: left;
        padding: .5rem .7rem;
        font-weight: var(--e-global-typography-primary-font-weigh);
        margin-right: 5px;
        font-size: 1.1rem;
        font-weight: 600;
    }

    .formPosition {
        position: relative;
        top: 40px;
    }

    .formPosition > ul > li {
        font-size: 15px;
        line-height: 1.42857;
        font-weight: 400;
        border-radius: 4px 4px 0 0;
        padding: 11px 10px;
        cursor: pointer;
        display: inline;
        margin-right: 5px;
    }

    .searchContainer {
        width: 100%;
        height: 100%;
        padding: .5rem;
        margin: 0;
        opacity: 1;
        border-radius: 0 4px 4px 4px;
        background-color: #fff;
    }

    .containerInputs > div:first-child {
        padding: .7rem 0;
    }

    .containerInputs > input {
        margin: 2.5rem 0 0 1rem;
    }

    .buttons {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
    }

    .buttons > button,
    .buttons > input {
        border: none;
        transition: all .3s;
        ${({theme}) => theme.buttons.primary}
    }

    .buttons > input {
        ${({theme}) => theme.buttons.primary}
    }

    @media (min-width: 720px) {
        .inputPositions {
            display: grid;
            grid-template-columns: 2fr 2fr 1fr 1fr;
            column-gap: 10px;
        }

        .containerInputs {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 .5rem;
        }
        
        .SubmitButtonDesktop {
            height: 100%;
            outline: 0!important;
            display: inline-block;
            margin-bottom: 0;
            font-weight: 500;
            text-align: center;
            vertical-align: middle;
            touch-action: manipulation;
            cursor: pointer;
            background-image: none;
            border: 1px solid transparent;
            white-space: nowrap;
            padding: 11px 15px;
            font-size: 14px;
            line-height: 1.42857;
            border-radius: 4px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            width: 181px;
        }

        .containerInputs > div:first-child {
            padding: .3rem 0;
            margin-right: 15px;
        }

        .formPosition {
            position: relative;
            top: 200px;
        }

        .formPosition > ul > li {
            font-size: 15px;
            line-height: 1.42857;
            font-weight: 400;
            border-radius: 4px 4px 0 0;
            padding: 11px 95px;
            cursor: pointer;
            display: inline;
            margin-right: 5px;
        }
    }

    @keyframes fadeInForm {
        0% {
            opacity: 0;
            top: 15px;
        }

        100% {
            opacity: 1;
            top: -10px;
        }
    }

`