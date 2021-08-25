import styled from "styled-components";

export const ListOptionContainer = styled.div`
    margin-top: -40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 18px;
    display: none;

    & > button {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-left: 15px;
        border: none;
        background: none;
        padding: 0px;
        margin-right: 2px;
    }

    & > button:focus { outline: none; }

    & > .order {
        margin-top: 3px;
        ${({theme}) => theme.anchors.primaryFont}
    }

    .orderContainer {
        display: block;
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 25px;
        box-shadow: 0 6px 12px rgb(0 0 0 / 18%);
        border: 1px solid #d9d9d9;
        right: 80px;
        background-color: #fff;
        z-index: 888;
    }

    .orderContainer a {
        padding: .6rem 1rem;
        font-weight: 600;
        transition: all .3s;
        color: #333;
    }

    .orderContainer > a:hover {
        background-color: #333;
        color: #fff;
    }

    @media screen and (min-width: 960px) {
        .listOptionContainer {
            display: flex;
            position: absolute;
        }
    }

`

export const ListContainer = styled.div`
    min-height: 950px;
    margin-bottom: 15px;

    @media screen and (min-width: 960px) {
        .listContainer {
            margin-top: 0;
        }
    }

`

export const Container = styled.div`
    & > nav {
        margin: 0;
        padding: 0;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    & > nav > ul {
        max-width: 500px;
        width: 100%;
    }

    .emptyList {
        min-height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        font-size: 1.5rem;
        font-weight: 600;
        color: #707070;
        margin-top: 100px;
    }

    
    @media screen and (min-width: 640px) {

        .emptyList {
            min-height: 500px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            font-size: 1.5rem;
            font-weight: 600;
            color: #707070;
            margin-top: 250px;
        }

    }
`