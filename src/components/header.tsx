/** @jsx jsx */
import { jsx, Box, MenuButton } from "theme-ui";

import Link from "next/link";

import styles from 'src/styles/Home.module.css';
import headerStyles from 'src/styles/Header.module.css';

import { useAppContext } from "src/context/parseXml";

import { useState, useEffect } from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

import { GiPhone } from "react-icons/gi";
import { IoLogoWhatsapp, IoIosArrowUp } from "react-icons/io";
import { MdMailOutline } from "react-icons/md";
import { AiOutlineWhatsApp } from "react-icons/ai";

import { useRouter } from "next/router";

import { CSSTransition } from "react-transition-group";
import React from 'react';

const differentRouters = ['/team', '/list', '/property', '/employee'];

const isDifferentUrl = (path : string) => {

    const slicedPath = path.split("?")[0];
    if(differentRouters.includes(slicedPath)) {
        return true;
    }

    return false;
}

const HeaderComponent : React.FC = () => {

    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const app = useAppContext();

    const [topHeader, setTopHeader] = useState('black');

    const { asPath } = useRouter();

    const [topClass, setTopClass] = useState("top-screen");

    const checkHeaderColor = (mediaQuery : any) => {
        if(mediaQuery.matches && !isDifferentUrl(asPath)) {

            if(window.pageYOffset > 0) {
                setTopHeader('black');
                return;
            }

            if(window.pageYOffset === 0) {
                setTopHeader('');
                return;
            }
        } else {
            setTopHeader('black');
        }

        if(window.pageYOffset > 7) {
            setTopClass("");
        } else {
            setTopClass("top-screen");
        }
    }

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 1024px)");
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        checkHeaderColor(mediaQuery);
        window.onscroll = () => checkHeaderColor(mediaQuery);

        handleMediaQueryChange(mediaQuery);

        return () => {
          mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    const handleMediaQueryChange = (mediaQuery : any) => {
        if (mediaQuery.matches) {
            setIsSmallScreen(false);
        } else {
            setIsSmallScreen(true);
        }
    };

    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
    }

    const goToTop = () => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }

    return (
        <>
            <div className="fixed-btn">
                <a href="https://api.whatsapp.com/send?phone=55 6193817124" target="_blank">
                    <AiOutlineWhatsApp />
                </a>
                <button onClick={goToTop} className={topClass}>
                    <IoIosArrowUp />
                </button>
            </div>
            <header className={`Header ${topHeader}`}>
                <Box>
                    <div>
                        <div className={headerStyles.personalInfo}>
                            <Link href="tel:(61)2195-0060" passHref={true}>
                                <a sx={{ variant: 'anchors.white' }} target="_blank">
                                    <GiPhone sx={{ position: 'relative', top: '2px', right: '5px' }} /> {app.currentCorretor.tel}
                                </a>
                            </Link>
                            <Link href={`https://api.whatsapp.com/send?phone=${app.currentCorretor.whats}`} passHref={true}>
                                <a sx={{ variant: 'anchors.white' }} target="_blank">
                                    <IoLogoWhatsapp sx={{ position: 'relative', top: '2px', right: '5px' }} /> whatsapp
                                </a>
                            </Link>
                            <Link href={`mailto:${app.currentCorretor.email}`} passHref={true}>
                                <a sx={{ variant: 'anchors.white' }} target="_blank">
                                    <MdMailOutline sx={{ position: 'relative', top: '2px', right: '5px' }}/> {app.currentCorretor.email}
                                </a>
                            </Link>
                        </div>


                        <Link href="/">
                            <a>
                                <img 
                                    src={"public/images/bo_logo.png"}
                                    alt="Empresa logo"
                                    className={styles.imageLogo}
                                />
                            </a>
                        </Link>
                    </div>

                </Box>

                <div>
                    <div className={headerStyles.icons}>
                        <Link href="https://www.facebook.com/BordaloImob/" passHref={true}>
                            <a sx={{ variant: 'anchors.white' }} target="_blank">
                                <FaFacebookSquare 
                                    size={18}
                                    href={''}
                                />
                            </a>
                        </Link>

                        <Link href="https://www.instagram.com/bordaloimob/" passHref={true}>
                            <a sx={{ variant: 'anchors.white' }} target="_blank">
                                <FaInstagram 
                                    size={18}
                                    href={''}
                                />
                            </a>
                        </Link>
                    </div>

                    <CSSTransition
                        in={!isSmallScreen || isNavVisible}
                        timeout={350}
                        classNames="NavAnimation"
                        unmountOnExit
                    >
                        <nav className={headerStyles.Nav}>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                            <Link href="/company">
                                <a>Quem Somos</a>
                            </Link>
                            {app.currentCorretor.Url === "" && (
                                <Link href="/team">
                                    <a>Equipe</a>
                                </Link>
                            )}
                            {app.currentCorretor.Url !== "" && (
                                <Link href={{
                                    pathname: "/employee",
                                    query: { code: app.currentCorretor.code }
                                }}>
                                    <a>Corretor</a>
                                </Link>
                            )}
                            <Link href="/services">
                                <a>Serviços</a>
                            </Link>
                            <Link href="/news">
                                <a>Notícias</a>
                            </Link>
                            <Link href="/contact">
                                <a>Contato</a>
                            </Link>
                        </nav>
                    </CSSTransition>
                </div>

                {isSmallScreen && (
                    <Box
                        aria-label='Toggle Menu'
                        className={headerStyles.Burger}
                    >
                        <MenuButton
                            onClick={toggleNav}
                        />
                    </Box>
                )}
            </header>
        </>
    );
}

export default React.memo(HeaderComponent);
