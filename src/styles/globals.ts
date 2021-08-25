import theme from './theme';
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

body {
  color: #333;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-transform: none;
}

body,
body > div {
  min-height: 100vh;
}

a {
  color: inherit;
  text-decoration: none;
  transition: all .3s
}

input[type="button"] {
    border: none;
    outline: none;
}


.page-item-actived > a {
  background-color: #fa2e2e!important;
}

.subscribe-container > h3,
.subscribe-container > form > input[type="submit"] {
  color: #fff;
}

.subscribe-container > form > input[type="submit"] {
  background-color: #f15455;
  border-radius: 0 5px 5px 0;
  padding: .8rem;
  font-weight: 600;
}

.subscribe-container > form > input[type="text"] {
  padding: .8rem 1rem;
  border-radius: 5px 0px 0px  5px;

}

.subscribe-container > form > input[type="text"],
.subscribe-container > form > input[type="submit"] {
    border: none;
    outline:none;
    font-size: 16px;
}

.other-pages > ul {
  list-style: none;
  margin: 0;
}

.other-pages > ul li a {
  display: flex;
  align-items: center;
}

.other-pages > ul li span{
  margin: .3rem .5rem;
}

.other-pages > p {
  font-size: 1.2rem;
  font-weight: 600;
}

.other-pages > a {
  margin-right: 1rem;
}

.NavAnimation-enter {
  opacity: 0;
  transform: scale(0.5);
}

.NavAnimation-enter-active {
  opacity: 1;
  transform: translateX(0);
  transition: opacity 350ms, transform 350ms;
}

.NavAnimation-exit {
  opacity: 1;
}

.NavAnimation-exit-active {
  opacity: 0;
  transform: scale(0.5);
  transition: opacity 350ms, transform 350ms;
}

.current-page {
  font-size: 1.5rem;
  vertical-align: middle;
}

.current-page {
  line-height: 1;
}

.thumb {
  height: auto;
}

.gallery {
  width: 100%;
  padding: 2rem;
  max-height: 95vh;
  height: 100%;
}

.gallery .carousel.carousel-slider,
.gallery .carousel .slider-wrapper,
.gallery .carousel .slider-wrapper.axis-horizontal .slider,
.sectionGallery .carousel.carousel-slider,
.sectionGallery .carousel .slider-wrapper,
.sectionGallery .carousel .slider-wrapper.axis-horizontal .slider{
  height: 100%;
}

.gallery .carousel .slide img {
    max-width: 100%;
    height: auto;
    max-height: 100%;
    width: auto!important;
    vertical-align: top;
    border: 0;
}

.gallery .testimonial-gallery .carousel .slide {
  background: none!important;
}

/* Classes Alert */

.alert-enter {
  opacity: 0;
  transform: scale(0.9);
}
.alert-enter-active {
  opacity: 1;
  transform: translateX(0);
  transition: opacity 300ms, transform 300ms;
}
.alert-exit {
  opacity: 1;
}
.alert-exit-active {
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 300ms, transform 300ms;
}

.mapboxgl-map .atlas-map {
  min-height: 340px;
}


.return-top-container {
  height: 100vh;
  width: 100%;
  position: fixed;
}

.sectionGallery {
  height: 840px;
  width: 100%;
  position: absolute;
  top: 0;
}



.return-top-container > button:hover {
  background-color: #0093d1;
}

.fixed-btn .top-screen {
  opacity: 0;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  z-index: 977;
}

.modal {
  max-width: 760px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: white;
  border-radius: 10px;
  text-align: center;
  z-index: 9999;
}

.modal input[type=submit] {
  padding: .5rem 1rem;
  font-size: 1.2rem;
  transition: all .3s;
  border: none;
  color: white;
  text-transform: uppercase;
}

.modal h3 {
  color: #444;
}

.sectionDiv {
    max-width: 1366px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

@media (min-width: 1024px) {

  .sectionGallery {
    height: 100%;
  }

}



/* FeatureCard, ListCardMobile ---------------------------------------------------------------------------------------------------------- */

.cardFooterContainer {
    background-color: #fff;
    border-top: 1px solid #e5e5e5;
    padding: 14px 12px!important;
    color: #9b9b9b;

    font-size: 12px!important;
    line-height: 20px!important;
    margin: 0!important;
    font-weight: 300!important;

    display: flex;
    justify-content: space-between;
}

.cardFooterContainer > div {
    display: flex;
    align-items: center;
}

/* FeatureCard, ListCardMobile, ListCard, PropertyContainer ----------------------------------------------------------------------------- */

.toolTip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
  transition: all .3s;
}

