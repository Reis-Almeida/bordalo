import styled from "styled-components";

export const Animation = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 40px;
    display: flex;

    .section {
        display: inline-flex;
    }

    .section > div:nth-child(1) {
        margin-right: 25px;
    }

    .section > div {
        font-size: 3.5rem;
        color: aliceblue;
        font-weight: 700;
        position: relative;
    }


    .obj {
        width: 6px;
        height: 40px;
        background: cadetblue;
        margin: 0 3px;
        border-radius: 10px;
        animation: loading 0.8s infinite;
    }

    .obj:nth-child(2) {
        animation-delay: .1s;
    }
    .obj:nth-child(3) {
        animation-delay: .2s;
    }
    .obj:nth-child(4) {
        animation-delay: .3s;
    }
    .obj:nth-child(5) {
        animation-delay: .4s;
    }
    .obj:nth-child(6) {
        animation-delay: .5s;
    }
    .obj:nth-child(7) {
        animation-delay: .6s;
    }
    .obj:nth-child(8) {
        animation-delay: .7s;
    }
    .obj:nth-child(9) {
        animation-delay: .8s;
    }


    @keyframes loading {
        0% {
            height: 0px;
        }
        50% {
            height: 40px;
        } 
        100% {
            height: 0px;
        }  
    }

    @media (max-width: 1150px) {
        .section {
            padding-left: 25px;
        }

        .section {
            margin-left: 25px;
        }

        .section > div {
            font-size: 2.5rem;
        }

    }
`