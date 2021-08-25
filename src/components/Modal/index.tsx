import { motion, AnimatePresence } from "framer-motion";
import React, { FC, memo, useState } from "react";

import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

import * as animationData from '../../../public/check-animation.json';
import Lottie from 'react-lottie';

import { useApi } from "src/hooks/useApi";

import { Form } from "./style";

interface IModal {
    showModal : boolean,
    handleModal: () => void
}

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
}

const an : any = animationData;

const modal = {
    hidden: {
        y: "-100vh",
        opacity: 0
    },
    visible: {
        y: "150px",
        opacity: 1,
        transition: { delay: 0.5 }
    }
}

const defaultOptions = {
    loop: false,
    autoplay: false, 
    animationData: an.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
};

const Modal : FC<IModal> = ({ showModal, handleModal }) => {

    const { _announceProperty } = useApi();

    const [values, setValues] = useState({
        cep: "",
        typeProperty: "",
        value: "",
        aluguel: false,
        venda: false,
    });


    const [textArea, setTextArea] = useState("");

    const [messageCep, setMessageCep] = useState({
        code: 0,
        message: ""
    });

    const [error, setError] = useState('');
    const [sending, setSending] = useState(false);

    const [stopAnimation, setStopAnimation] = useState(true);

    const handleTextArea = (e : React.FormEvent<HTMLTextAreaElement>) => {
        setTextArea(e.currentTarget.value);
    }

    const handleChangeform = (e : React.FormEvent<HTMLInputElement>) => {
        const name = e.currentTarget.name;

        if(name === "venda" || name === "aluguel") {
            setValues({
                ...values,
                [name]: !values[name]
            });

            return;
        }

        setValues({
            ...values,
            [name]: e.currentTarget.value
        });

    }

    const handleForm = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSending(true)

        let data : any = {
            ...values,
            message: textArea,
        }

        if(!data.cep) {
            setError("Favor, digite o CEP do imovel que deseja anunciar");
            return;
        }

        if(messageCep.code === 200) {
            data = {
                ...data,
                address: messageCep.message
            }
        }

        const isSuccessfull = await _announceProperty(data);

        if(!isSuccessfull) {
            setError("Ocorreu um error ao enviar sua mensagem, tente mais tarde.");
            setSending(false);
            return;
        }

        setStopAnimation(false);
        setSending(false);

    }

    const checkAddress = (e : React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();

        setMessageCep({
            code: 0,
            message: ""
        });

        let isnum = /^\d+$/.test(values["cep"]);

        if(!isnum) {
            setMessageCep({
                code: 500,
                message: "CEP inválido"
            });

            return;
        }

        const init = {
            method: "GET"
        }

        fetch(`http://viacep.com.br/ws/${values["cep"]}/json/`, init)
            .then(res => res.json())
            .then((data : any) => {
                const endereco = `${data.logradouro}, ${data.bairro} - ${data.uf}, ${data.localidade}`;

                setMessageCep({
                    code: 200,
                    message: endereco
                });
            })
            .catch((e : any) => {
                console.log(e)
                setMessageCep({
                    code: 500,
                    message: "Houve um error ao obter o endereço, tente novamente"
                });
            });
    }


    return (
        <AnimatePresence exitBeforeEnter>
            {showModal && (
                <motion.div
                    className="backdrop"
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <motion.div
                        className="modal"
                        variants={modal}
                    >
                        <Form onSubmit={handleForm}>
                            <div className="titleContainer">
                                <h2>Passe-nos alguns dados do imovel que deseja anunciar</h2>

                                <p className="ErrorMessage">{error}</p>

                                <AiOutlineClose  size={20} onClick={handleModal} />

                            </div>

                            <div className="DropDownContainer">
                                <label htmlFor="cep">CEP:</label>
                                <div className="inputButtonContainer">
                                    <input value={values["cep"]} onChange={handleChangeform} name="cep" id="cep"/> 
                                    <button onClick={checkAddress} >
                                        <AiOutlineSearch size={20} />
                                    </button>
                                </div>
                            </div>

                            {messageCep.code === 200 && (
                                <div>
                                    {messageCep.message}
                                </div>
                            )}

                            {messageCep.code === 500 && (
                                <div className="ErrorMessage">
                                    {messageCep.message}
                                </div>
                            )}

                            <div className="DropDownContainer">
                                <label htmlFor="typeProperty">Tipo de imovel:</label>
                                <input value={values["typeProperty"]} onChange={handleChangeform} name="typeProperty" id="typeProperty" placeholder="Ex: Casa"/>
                            </div>

                            <div className="DropDownContainer">
                                <label className="labelBlock">Tipo de negocio:</label>

                                <div className="checkContainer">
                                    <input type="checkbox" checked={values["aluguel"]} onChange={handleChangeform} name="aluguel" id="aluguel" />
                                    <label htmlFor="aluguel">Negocio</label>
                                </div>

                                <div className="checkContainer">
                                    <input type="checkbox" checked={values["venda"]} onChange={handleChangeform} name="venda" id="venda" />
                                    <label htmlFor="venda">Venda</label>
                                </div>

                            </div>

                            <div className="DropDownContainer">
                                <label htmlFor="value">Valor previsto:</label>
                                <input value={values["value"]} onChange={handleChangeform} name="value" id="value" placeholder="R$ 0,00"/>
                            </div>

                            <div className="DropDownContainer">
                                <label htmlFor="message" className="labelBlock">Mensagem:</label> //
                                <textarea 
                                    id="mensagem" 
                                    value={textArea} 
                                    onChange={handleTextArea} 
                                    name="message" 
                                    placeholder="Mensagem (Opcional)"
                                    rows={5}
                                >

                                </textarea>
                            </div>

                            <div className="SubmitContainer">
                                <input type="submit" value={sending ? "Enviando..." : "Enviar"} />

                                <Lottie 
                                    options={defaultOptions}
                                    height={60}
                                    speed={0.5}
                                    width={60}
                                    style={{ margin: 0 }}
                                    isStopped={stopAnimation}
                                />
                            </div>

                        </Form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default memo(Modal);