.toolTip .toolTipText {
    visibility: hidden;
    width: 100px;
    font-size: .7rem;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    top: -5px;
    right: 110%;
    transition: all .3s;
  }
  
  
  .toolTip .toolTipText::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 100%;
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    transition: all .3s;
    border-color: transparent transparent transparent black;
  }
  
  .toolTip:hover .toolTipText {
    visibility: visible;
  }
  

/* FeatureCard, ListCardMobile, ListCard ---------------------------------------------------------------------------------------------- */

.cardFeaturesContainer a,
.cardFeaturesContainerMobile a {
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

.cardFeaturesContainerMobile > div:nth-child(2),
.cardFeaturesContainerMobile > div:first-child{
    padding: .4rem 0;
}

.cardFeaturesContainer,
.cardFeaturesContainerMobile {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    margin: .6rem 0;
}


.imageCardContainer > a:hover {
    background:rgb(0, 0, 0, .4);
    opacity: 1;
}

.imageCardContainer > a:hover {
    background:rgba(255, 255, 255, 0.4);
}

.imageCardContainer {
    position: relative;
    height: 280px;
}

.imageCardContainer > a {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transition: all .3s;
    padding: .8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #fff;
    opacity: 1;
}

.imageCardContainer > a > div {
    transition: all .3s;
    display: flex;
    justify-content: space-between;
    color: #fff;
    opacity: 1;
}

.imageCardContainer > a > div > span {
    display: inline-block;
    padding: 0 .3rem;
    font-weight: 500;
    border-radius: 3px;
    font-size: 0.6rem;
    text-transform: uppercase;
}

.imageCardContainer > a > div > span:nth-child(2) {
    background-color: #333;
}

.imageCardContainer > img {
    width: 100%;
    height: 100%;
}

@media screen and (min-width: 960px) {

  .imageCardContainer {
      max-height: 275px;
      height: 100%;
      width: 100%;
  }
}


.priceCardContainer > span {
    background: none;
    font-size: 1.1rem!important;
    line-height: 18px;
    margin: 0;
    font-weight: 500;
    text-transform: inherit;
    text-align: inherit;
}

.priceCardContainer > span:nth-child(2) {
    display: inline-block;
    border-radius: 4px;
    background-color: #000;
    opacity: .6;
    filter: alpha(opacity=60);
    padding: 0.3rem .4rem;
}

.priceCardContainer > span:nth-child(2):hover {
    opacity: 1;
}


.cardInfo > div > h3 {
    font-weight: 500;
    line-height: 20px;
    margin: 0 0 7px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-transform: inherit;
    text-align: inherit;
    font-size: 1rem;
    color: #333;
    display: block;
}

.cardInfo {
    padding: .6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.cardInfo > div > span,
.features {
    font-weight: 300;
    line-height: 13px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-transform: inherit;
    text-align: inherit;
    font-size: 0.8rem;
    color: #9b9b9b;
    display: block;
}

.cardInfo > p {
        font-size: 1.4rem;
}


.features {
    font-size: 13px;
    line-height: 16px;
    margin: 0 0 5px;
    text-transform: inherit;
    text-align: inherit;
    color: #333;
}

.features > span {
    margin-right: 15px;
}

.arrowButton {
    margin: 3px 0 0 3px;
}

  



/* PropertyContainer, ListCard ---------------------------------------------------------------------------------------------------------- */

.thumbProperty {
    width: 100%;
    max-height: 600px;
    /* height: 100%; */
    position: absolute;
}

.align {
    display: flex;
    align-items: center;
}

.align svg {
    margin-right: 7px;
}

.propertyOfferInfo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .6rem;
}

.propertyOfferInfo > span:first-child {
    display: inline-block;
    padding: 0 .2rem;
    font-weight: 500;
    border-radius: 3px;
    font-size: 0.6rem;
    text-transform: uppercase;
    background-color: #333;
    color: #fff;
}

.propertyOfferInfo > span:nth-child(2) {
    font-weight: 500;
    font-size: 1.1rem;
}

/* Pages - Section  --------------------------------------------------------------------------------------------*/

.newsArea {
    background-color: #f9f9f9;
    padding: 2rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.container,
.containerList {
    max-width: 1170px;
    width: 100%;
}

.containerStaticPage {
    margin-top: 80px;
    padding: 1.4rem;
    background-color: #fff;    
    min-height: 60vh;
}

.containerStaticPage {
    margin-top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.containerNews {
    max-width: 1200px;
    margin-bottom: 6rem;
}

.containerNews h2 {
    font-size: 24px;
    line-height: 32px;
    margin: 0 0 10px;
    font-weight: 500;
}

.containerNews img {
    height: auto;
}

.containerNews > div:first-child {
    text-align: center;
}

.imageContainer {
    width: 100%;
    margin: 1rem 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.imageContainer img {
    width: 100%;
}

.imageContainer p {
    font-size: .8rem;
}

.servicesBanner {
    padding: 55px 0; 
    text-align: center;
    font-size: 24px;
    line-height: 32px;
    margin: 0 0 10px;
    font-weight: 500;
    text-transform: inherit;
}

.serviceContainerOne,
.serviceContainerTwo,
.serviceContainerThree,
.serviceContainerFour,
.serviceContainerFive,
.serviceContainerSix,
.serviceContainerSeven,
.serviceContainerEight {
    padding: 2rem;
    background-position-x: center;
    background-position-y: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.serviceContainerOne,
.serviceContainerThree,
.serviceContainerFive,
.serviceContainerSeven {
    display: flex;
    justify-content: flex-end;
}

.serviceContainerOne {
    background-image: url(https://www.bordaloimob.com.br/Content/imgs/servicos/1.jpg);
}

.serviceContainerTwo {
    background-image: url(https://www.bordaloimob.com.br/Content/imgs/servicos/2.jpg);
}

.serviceContainerThree {
    background-image: url(https://www.bordaloimob.com.br/Content/imgs/servicos/3.jpg);
}

.serviceContainerFour {
    background-image: url(https://www.bordaloimob.com.br/Content/imgs/servicos/4.jpg);
}

.serviceContainerFive{
    background-image: url(https://www.bordaloimob.com.br/Content/imgs/servicos/5.jpg);
}

.serviceContainerSix {
    background-image: url(https://www.bordaloimob.com.br/Content/imgs/servicos/6.jpg);
}

.serviceContainerSeven {
    background-image: url(https://www.bordaloimob.com.br/Content/imgs/servicos/7.jpg);
}

.serviceContainerEight {
    background-image: url(https://www.bordaloimob.com.br/Content/imgs/servicos/8.jpg);
}


.serviceInfoContainer {
    max-width: 635px;
    font-weight: 700;
    color: #262626;
}

.serviceInfoContainer h2 {
    text-align: center;
}

.noMargin {
    margin: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.containerStaticPage > h1,
.containerStaticPage > div {
    width: 100%;
}

.pageError {
    text-align: center;
    width: 100%;
    font-size: 2rem;
    font-weight: 500;
    color: #707070;
}

.bannerText {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.bannerText > h1 {
    font-size: 43px;
    line-height: 43px;
    margin: 0 0 10px;
    font-weight: 400;
}

.bannerText > h3 {
    font-size: 24px;
    line-height: 24px;
    margin: 0 0 10px;
    font-weight: 300;
    display: block;
    color: #fff;
}

.bannerText h1 {
    color: #fff;
    font-size: 3rem;
}

.contactsContainer,
.companyContent,
.announceContent {
    background-color: #fff;
    padding: 2rem;
}

.companyContent {
    text-align: initial;
    font-size: 1.2rem;
    font-weight: 300;
}

.announceContent {
    text-align: center;
}

.tutorialContainer {
    background-color: #e5e5e5 !important;
    border-radius: 10px !important;
    padding: .8rem;
    display: block;
    text-align: left;
    color: #333;
}

.tutorialContainer p {
    padding-left: 1rem;
}

.servicesContent {
    margin: 0 auto;
    max-width: 1366px;
    padding: 2rem;
    text-align: center;
}

.containerStaticMargin {
    margin-top: 130px;
}

.servicesContent > h2,
.containerStaticMargin > h2 {
    font-weight: 500;
    font-size: 1.6rem;
    padding: 1.8rem 0;
    text-align: center;
}

.servicesContainer {
    margin-bottom: 1.2rem;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 30px;
}


.service {
    display: flex;
}

.service > div:first-child {
    min-width: 80px;
    text-align: left;
    display: table-cell;
    vertical-align: top;
    padding: 0 20px 0 0;
    font-size: 40px;
}

.serviceDescription {
    text-align: left;
    max-width: 190px;
}


.serviceDescription h3 {
    margin: 0;
    padding-bottom: .6rem;
    font-size: 20px;
    line-height: 28px;
    font-weight: 500;
}

.serviceDescription p {
    font-size: 16px;
    line-height: 22px;
    margin: 0 0 10px;
    font-weight: 300;
    text-transform: inherit;
    text-align: inherit;
}

.serviceDescription a {
    color: #0093d1;
}

.containerStatic,
.containerStaticMargin {
    background-color: #f9f9f9;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.containerStatic > .contactPage {
    max-width: 1170px;
    width: 100%;
    display: flex;
    flex-direction: column;
}

.lineLinksItem {
    padding: 1rem 0;
}

.lineLinks span,
.lineLinksItem span {
    padding: 0 .2rem;
}

.lineLinks a {
  margin-left: 3px;
  ${theme.anchors.primaryFont}

}
.lineLinksItem a {
  margin-left: 3px;

    ${theme.colors.primary}
}

.successMessage,
.errorMessage {
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: .4rem;
}

.errorMessage {
    color: rgb(172, 0, 34);
}

.successMessage {
    color: rgb(0, 167, 28);
}

.infoContainer {
    margin-top: 3rem;
}

.infoContainer > div {
    margin: 2rem 0;
}

.infoTitle {
    color: #333;
    font-size: 16px;
    font-weight: 400;
    line-height: 12px;
    margin: 0;
    text-transform: none;
    display: flex;
    align-items: center;
}

.infoTitle > svg {
    margin: 0 .4rem;
    margin-top: .2rem;
}

.infoTitle a{
  ${theme.anchors.primaryFont}
}

.TeamContentFull,
.EmployeeContentFull {
    padding: 3rem 0 2rem 0;
    margin-bottom: 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1170px;
    width: 100%;
}

.EmployeeContentFull {
    text-align: initial;
    align-items: flex-start;
    margin-top: 95px;
}

.EmployeeContentFull > div:nth-child(2) {
    min-height: 372px;
    width: 100%;
}

.employeeContainer {
    padding: 40px;
    background-color: #fff;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.employeeContainer img {
    max-width: 200px;
    width: 100%;
    height: auto;
    display: flex;
}

.employeeContainer > div:first-child {
    width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.employeeContainer > div:nth-child(2) {
    width: 350px;
    height: 100%;
}

.employeeContainer p {
    margin: 0 0 .4rem;
}

.employeeContainer > div > p:first-child {
    margin: 0;
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
    text-transform: inherit;
}

.employeeContainer p,
.employeeContainer li {
    text-align: center;
}

.employeeContainer > div > p:nth-child(2) {
    font-size: 14px;
    line-height: 20px;
    margin: 0 0 23px;
    font-weight: 300;
    text-transform: inherit;
    color: #9b9b9b;
}

.employeeListInfo {
    list-style: none;
    margin-left: 0;
    padding-left: 0;
}

.employeeListInfo span {
  text-transform: uppercase;
  
}

.employeeListInfo a {
  ${theme.colors.primary}
}

.lineLinks {
    max-width: 1600px;
}

@media (max-width: 1366px) {
    .bannerText h1 {
        padding: 0 1.4rem;
    }
}

@media (min-width: 1024px) {
  .containerList {
        margin-top: 140px;
  }

  .tutorialContainer {
      display: grid;
      grid-template-columns: 1fr 1fr;
  }

  .servicesContainer {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        column-gap: 20px;
        row-gap: 100px;
    }
}

@media (min-width: 640px) and (max-width: 1024px) {

  .servicesContainer {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 20px;
      row-gap: 100px;
  }
}

@media (min-width: 860px) {
    .contactstInfo {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 30px;
    }

    .infoContainer {
        margin-top: 0;
    }

    .employeeContainer {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
    }

    .employeeContainer > div:first-child {        
        display: inline-block;
    }

    .employeeContainer p,
    .employeeContainer li {
        text-align: inherit;
    }

    .noMargin {
        margin: 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        row-gap: 0;
        column-gap: 0;
    }

}

.banner,
.bannerCompany {
    background-color: #f6f6f6;
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: scroll;
    background-size: cover;
    border-bottom: 0 solid #d8d8d8;
    border-top: 0 solid #d8d8d8;
    padding: 0;
    height: 400px;
}

.banner {
    background-image: url(https://allmateste.com.br/site-next/public/images/tt.jpg);
}

.bannerCompany {
    background-image: url(https://bordaloimob.com.br/Content/imgs/slide-3.jpg);
}







/* Pages - Property -------------------------------------------------------------------------------------- */

.comment > textarea,
.announceForm textarea,
.comment > div > input {
    width: 100%;
    padding: .4rem;
    margin: .4rem 0;
}


.comment textarea,
.comment input {
    display: block;
    width: 100%;
    height: 42px;
    padding: 6px 15px;
    font-size: 14px;
    line-height: 1.42857;
    color: #959595;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
    width: 100%;
}

.comment textarea {
    height: 250px;
}

.comment > div > input,
.comment > textarea {
    padding: 1rem;
}

.comment button {
    padding: 1rem;
    margin-top: 1rem;
    transition: all .3s;
    color: #eee;
    border: none;
    outline: none;
    font-size: 1.1rem;
}

.formButton {
    display: flex;
    align-items: center;
}

.formButton button {
    ${theme.buttons.primary}
}

.formButton svg {
    margin: 1rem 0 0 1rem;
}

.skeletonAuthor {
    height: 230px;
}

.skeletonFilter {
    height: 530px;
}

.skeletonOther {
    height: 530px;
}

.contentReverse {
    max-width: 1600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column-reverse;
    margin-top: 3rem;
}

.emptyProperty {
    min-height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
}

.emptyProperty div {
    font-size: 4rem;
    color: #707070;
}

.emptyProperty h3 {
    font-size: 1rem;
    color: #707070;
}

.skeletonImage {
    height: 530px;
}

.skeletonBody {
    height: 700px;
}

.skeletonMessage {
    height: 420px;
}

.skeleton {
    height: 530px;
    margin-top: 3rem;
    border-radius: 0!important;
}


@media screen and (min-width: 960px) {

  .skeleton {
      height: 280px;
      margin-top: 3rem;
  }

  .skeletonContainer > span > span:first-child {
      margin-top: 0;
  }

  .emptyProperty div {
      font-size: 7rem;
  }

  .emptyProperty h3 {
      font-size: 3rem;
  }


}

@media (min-width: 1200px) {
    .contentReverse,
    .content {
        display: grid;
        grid-template-columns: 360px auto;
        column-gap: 35px;
    }   
}

@media (min-width: 960px) and (max-width: 1200px) {

    .contentReverse,
    .content {
        display: grid;
        grid-template-columns: 1fr 3fr;
        column-gap: 25px;
    }
    
}

@media (min-width: 640px) and (max-width: 960px) {
    .contentReverse,
    .content {
        display: grid;
        grid-template-columns: 1fr 2fr;
        column-gap: 25px;
    }

    .filterList > div,
    .filterList > div select {
        font-size: .8rem;
    }
    
}



/* pages - Home ------------------------------------------------------------------------------------------ */

.announceContainer {
  z-index: 20;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
}

.announceContainer h2 {
  text-shadow: 2px 2px 10px #000;
  font-size: 24px;
  line-height: 32px;
  margin: 0 0 10px;
  color: #ffffff;
}

.announceContainer a {
  color: #fff;    
  border-radius: 5px;
  font-size: x-large;
  padding: 8px 25px;

  ${theme.anchors.primary}
}

.bodyContainer {
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f6f6f6;
}

.bodyContainer > section {
  max-width: 1200px;
  width: 100%;
}

.recentPropertiesContainer,
.partners {
  padding: 1rem 0.5rem;
  display: flex;
  max-width: 1200px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.recentPropertiesContainer > h1,
.recentPropertiesContainer > p {
  text-align: center;
}

.recentPropertiesContainer > h1:first-child,
.partners > h1:first-child{
  margin: 0;
  margin-top: 3.2rem;
  font-weight: 700;
  font-size: 1.5rem;
  font-weight: 600;
}

.recentPropertiesContainer > div:nth-child(2) {
  margin-top: 1rem;
  font-size: 1.2rem;
  text-align: center;
  font-weight: 500;
}

@media (max-width: 600px) {
  .recentPropertiesContainer > h1:first-child {
    font-size: 1.8rem;    
  }
}
  
`

