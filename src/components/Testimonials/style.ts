import styled from "styled-components";

export const Testimonial = styled.div`
    min-height: 420px;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & div {
        width: 100%;
        padding: 0rem 1rem;
        text-align: end;
        font-size: 1rem;
        font-style: italic;
    }

    & h3 {
        padding: 0rem 3rem;
        font-size: 1.1rem;
        font-style: italic;
    }

    @media (min-width: 860px) {
        & div,
        & h3 {
            max-width: 1100px;
            font-size: 1.5rem;
        }

        & div {
            width: 100%;
            padding: 0rem 1rem;
            text-align: end;
            font-size: 1.3rem;
        }

        & h3 {
            padding: 2rem 5rem;
        }
    }

`