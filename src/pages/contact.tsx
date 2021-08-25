import React, { useState } from 'react';

import InputMask from "react-text-mask";

import { useAppContext } from "src/context/parseXml";

import Footer from "src/components/Footer";
import { GiPhone } from "react-icons/gi";
import { FiMail } from "react-icons/fi";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

import Header from "src/components/Header";
import Head from "next/head";
import Link from "next/link";

import dynamic from "next/dynamic";

import { useApi } from "src/hooks/useApi";

const NoSSRMap = dynamic(() => import("src/components/AzureMap"), {
    ssr: false
});

function validateEmail(email : string) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function Contact() {

    const { _sendEmail } = useApi();


    const [isSending, setIsSending] = useState(false);
    const [error, setError] = useState("");

    const [successMsg, setSuccessMsg] = useState("");

    const [sent, setSent] = useState(false);

    const app = useAppContext();

    const handleContactForm = async (e : any) => {
        e.preventDefault();
        setIsSending(true);
        setSent(false);
        setError("");

        let formValues = {
            name: "",
            cel: "",
            email: "",
            subject: "",
            message: "",
        };

        if(!e.target.name.value || !e.target.email.value) {
            setError("Email e nome são obrigatórios.");
            setIsSending(false);
            return;
        }

        if(!validateEmail(e.target.email.value)) {
            setError("Digite um email valido.");
            setIsSending(false);
            return;
        }


        formValues = {
            ...formValues,
            name: e.target.name.value,
            email: e.target.email.value,
            cel: e.target.phone.value,
            message: e.target.message.value,
        }

        const isSuccessfull = await _sendEmail(formValues);

        if(!isSuccessfull) {
            setError("Ocorreu um error ao enviar sua mensagem, tente mais tarde.");
            setIsSending(false);
            return;
        }

        setSuccessMsg("Mensagem enviada, entraremos em contato contigo.");

        setSent(true);
        setIsSending(false);
    }

    return (
        <>
            <Head>
                <title>Contato - Bordalo Imob</title>
                <meta name="description" content="Profissionais capacitados, atendimento personalizado e a qualidade que você merece. Seja para vender, alugar ou avaliar seu imóvel, nossa equipe está pronta para atendê-lo!" />
            </Head>
            <Header />
            <div className="banner">
                <div className="bannerText">
                    <h1>Entre em contato</h1>
                    <h3>Fique em contato com a gente</h3>
                </div>
            </div>

            <section className="containerStatic">

                <div className="contactPage">
                    <div className="lineLinksItem">
                        <Link href="/">
                            <a>
                                Home 
                            </a>
                        </Link>
                        <span>{">"}</span> 
                        Contato
                    </div>

                    <div className="contactsContainer">
                        <div className="contactstInfo">
                            <form onSubmit={handleContactForm} className="comment">
                                {error && (
                                    <div className="errorMessage">
                                        {error}
                                    </div>
                                )}

                                {(sent) && (
                                    <div className="successMessage">
                                        {successMsg && <div>{successMsg}</div>}
                                    </div>
                                )}
                                <div>
                                    <input type="text" name="name" id="" placeholder="Nome (Obrigatório)" />
                                    <input type="text" name="email" typeof="email" id="" placeholder="Email (Obrigatório)" />
                                    <InputMask 
                                        type="text" 
                                        name="phone" 
                                        id="" 
                                        placeholder="Celular" 
                                        mask={['(',  /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]} 
                                    />
                                </div>

                                <textarea name="message" id="" placeholder="Sua mensagem" rows={10}>

                                </textarea>
                                <div className="formButton">
                                    <button type="submit" value="" disabled={isSending}>
                                        {isSending ? "Enviando..." : "Enviar"}
                                    </button>
                                    {sent && <IoIosCheckmarkCircleOutline size={35} color={"#24bd75"} />}
                                </div>
                            </form>

                            <div className="infoContainer">

                                <div>
                                    <div className="infoTitle">
                                        <GiPhone /> {app.currentCorretor.tel}
                                    </div>
                                </div>

                                <div>
                                    <div className="infoTitle">
                                        <FiMail color="#2c3e50" /> 
                                        <Link href={`mailto:${app.currentCorretor.email}`}> 
                                            <a>
                                                {app.currentCorretor.email}
                                            </a>
                                        </Link>
                                    </div>
                                </div>
 
                                <NoSSRMap 
                                    lg={"-47.882164"}
                                    lt={"-15.794229"}
                                    height={"300px"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Contact;