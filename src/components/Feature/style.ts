import styled from "styled-components";

export const Feature = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin-top: 1rem;
    position: relative;
    top: 75px;
    opacity: 0;
    animation-duration: 1s;
    animation-name: lazy;
    animation-fill-mode: forwards;

    & > div:first-child {
        margin: 1rem 0;
        font-size: 5rem;
    }

    & > div:nth-child(2) {
    margin: .6rem 0;
    font-size: 1.8rem;
    font-weight: 600;
    color: rgb(71, 71, 71);
    }

    & > div:nth-child(3) {
    margin: .6rem 0;
    font-size: 1.2rem;
    }


    @keyframes lazy {
        0% {
            top: 75px;
            opacity: 0;
        }
        100% {
            top: 0;
            opacity: 1;
        }
    }

    @media (min-width: 1024px) {
        & > div:first-child {
            margin: 1rem 0;
            font-size: 3rem;
        }

        & > div:nth-child(2) {
            margin: .6rem 0;
            font-size: 1.4rem;    
            font-weight: 600;
            color: rgb(71, 71, 71);
        }

        & > div:nth-child(3) {
            margin: .6rem 0;
            padding: 0 2.6rem;
            font-size: 1rem;
            color: rgb(168, 168, 168);
        }
    }


`