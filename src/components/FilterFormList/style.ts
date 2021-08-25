import styled from "styled-components";


export const Form = styled.div`
    background-color: #fff;
    -webkit-box-shadow: 0 0 5px 2px rgb(0 0 0 / 5%);
    box-shadow: 0 0 5px 2px rgb(0 0 0 / 5%); 
    margin-top: 25px;
    padding: 35px;

    .filterList > div select {
        border: 1px solid #eee;
    }

    .SubmitButton {
        padding: .8rem 0;
        text-align: center;
        font-size: 1rem;
        text-transform: uppercase;
        width: 100%;
        color: #fff;
        font-weight: 600;
        margin-top: 1.8rem;
        border: none;
        border-radius: 0;
        transition: all .3s;
        background-color: ${({theme}) => theme.colors.primary};
    }

    
    @media (min-width: 1024px) {
        .filterForm {
            margin-top: 0;
        }
    }

    @media (min-width: 640px) and (max-width: 1024px) {
        .filterList > div,
        .filterList > div select {
            font-size: .8rem;
        }
    }
`