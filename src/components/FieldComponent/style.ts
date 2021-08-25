import styled from "styled-components";

export const Div = styled.div`
    margin-top: .6rem;

        label {
            font-weight: 400;
            font-size: 14px;
            color: #333;
        }

        select,
        input {
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

        input {
            width: 100%;
        }

        input[type=checkbox] {
            display: inline-block;
            width: auto;
            height: auto;
            text-align: left;
        }

        @media (max-width: 370px) {
            label {
                font-size: .8rem;
            }
        }
`