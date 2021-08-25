import styled from "styled-components";

export const QuantityContainer = styled.div`
    background-color: #fff;
    padding: 1.25rem;

    & span {
        float: right;
        color: #9b9b9b;
    }

    a {
        ${({theme}) => theme.anchors.primaryFont}
    }
`