import styled from "styled-components";


export const SpacingContainer = styled.section`
    padding: 1rem 0;
    min-height: 725px;
    width: 100%;

    .spacingContainerEmpty {
        padding: 1rem;
        min-height: 725px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        ${({theme}) => theme.colors.title}
    }

    .spacingContainerEmpty p {
        font-size: 2rem;
    }

    .latestCards {
        padding: 0;
    }

    .latestCards > div {
        margin-bottom: 2.1rem;
        background-color: #fff;
    }

    @media (min-width: 1024px) {
        .latestCards {
            display: grid;
            column-gap: 35px;
            grid-template-columns: 1fr 1fr;
        }
    }
`