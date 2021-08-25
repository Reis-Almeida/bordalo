import styled from "styled-components";


export const Baseboard = styled.footer`

   .footer {
        border-top: 1px solid #eee;
        background-color: #303030;
        padding: 60px 0 40px 0;
        font-family: Quicksand;
        font-size: 15px;
        font-weight: normal;
        line-height: 28px;
        color: rgb(255, 255, 255);
        display: flex;
        justify-content: center;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
   }

    ul {
        padding: 0;
        line-height: inherit;
        border-bottom: 0;
        list-style: circle;
        margin-left: 20px;
    }

    ul li {  
        padding: .4rem 0;
    }

    ul li a:hover {  
        color:#f15455;
    }

    .footer-alignment {
        line-height: 30px;
        ${({theme}) => theme.anchors.white }
    }

    .footer-container {
        max-width: 1170px;
    }


    .footer-info-container {
        padding: 1.4rem;
    }

    .menu-description-container > h3,
    .contact-container > h3 {
        font-size: 18px;
        line-height: 18px;
        margin-bottom: 0;
    }

    .menu-description-container > p {
        line-height: 20px;
        font-weight: 300;
        font-size: 0.875rem;
    }

    .menu-description-container > span {
        font-size: 1rem;
    }

    .menu-description-container > p,
    .menu-description-container > span {
        max-width: 90%;
    }

    .menu-description-container a {
        color: #eee;
    }

    .contact-container {
        margin: 3rem 0;
    }

    .contact-container div:nth-child(2) > p,
    .contact-container div:nth-child(3) > p,
    .contact-container div:nth-child(4) > p {
        display: flex;
        align-items: center;
    }

    .contact-container div p svg {
        font-size: 25px;
        width: 20px;
        margin-right: 10px;
    }


    a {
        ${({theme}) => theme.anchors.white }
    }

    .footer-logo-container {
        width: 100%;
        padding: 0 0 25px 0;
        display: flex;
        justify-content: center;
    }


    .footer-align-text,
    .footer-align-text > a {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .footer-align-text > p > a,
    .footer-align-text > p > a > img {
        margin-left: 5px;
    }

    .footer-align-text > p > a > img {
        position: relative;
        top: 10px;
        left: 5px;
    }


    .footer-bottom {
        width: 100%;
        background-color: #000;
        color: #eee;
        display: flex;
        padding: 30px 0;
        justify-content: center;
        align-items: center;
    }

    .footer-bottom-container {
        max-width: 1170px;
        width: 100%;
        display: flex;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .footer-bottom-container {
        font-size: 14px;
    }

    @media (min-width: 490px) {
        .footer ul {
            columns: 2;
            -webkit-columns: 2;
            -moz-columns: 2;
        }

        .footer-bottom-container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }
    }

    @media (min-width: 760px) {
        .contact-container {
            margin: 0;
        }

        .footer-info-container {
            padding: 0;
        }

        .footer-info-container {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
        }

        .footer-logo-container {
            justify-content: flex-start;
        }
    }

`