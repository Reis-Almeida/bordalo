/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useEffect, useState } from 'react';  

import section from 'src/styles/Section.module.css';
import property from 'src/styles/Property.module.css';

import { useApi } from "src/hooks/useApi";

import { IPropertyXML } from "interfaces/index";

import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

import { FaCamera, FaMapMarkedAlt } from "react-icons/fa";

import SuspenseImage from "src/components/SuspenseImage";
import Carousel from "src/components/Carousel";
import QuantityProperties from "src/components/QuantityProperties";

const numberWithCommas = (x : any, y : any) => {
    if(x && (typeof x === 'string' || typeof x === 'number')) {
      return `R$ ${x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")},00`;
    }

    if(y && (typeof y === 'string' || typeof y === 'number')) {
      return `R$ ${y.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")},00`;
    }

    return "R$ 0,00";
}

interface IPRT extends IPropertyXML {
    features: Array<string>
}

const PropertyContainer : React.FC<IPRT> = ({ 
    TipoImovel,
    TituloImovel, 
    Observacao, 
    PrecoLocacao, 
    PrecoVenda, 
    QtdBanheiros, 
    QtdVagas, 
    QtdDormitorios, 
    CodigoImovel,
    AreaTotal,
    AreaUtil,
    Cidade,
    Bairro,
    Endereco,
    Fotos, 
    QtdSuites,
    QtdSalas,
    UF,
    CEP,
    features
}) => {

    const { _sendEmail } = useApi();

    const [showGallery, setShowGallery] = useState(false);

    const [selectdTab, setSelectdTab] = useState(true);
    const [emailStatus, setEmailStatus] = useState('');

    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if(showGallery) {
            document.body.style.overflowY = "hidden";
            return;
        }
        document.body.style.overflowY = "scroll";
    }, [showGallery]);

    const handleShowModal = (showGalleryModal : boolean) => setShowGallery(showGalleryModal);

    useEffect(() => {
        if(showGallery) {
            document.body.style.overflowY = "hidden";
            return;
        }
        document.body.style.overflowY = "scroll";
    }, [showGallery]);

    const handleContact = async (e : any) => {
        e.preventDefault();
        setErrorMessage("");
        setEmailStatus("enviando");
  
        try {
  
            if(!e.target.name.value && !e.target.email.value) {
                throw new Error("Nome e e-mail são obrigatórios");
            }

            const data = {
              message: e.target.mensagem.value,
              name: e.target.name.value,
              email: e.target.email.value,
              tel: e.target.telefone.value,
              subject: e.target.assunto.value,
              code: CodigoImovel
            }

            const isSuccessfull = await _sendEmail(data);

            if(!isSuccessfull) {
                throw new Error("Ocorreu um error ao enviar sua mensagem");
            }

            setEmailStatus("sucesso");

        } catch (e) {
          setErrorMessage(e.message);
          setEmailStatus("falhou");
        }
    }

    return (
        <>
            <div className={section.containerFull}>
                {(Fotos && Fotos.Foto && Array.isArray(Fotos.Foto)) && (
                    <Carousel 
                        activeModal={showGallery}
                        setActiveModal={handleShowModal}
                        ListPhotos={Fotos.Foto}
                    />
                )}
                <SuspenseImage 
                    src={(Fotos && Fotos.Foto && Array.isArray(Fotos.Foto)) ? Fotos.Foto[0].Link[1].URLArquivo : undefined}
                    className={property.thumbProperty}
                    alt="Thumbnail"
                />

                <div className={section.containerFull}>

                <div className={property.thumbContainer}>

                    <div className={property.thumbContainerTop}>

                        <div className={property.propertyOfferInfo}>
                        <span>{(PrecoLocacao && typeof PrecoLocacao === 'string') ? 'Aluguel' : 'Venda'}</span>
                        </div>

                        <div>
                            <ul className={property.galleryButton}>
                            {(Fotos && Fotos.Foto && Array.isArray(Fotos.Foto)) && (
                                <li>
                                    <a 
                                        href="#" 
                                        onClick={() => setShowGallery(true)}
                                    >
                                        <span className={property.toolTip}>
                                            <FaCamera size={20} color={"#fff"} />
                                            <span className={property.toolTipText}>Fotos ({Fotos.Foto.length})</span>
                                        </span>
                                    </a>
                                </li>
                            )}
                            <li className={property.mapTooltip}>
                                <a href={`https://maps.google.com/?q=${Endereco}`} target="_black">
                                    <span className={property.toolTip}>
                                        <FaMapMarkedAlt size={20}  color={"#fff"}/>
                                        <span className={property.toolTipText}>Ver no mapa</span>
                                    </span>
                                </a>
                            </li>
                            </ul>
                        </div>
                    </div>

                    <div className={property.thumbInfoContainer}>

                        <div className={property.lineLinks}>
                            <span>Home</span> 
                            <span>{">"}</span> 
                            <span>{TipoImovel}</span> 
                            <span>{">"}</span> 
                            <span>{TituloImovel}, {Cidade}, {Bairro}</span> 
                        </div>

                        <div className={property.alignContainer}>
                            <h1>
                                {Bairro} - {TituloImovel}
                            </h1>

                            <span>
                                {numberWithCommas(PrecoVenda, PrecoLocacao)}
                            </span>
                        </div>

                        <p className={property.propertyLocation}>
                            {Endereco} - {CodigoImovel}
                        </p>

                    </div>

                </div>

                </div>
            </div>
            <section className={property.containerFullBody}> 
                <div className={property.containerBody}>
                    <main>
                        <ul>
                            <li 
                                sx={{
                                    backgroundColor: selectdTab ?  "#fff" : "#ddd",
                                    color: selectdTab ?  "#000" : "#959595"
                                }}
                                onClick={() => setSelectdTab(true)}
                            >
                                Descrição
                            </li>
                            <li
                                sx={{
                                    backgroundColor: !selectdTab ?  "#fff" : "#ddd",
                                    color: !selectdTab ?  "#000" : "#959595"
                                }}
                                onClick={() => setSelectdTab(false)}
                            >
                                Endereço
                            </li>
                        </ul>

                        <div className={property.propertyDescriptionContainer}>
                        {selectdTab && (
                            <>
                            <div className={property.propertyBasicInfo}>
                                <div>
                                <h2>Dados do Imóvel</h2>

                                <div>
                                    <div>
                                        <strong>{TipoImovel}</strong>
                                    </div>
                                    <div>
                                        <strong>{(AreaTotal) ? AreaTotal : 0} m² Área Total</strong>
                                    </div>
                                    <div>
                                        <strong>{(AreaUtil) ? AreaUtil : 0} m² Área Util</strong>
                                    </div>
                                    <div>
                                        <strong>{(QtdDormitorios) ? QtdDormitorios : 0} Quartos</strong>
                                    </div>
                                    <div>
                                        <strong>{(QtdSuites) ? QtdSuites : 0} Suites</strong>
                                    </div>
                                    <div>
                                        <strong>{(QtdBanheiros) ? QtdBanheiros : 0} Banheiros</strong>
                                    </div>
                                    <div>
                                        <strong>{(QtdVagas) ? QtdVagas : 0} Vagas</strong>
                                    </div>
                                    <div>
                                        <strong>{(QtdSalas) ? QtdSalas : 0} Salas</strong>
                                    </div>
                                </div>
                                </div>

                                <div>
                                <h2>Características do Imóvel</h2>

                                <ul>
                                    {features.map(f => (
                                    <li key={f}>
                                        <strong>{f}</strong>
                                    </li>
                                    ))}
                                </ul>
                                </div>
                            </div>


                            <div className={property.propertyDescription}>
                                <h2>Descrição</h2>

                                <pre>
                                {Observacao}
                                </pre>

                            </div>
                            </>
                        )}

                        {!selectdTab && (
                            <div>
                            <div>
                                <h2>Endereço</h2>

                                <div className={property.address}>
                                <div>
                                    <strong>Cidade: </strong> {Cidade}
                                </div>

                                <div>
                                    <strong>CEP: </strong> {CEP}
                                </div>

                                <div>
                                    <strong>País: </strong> Brasil
                                </div>

                                <div>
                                    <strong>UF: </strong> {UF}
                                </div>

                                <div>
                                    <strong>Bairro: </strong> {Bairro}
                                </div>

                                </div>
                            </div>
                            </div>
                        )}

                        </div>
                    </main>
                    <aside>
                        <div className={property.contactContainer}>
                            <div className={property.align}>
                                <h3 sx={{ color: "title" }}>Contato</h3>
                                <div>
                                {(emailStatus === "sucesso") &&  <AiFillCheckCircle color={"#00a115"} sx={{ marginTop: "5px", marginLeft: '10px' }} size={25} />}
                                {(emailStatus === "falhou") &&  <AiFillCloseCircle color={"#a10000"} sx={{ marginTop: "5px", marginLeft: '10px' }} size={25}/>}
                                </div>
                            </div>

                            {errorMessage && (
                            <p sx={{ color: "#a10000", display: "block" }}>{errorMessage}</p>
                            )}

                            <form onSubmit={handleContact} className={property.comment}>
                                <div>
                                    <input type="text" name="name" id="" placeholder="Nome (Obrigatório)" />
                                    <input type="text" name="email" id="" placeholder="Email (Obrigatório)" />
                                    <input type="text" name="telefone" id="" placeholder="Telefone" />
                                    <input type="text" name="assunto" id="" placeholder="Assunto" />
                                </div>

                                <textarea name="mensagem" placeholder="Mensagem" rows={10}>
                                </textarea>

                                <button type="submit" disabled={(emailStatus === "enviando") ? true : false} sx={{ variant: "anchors.primary" }}>
                                    {(emailStatus === "enviando") ? "Enviando..." : "Enviar mensagem"}
                                </button>
                            </form>

                        </div>

                        <QuantityProperties />
                    </aside>
                </div>
            </section>
        </>
    )
}

export default PropertyContainer;