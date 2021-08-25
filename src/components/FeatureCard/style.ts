import styled from "styled-components";

export const FeatureCardContainer = styled.div`
    border: 1px solid #e9e9e9;
    margin-top: 3rem;
    background-color: #fff;
    max-width: 550px;

    .featured {
        background-color: ${({theme}) => theme.colors.primary};
    }

    .cardFeaturesContainer div a {
        ${({theme}) => theme.anchors.primary}
    }
    
    .toolTip {
        ${({theme}) => theme.anchors.fotoIcones}
    }
`
