import styled from "styled-components";


export const Nav = styled.nav`
    .pagination {
        margin-top: 15px;
        padding: 1rem 0;
        margin-bottom: 0;
        list-style-type: none;
        display: flex;
        justify-content: center;
    }

    .pagination > li {
        float: left;
        margin: 0 5px;
        ${({theme}) => theme.anchors.pagination}
    }
    
    .current {
        ${({theme}) => theme.anchors.selected}
    }

    .pagination > li > a {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: .8rem;
        font-size: .8rem;
        max-width: 40px;
        width: 100%;
        height: 40px;
        transition: all .5s;
        outline: none;
    }

    .pagination > li > a > svg {
        font-size: 1rem;
    }

`