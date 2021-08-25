import styled from "styled-components";

export const Card = styled.div`
    max-width: 480px;
    margin-top: 3rem;
    background-color: #fff;
    box-shadow: 0 0 5px 2px rgb(0 0 0 / 5%);

    .listCard .thumbProperty {
        z-index: 0;
    }

    .feature {
        background-color: ${({theme}) => theme.colors.primary};
    }
    
    .cardDesktopFooter {
        padding: 1.4rem .6rem 0 .6rem!important;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }

    .cardDesktopFooter {
        color: #9b9b9b;

        font-size: 12px!important;
        margin: 0!important;
        font-weight: 300!important;
    }

    .cardDesktopFooter a {
        outline: 0!important;
        display: flex;
        align-items: center;
        margin-bottom: 0;
        font-weight: 500;
        color: #fff;
        text-align: center;
        vertical-align: middle;
        touch-action: manipulation;
        cursor: pointer;
        background-image: none;
        border: 1px solid transparent;
        white-space: nowrap;
        padding: 11px 15px;
        font-size: 14px;
        line-height: 1.42857;
        border-radius: 4px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .cardDesktopFooter div a {
        ${({theme}) => theme.anchors.primary}
    }

    @media screen and (min-width: 960px) {
            display: grid;
            grid-template-columns: 40% auto;
            max-width: 100%;
    }

    @media screen and (min-width: 640px) {
        &:first-child {
            margin-top: 0;
        }
    }
`