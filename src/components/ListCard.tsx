/** @jsx jsx */
import { jsx } from 'theme-ui'

import { FC, useState } from 'react';
import { IPropertyXML } from "interfaces/index";
import property from "src/styles/Property.module.css";
import section from "src/styles/Section.module.css";

import Link from "next/link";

import { BiCalendar } from "react-icons/bi";
import { FaUser } from "react-icons/fa";

import { MdKeyboardArrowRight } from "react-icons/md";

import { AiFillCamera } from "react-icons/ai";
import SuspenseImage from "src/components/SuspenseImage";

const ListCard : FC<IPropertyXML> = ({ 
    CodigoImovel, 
    QtdBanheiros, 
    QtdDormitorios, 
    TipoOferta, 
    Endereco, 
    TipoImovel, 
    AreaUtil, 
    thumbnail, 
    Fotos,
    DataCadastro, 
    TituloImovel, 
    PrecoVenda, 
    PrecoLocacao  }) => {

    const [quantity] = useState(Fotos ? Fotos.Foto.length : 0);

    const handleType = (type : string = "1") => {

        if(type === "2") {
            return <span sx={{ backgroundColor: 'primary' }}>Destaque</span>
        }

        if(type === "3") {
            return <span sx={{ backgroundColor: 'primary' }}>Super Destaque</span>
        }

        return <div></div>
    }

    const numberWithCommas = (x : string | number) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ",00";
    }

    const getPrice = (PrecoLocacao? : string | Array<any>, PrecoVenda? : string | Array<any>) => {
        if(PrecoLocacao && typeof PrecoLocacao === 'string') {
            return `R$ ${numberWithCommas(PrecoLocacao)}`;
        }

        if(PrecoVenda && typeof PrecoVenda === 'string') {
            return `R$ ${numberWithCommas(PrecoVenda)}`;
        }
    }

    return (
        <div className={property.listCard}>
            <div className={property.imageCardContainer}>
                <SuspenseImage
                    className={property.thumbProperty}
                    src={thumbnail}
                    alt="Thumbnail"
                />

                <Link href={{
                    pathname: "/property",
                    query: { code: CodigoImovel }
                }}>
                    <a>
                        <div>
                            {handleType(TipoOferta)}
                        </div>

                        <div className={section.priceCardContainer}>
                            <span></span>
                            <span className={property.toolTip}>
                                <AiFillCamera/>
                                <span className={property.toolTipText}>Fotos ({quantity ? quantity : 0})</span>
                            </span>
                        </div>
                    </a>
                </Link>
            </div>
            <div className={section.cardInfo}>
                <div>
                    <div className={property.propertyOfferInfo}>
                        <span>{(PrecoLocacao && typeof PrecoLocacao === 'string') ? 'Aluguel' : 'Venda'}</span>
                        <span>{getPrice(PrecoLocacao, PrecoVenda)}</span>
                    </div>
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

                </div>

                <div className={property.cardDesktopFooter}>
                    <div>
                        <p className={section.features}>
                            <span className={property.align}><BiCalendar /> {DataCadastro?.split(' ')[0]}</span>
                        </p>
                        <FaUser size={12} sx={{ marginRight: '5px' }} /> Bordalo Imob
                    </div>

                    <div>
                        <Link href={{
                            pathname: "/property",
                            query: { code: CodigoImovel }
                        }}>
                            <a sx={{ variant: "anchors.primary" }}>
                                Ver detalhes <MdKeyboardArrowRight size={18} className={section.arrowButton} />
                            </a>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ListCard;