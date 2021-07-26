/** @jsx jsx */
import { jsx } from 'theme-ui';

import { useState } from "react";

import Modal from "src/components/Modal";

import styles from 'src/styles/Home.module.css';
import section from 'src/styles/Section.module.css';

import Header from "src/components/header";
import Head from "next/head";
import Link from "next/link";

import Footer from "src/components/Footer";
 
function Announce() {

    const [showModal, setShowModal] = useState(false);

    const handleModal = () => setShowModal(true);

    const closeModal = () => setShowModal(false);

    return (
        <>
            <Head>
                <title>Anuncie Gratis somos - Bordalo Imob</title>
                <meta name="description" content="Profissionais capacitados, atendimento personalizado e a qualidade que você merece. Seja para vender, alugar ou avaliar seu imóvel, nossa equipe está pronta para atendê-lo!" />
            </Head>
            <Header />
            <Modal showModal={showModal} handleModal={closeModal} />
            <div className={section.bannerCompany}>
                <div className={section.bannerText}>
                    <h1>Anuncie grátis aqui</h1>
                </div>
            </div>

            <section className={section.containerStaticPage}>
                <div className={section.announceContent}> 
                    <h2>
                        Olá, só precisamos de algumas informações para seu imóvel ser anunciado
                    </h2>

                    <h4>
                        Vamos ao passo a passo
                    </h4>

                    <div className={section.tutorialContainer}>
                        <div>
                            <ul>
                                <li>IMÓVEL</li>
                            </ul>
                            <p>Preencha as informações do seu imóvel</p>

                            <ul>
                                <li>FOTOS</li>
                            </ul>
                            <p>Entraremos em contato para agendar as fotos com o fotografo</p>

                            <ul>
                                <li>DIVULGAÇÃO</li>
                            </ul>
                            <p>Seu imóvel será divulgado nos principais portais e mídias sociais</p>
                        </div>

                        <div>

                            <ul>
                                <li>VISITAS</li>
                            </ul>
                            <p>Todas as nossas visitas são acompanhadas por corretores especialistas na região e totalmente identificados</p>

                            <ul>
                                <li>ASSESSORIA JURÍDICA</li>
                            </ul>
                            <p>Analise completa de documentação, garantias, laudo de vistorias.</p>

                        </div>
                    </div>

                    <h3>VOCÊ NÃO PAGA NADA PARA ANUNCIAR COM A BORDALO IMOB, VOCÊ SÓ PAGA QUANDO VENDER OU ALUGAR O SEU IMÓVEL!</h3>

                    <div className={styles.announceContainer}>
                        <Link href="#">
                            <a sx={{ variant: "anchors.primary" }} onClick={handleModal}>ANUNCIAR AGORA!!!</a>
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Announce;