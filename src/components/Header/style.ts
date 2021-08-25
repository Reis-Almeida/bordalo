import styled from "styled-components";


export const Header = styled.header`
    .Header {
        position: fixed;
        top: 0; /* Stick it to the top */
        left: 0;
        box-sizing: border-box;
        transition: .5s;
        max-height: 80px;
        height: 100%;
        width: 100%;

        display: flex;
        padding: 0 2.4rem;
        align-items: center;
        justify-content: space-between;
        z-index: 999;
    }

    .fixed-btn {
        position: fixed;
        right: 5px;
        bottom: 5px;
        text-align: center;
        color: #fff;
        height: 120px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        border: none;
        z-index: 889;
        -webkit-transition: none;
        transition: none;
    }

    .fixed-btn a {
        display: block;
        background-color: #00ce2c;
    }

    .fixed-btn button {
        background-color: #0093d1;
    }

    .fixed-btn a,
    .fixed-btn button {
        display: block;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        transform: translate(-50%,-50%);
        width: 45px;
        font-size: 18px !important;
        color: #fff;
        height: 45px;
        border-radius: 50%;
        box-shadow: 1px 1px 12px 0 #000;
    }

    .fixed-btn button {
        transition: all .3s;
        opacity: 1;
    }

    .fixed-btn .top-screen {
        opacity: 0;
    }

    .black {
        background-color: #000;
    }

    
    .personalInfo {
        font-size: 14px;
        font-weight: 500;
        display: none;
    }

    .personalInfo a {
        display: flex;
        align-items: center;
        ${({theme}) => theme.anchors.white}
    }

    .Nav {
        background-color: rgb(82, 82, 82);
        display: grid;
        grid-area: nav;
        position: absolute;
        top: 80px;
        left: 0;
        border-radius: 0 0 10px 10px;
        padding: 2rem 0;
        grid-template-rows: repeat(6, auto);
        row-gap: 18px;
        align-items: center;
        justify-items: center; 
        width: 100vw;
    }

    .Burger {
        display: inline;
        grid-area: burger;
        margin: 0 15px 0 0;
        padding: 0;
        justify-self: end;
        font-size: 40px;
        border: none;
        color: #fff;
        background: none;
        outline: none;
        transition: 0.1s;
    }

    .Burger button svg {
        font-size: 55px;
    }

    .Burger:active {
        transform: scale(1.2);
    }

    .Nav a {
        color: #fff;
        font-size: 1rem;
        font-weight: 500;
        transition: 0.5s;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .icons {
        display: none;
    }

    .icons > a:first-child {
        margin-bottom: 2px;
    }

    .icons a {
        padding: 0 .5rem;
        ${({theme}) => theme.anchors.white}
    }

    .imageLogo {
        width: 150px;
        margin-top: 5px;
    }

    @media (min-width: 1024px) {
        .Header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            max-height: 120px;
            background: none;
        }
        .imageLogo {
            width: auto;
        }

        .personalInfo {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .Nav a:hover {
            transform: scale(1.1);
        }

        .Logo {
            height: auto;
            width: auto;
        }

        .Nav {
            display: flex;
            position: initial;
            align-items: center;
            background: none;
            padding: 0;
            width: auto;
            top: 110px;
        }

        .Nav a {
            font-size: 0.8rem;
            font-weight: 700;
            transition: 0.5s;
            text-decoration: none;
            padding: 0 1rem;
        }

        .Nav a:hover {
            transform: scale(1.1);
        }

        .Burger {
            display: none;
        }

        .icons {
            display: block;
            position: absolute;
            display: flex;
            align-items: center;
            top: 10px;
            right: 2.4rem;
        }

        .fixed-btn {
            justify-content: flex-end;
        }

        .fixed-btn a {
            display: none;
        }
    }

    .black {
        background-color: #000;
    }

`