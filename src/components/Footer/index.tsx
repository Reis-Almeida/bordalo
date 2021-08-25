import { FC } from 'react';
import Link from "next/link";

import { Baseboard } from './style';
 
import { GiPhone } from "react-icons/gi";
import { IoMdArrowDropright } from "react-icons/io";
import { MdMailOutline } from "react-icons/md";

import { useAppContext } from "src/context/parseXml";
import { FaLocationArrow, FaFacebookSquare, FaInstagram } from "react-icons/fa";

const Footer : FC = () => {

    const app = useAppContext();

    return (
        <Baseboard>
            <div className="footer">
                <div className="footer-container">

                    <div className="footer-info-container">

                        <div className="menu-description-container">
                            <h3>
                                Bordalo Imob
                            </h3>

                            <p>
                                Profissionais capacitados, atendimento personalizado e a qualidade que você merece. 
                                Seja para vender, alugar ou avaliar seu imóvel, nossa equipe está pronta para atendê-lo!
                            </p>
                        </div>

                        <div className="contact-container">
                            <h3>
                                Contato
                            </h3>
                            <div>
                                <p>
                                    <FaLocationArrow size={20} /> 
                                    <span>
                                        SMAS Trecho 3, Conjunto 3 – Bloco C – Lojas 12 a 16 The Union Office – CEP 71215-300 – Brasília/DF
                                    </span>
                                </p>
                            </div>
                            <div>
                                <p>
                                    <GiPhone size={20} /> 
                                    <span>{app.currentCorretor.tel}</span>
                                </p>
                            </div>
                            <div>
                                <p>
                                    <MdMailOutline size={20} /> 
                                    <span>{app.currentCorretor.email}</span>
                                </p>
                            </div>
                            <div>
                                <Link href="/contact">
                                    <a className="footer-alignment" >
                                        Fale conosco 
                                        <IoMdArrowDropright 
                                            size={20} 
                                            style={{ 
                                                position: 'relative',
                                                top: '5px' 
                                            }} 
                                        />
                                    </a>
                                </Link>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-container">
                    <div className="footer-align-text">
                        <p>© {new Date().getFullYear()} Bordalo Imob – Todos os direitos reservados – Developed by 
                            <Link href="https://allmatech.com.br/" passHref={true}>
                                <a target="_blank">
                                    Allmatech
                                    <img
                                        src={"/images/allmatech.png"}
                                        className="footer-logo"
                                        alt="Allmatech - Tecnologia da informação"
                                        height={34}
                                        width={34}
                                    />
                                </a>
                            </Link>
                        </p>

                    </div>
                    <p>Siga-nos 
                        <Link href="https://www.facebook.com/BordaloImob/" passHref={true}>
                            <a target="_blank">
                                <FaFacebookSquare 
                                    style={{ 
                                        position: 'relative',
                                        top: '2px',
                                        left: '5px' 
                                    }} 
                                /> 
                            </a>
                        </Link>

                        <Link href="https://www.instagram.com/bordaloimob/" passHref={true}>
                            <a target="_blank">
                                <FaInstagram 
                                    style={{ 
                                        position: 'relative',
                                        top: '2px',
                                        left: '10px' 
                                    }} 
                                /> 
                            </a>
                        </Link>
                    </p>
                </div>

            </div>
        </Baseboard>
    );
}

export default Footer;