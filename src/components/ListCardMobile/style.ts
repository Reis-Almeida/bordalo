import styled from "styled-components";

export const CardMobile = styled.div`
    max-width: 480px;
    margin-top: 3rem;
    background-color: #fff;
    box-shadow: 0 0 5px 2px rgb(0 0 0 / 5%);
    margin-bottom: 1rem;

    .cardPrice {
        padding: 1rem 0;
        font-size: 1.8rem;
        color: #24bd75;
        font-weight: 600;
    }

    & .cardPrice {
        padding: 1.4rem 0;
    }

    .cardFeatures {
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        color: darkgrey;
        font-size: 1.6rem;
        font-weight: 600;
        padding-top: .5rem;
        flex-wrap: wrap;
    }

    .cardFeatures > div {
        margin-left: .5rem;
        display: flex;
        padding: .2rem;
        justify-content: center;
        align-items: flex-end;
    }

    .cardFeatures > div:first-child {
        margin-left: 0;
    }

    .cardFeatures > div > span {
        font-size: 1.2rem;
        margin-left: .6rem;
        margin-top: .3rem;
        font-weight: 300;
    }

    .cardFeatures > div::after {
        content: '|';
        font-size: 1.5rem;
        font-weight: 100;
        margin-left: .3rem;
        margin-right: .4rem;
    }
    

    & .cardFeatures {
        min-height: 91px;
        align-items: flex-start;
    }

    .feature {
        background-color: ${({theme}) => theme.colors.primary};
    }

    .imageMobile {
        max-height: 275px;
        width: 100%;
        height: 100%!important;
    }

    .cardFeaturesContainerMobile {
        display: flex;
        justify-content: space-between;
        background-color: #fff;
        margin: .6rem 0;

        a {
            ${({theme}) => theme.anchors.primary}
        }
    }

    .priceCardContainer span {
        background-color: ${({theme}) => theme.colors.primary};
    }

    @media (min-width: 1200px) {
            margin-top: 0;
    }

    @media (min-width: 1024px) and (max-width: 1500px) {
            margin-top: 0;

            .cardFeatures {
                font-size: 1.3rem;
            }

            .cardFeatures > div::after {
                font-size: 1.6rem;
            }
    }

    @media screen and (min-width: 1500px) {
            margin-top: 0;    
            max-width: 380px;   
            height: fit-content;

    }

    @media (min-width: 960px) and (max-width: 1200px) {
            margin-top: 0;
    }

    @media (min-width: 640px) and (max-width: 960px) {
            margin-top: 0;
        
    }
`