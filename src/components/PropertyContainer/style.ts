import styled from "styled-components";

export const ContainerFull = styled.div`
    &, .containerFull {
        width: 100%;
        max-height: 600px;
        height: 100%;
        display: flex;
        justify-content: center;
        margin-top: 80px;
    }

    & > .containerFull {
        margin-top: 0;
        z-index: 99;
    }

    .thumbContainer {
        max-width: 1170px;
        width: 100%;
        height: 100%;
        padding: 2rem;
        z-index: 999;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .thumbContainer .propertyOfferInfo span {
        font-size: .8rem!important;
        border-radius: 4px;
        padding: .3rem .4rem!important;
    }

    .thumbContainerTop {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .galleryButton {
        height: 50px;
        width: 150px;
        display: flex;
        justify-content: flex-end;
        list-style: none;
    }

    .galleryButton li:first-child{
        margin-right: 15px;
    }

    .galleryButton li a {
        height: 45px;
        width: 45px;
        border-radius: 10px;
        background-color: #222;
        opacity: .8;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all .3s;
    }

    .galleryButton .toolTip {
        display: flex;
    }

    .galleryButton .toolTip .toolTipText {
        font-size: .9rem;
    }

    .mapTooltip .toolTip .toolTipText {
        right: -160%;
        top: 35px;
    }

    .mapTooltip .toolTip .toolTipText::after {
        top: -75%;
        left: 50%;
        margin-top: 15px;
        transform: rotate(270deg);
    }

    .thumbInfoContainer {
        background-color: rgba(43,43,27,.73);
        padding: 16px;
        color: #fff;
    }

    .thumbInfoContainer .lineLinks {
        font-size: .8rem;
    }

    .lineLinks {
        display: none;
    }

    .lineLinksItem {
        padding: 1rem 0;
    }

    .lineLinks span,
    .lineLinksItem span {
        padding-right: .3rem;
    }

    .alignContainer h1,
    .alignContainer span {
        font-size: 28px;
        line-height: 32px;
        margin: 0 0 10px;
        font-weight: 500;
    }

    .alignContainer h1 {
        max-width: 800px;
    }

    .alignContainer {
        display: flex;
        justify-content: space-between;

    }

    .propertyLocation {
        margin: 0;
        padding: .2rem 0;
        font-size: .9rem;
    }

    @media (min-width: 1024px) {
        margin-top: 120px;
        &, .containerFull {

            height: 600px;
        }

        .lineLinks {
            display: block;
        }

    }

    @media (min-width: 1200px) {
        .galleryButton {        
            top: 30px;
            right: 50px;
        }
    }


`

export const ContainerFullBody = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 30px;
    background-color: #f9f9f9;

    .containerBody {
        max-width: 1170px;
        width: 100%;
    }

    .containerBody aside {
        margin-top: 30px;
    }


    .containerBody > main > ul > li {
        font-size: 1.1rem;
        text-transform: uppercase;
        line-height: 1.42857;
        font-weight: 400;
        border-radius: 4px 4px 0 0;
        padding: 11px 10px;
        cursor: pointer;
        display: inline;
        margin-right: 5px;
        position: relative;
        left: -20px;
        top: 7px;
    }

    .propertyDescriptionContainer {
        width: 100%;
        padding: 2.5rem;
        background-color: #fff;
    }

    .propertyDescriptionContainer h2 {
        padding-bottom: 40px;
        border-bottom: 1px solid #ddd;
        font-size: 18px;
        line-height: 18px;
        margin: 0;
        font-weight: 500;
        text-transform: inherit;
        text-align: inherit;
        margin-bottom: 20px;
    }

    .propertyDescription {
        margin-top: 1.4rem;
    }

    .propertyDescription > h3 {
        font-size: 1.3rem;
        font-weight: 500;
    }

    .propertyDescription > pre {
        font-weight: 300;
        font-size: 1.2rem;
        line-height: 1.6rem;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        white-space: break-spaces;

    }

    .propertyBasicInfo > div:first-child {
        margin-bottom: 30px;
    }

    .address {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 10px;
        row-gap: 10px;
    }

    .contactContainer  {
        margin-top: 0rem;
        background-color: #fff;
        box-shadow: 0 0 5px 2px rgb(0 0 0 / 5%);
        padding: 1rem;
    }

    .contactContainer {
        margin: 1rem 0;
    }

    .contactContainer button {
        width: 100%;
    }

    .align h3 {
        color: ${({theme}) => theme.colors.title};
    }

    .comment button {
        ${({theme}) => theme.anchors.primary}
    }

    @media (min-width: 1024px) {
        .containerBody {
            display: grid;
            grid-template-columns: 3fr 1fr;
            column-gap: 20px;
        }

        .containerBody aside {
            margin-top: 0px;
        }

        .propertyBasicInfo > div:first-child {
            margin-bottom: 0;
        }

        .propertyBasicInfo {
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap: 20px;
        }

        .address {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            column-gap: 20px;
        }
    }

    @media screen and (min-width: 640px) {
        .containerBody > main > ul > li {
            padding: 11px 60px;
        }
    }


`