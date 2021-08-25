import styled from "styled-components";

export const Modal = styled.div`
        background-color: #222;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 999;

    .modalActions {
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 1rem 2rem;
        margin-top: 1rem;
    }

    .modalActions a svg {
        color: #eee;
    }

    .sliderGallery {
        height: 100%;
    }

    .suspense {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #707070;
        font-size: 1.2rem;
        height: 100%;
    }

    .imageContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
`