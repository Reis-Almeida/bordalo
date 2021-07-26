/** @jsx jsx */
import { jsx } from 'theme-ui'

import { FC, useState } from 'react';
import { IPropertyXML } from "interfaces/index";
import section from "src/styles/Section.module.css"; 
import property from "src/styles/Property.module.css";

import { MdKeyboardArrowRight } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { BiCalendar } from "react-icons/bi";
import { AiFillCamera } from "react-icons/ai";

import Link from "next/link";

const FeatureCard : FC<IPropertyXML> = ({ 
    QtdBanheiros, 
    QtdDormitorios, 
    TipoImovel,
    TipoOferta,
    DataCadastro,
    AreaUtil, 
    Fotos, 
    PrecoLocacao, 
    PrecoVenda, 
    Endereco, 
    TituloImovel, 
    CodigoImovel, 
    thumbnail  
}) => {
    const replaceImage = () => setThumb("http://allmateste.com.br/site-next/public/images/missing-image.png");
    const [thumb, setThumb] = useState<string>(thumbnail ? thumbnail : "http://allmateste.com.br/site-next/public/images/missing-image.png");

    const [quantityPhotos] = useState(Fotos ? Fotos.Foto.length : 0);

    const numberWithCommas = (x : string | number) => {
        return `${x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} ,00` ;
    }

    const getPrice = (PrecoLocacao? : string | Array<any>, PrecoVenda? : string | Array<any>) => {
        if(PrecoLocacao && typeof PrecoLocacao === 'string') {
            return `R$ ${numberWithCommas(PrecoLocacao)}`;
        }

        if(PrecoVenda && typeof PrecoVenda === 'string') {
            return `R$ ${numberWithCommas(PrecoVenda)}`;
        }
    }

    const handleType = (type : string = "1") => {

        if(type === "2") {
            return <span sx={{ backgroundColor: 'primary' }}>Destaque</span>
        }

        if(type === "3") {
            return <span sx={{ backgroundColor: 'primary' }}>Super Destaque</span>
        }

        return <div></div>
    }

    return (
        <div className={section.featureCardContainer}>
            <div className={property.imageCardContainer}>
                {thumbnail && (
                    <img 
                        src={thumb}
                        onError={replaceImage}
                        height="320"
                        alt="Thumbnail"
                    />
                )}

                <Link href={{
                    pathname: "/property",
                    query: { code: CodigoImovel }
                }}>
                    <a>
                        <div>
                            {handleType(TipoOferta)}

                            <span>{(PrecoLocacao && typeof PrecoLocacao === 'string') ? 'Aluguel' : 'Venda'}</span>
                        </div>

                        <div className={section.priceCardContainer}>
                            <span sx={{ backgroundColor: 'primary' }}>{getPrice(PrecoLocacao, PrecoVenda)}</span>

                            <span className={property.toolTip} sx={{ variant: "anchors.fotoIcones"}}>
                                <AiFillCamera />
                                <span className={property.toolTipText}>Fotos ({quantityPhotos})</span>
                            </span>
                        </div>
                    </a>
                </Link>
            </div>
            <div className={section.cardInfo}>
                <div>
                    <h3>
                        {TituloImovel}
                    </h3>

                    <span>{Endereco}</span>
                </div>

                <div className={section.cardFeaturesContainer}>
                    <div>
                        <p className={section.features}>
                            <span>Quartos: {(QtdDormitorios && typeof QtdDormitorios === 'string') ? QtdDormitorios : 0}</span>
                            <span>Banheiros: {(QtdBanheiros && typeof QtdBanheiros === 'string') ? QtdBanheiros : 0}</span>
                            <span>Área Útil: {(AreaUtil && typeof AreaUtil === 'string') ? `${AreaUtil} m²` : `0 m²`}</span>
                        </p>
                        <p className={section.features}>
                            <span>{TipoImovel}</span>
                        </p>
                    </div>
                    <div>
                        <Link href={{
                            pathname: "/property",
                            query: { code: CodigoImovel }
                        }}>
                            <a sx={{ variant: "anchors.primary" }} >
                                Ver detalhes <MdKeyboardArrowRight size={18} className={section.arrowButton} />
                            </a>
                        </Link>
                    </div>

                </div>

                <div className={section.cardFooterContainer}>
                    <div>
                        <FaUser size={12} sx={{ marginRight: '5px' }} /> Bordalo Imob
                    </div>

                    <div>
                        <BiCalendar size={15} sx={{ marginRight: '5px' }} /> {DataCadastro?.split(' ')[0]}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default FeatureCard;