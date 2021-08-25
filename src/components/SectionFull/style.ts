import styled from 'styled-components';

export const Section = styled.section`
    margin-top: 80px;
    transition: background-image 1s linear;
    height: 840px;;
    display: flex;
    align-items: center;  
    justify-content: center;  

    & > img {
        width: 100%;
        position: absolute;
        z-index: -1;
        min-height: 100%;
    }

    .sectionDiv {
        max-width: 1366px;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 1366px) {
        .sectionDiv {
            max-width: 1124px;
        }

        .bannerText h1 {
            padding: 0 1.4rem;
        }
    }

    .sliderImg1,
    .sliderImg2,
    .sliderImg3,
    .sliderImg4 {
        height: 100%;
        background-repeat: no-repeat;
        background-position: center center;
        background-attachment: scroll;
        background-size: cover;
    }

    .sliderImg1 {
        background-image: url(https://www.bordaloimob.com.br/Content/imgs/2019-05-16%20at%2014.18.31.jpeg);
    }

    .sliderImg2 {
        background-image: url(https://www.bordaloimob.com.br/Content/imgs/2019-03-29%20at%2016.49.33.jpg);
    }

    .sliderImg3 {
        background-image: url(https://www.bordaloimob.com.br/Content/imgs/2019-09-26%20at%2014.16.32.jpg);
    }

    .sliderImg4 {
        background-image: url(https://www.bordaloimob.com.br/Content/imgs/2019-10-16%20at%2010.44.49.jpg);
    }
`