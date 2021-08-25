import styled from "styled-components";

export const TeamCardOpacity = styled.a`
    .teamCard  {
        background-color: #fff;
        text-align: center;
        padding: 35px 15px;
        box-shadow: 0 0 3px rgb(0 0 0 / 15%);
        z-index: 2;
        position: relative;
        max-width: 585px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: all .5s ease!important;
    }

    .teamCard::after  {
        content: '';
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
        opacity: 0;
        border-radius: 5px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        transition: opacity 0.3s ease-in-out;
    }

    .teamCard:hover::after {
        opacity: 1;
    }

    .teamCard:hover {
        -webkit-transform: scale(1.05, 1.05);
        transform: scale(1.05, 1.05);
        z-index: 10;
    }

    .teamCardInfo {
        font-size: 14px;
        line-height: 18px;
        margin: 0 0 10px;
        font-weight: 400;
        text-transform: inherit;
        text-align: inherit;
    }

    .teamCardInfo p {
        font-size: 12px;
        line-height: 18px;
        margin: 0 0 10px;
        font-weight: 400;
        text-transform: inherit;
        text-align: inherit;
    }

    .teamCardInfo span {
        display: block;
    }

    .teamCardInfo span:nth-child(1) {
        color: ${({theme}) => theme.colors.primary};
    }

    .teamImage,
    .noImage {
        height: 150px;
        width: 150px;
        margin-bottom: 4rem;
    }

    .noImage > img,
    .teamImage > img {
        height: 150px;
        width: 150px;
        border-radius: 75px;
    }
`