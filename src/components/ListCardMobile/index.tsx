import { FC, useState } from 'react';
import { IPropertyXML } from "interfaces/index";
import Link from "next/link";

import { BiCalendar } from "react-icons/bi";
import { FaUser } from "react-icons/fa";

import { MdKeyboardArrowRight } from "react-icons/md";

import { AiFillCamera } from "react-icons/ai";
import SuspenseImage from "src/components/SuspenseImage";
import { CardMobile } from './style';

const ListCardMobile : FC<IPropertyXML> = ({ 
    CodigoImovel, 
    QtdBanheiros, 
    QtdDormitorios, 
    TipoOferta, 
    Endereco, 
    TipoImovel, 
    AreaUtil, 
    Fotos,
    thumbnail, 
    DataCadastro, 
    TituloImovel, 
    PrecoVenda, 
    PrecoLocacao 
}) => {

    const [quantity] = useState(Fotos ? Fotos.Foto.length : 0);

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

    const handleType = (type : string = "1") => {

        if(type === "2") {
            return <span className="feature">Destaque</span>
        }

        if(type === "3") {
            return <span className="feature">Super Destaque</span>
        }

        return <div></div>
    }

    return (
        <CardMobile>
            <div className="imageCardContainer">
                <SuspenseImage
                    className="imageMobile"
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

                            <span>{(PrecoLocacao && typeof PrecoLocacao === 'string') ? 'Aluguel' : 'Venda'}</span>
                        </div>

                        <div className="priceCardContainer">
                            <span>{getPrice(PrecoLocacao, PrecoVenda)}</span>

                            <span className="toolTip">
                                <AiFillCamera/>
                                <span className="toolTipText">Fotos ({quantity})</span>
                            </span>
                        </div>
                    </a>
                </Link>
            </div>
            <div className="cardInfo">
                <div>
                    <h3>
                        {TituloImovel}
                    </h3>

                    <span>{Endereco}</span>
                </div>

                <div className="cardFeaturesContainerMobile">
                    <div>
                        <p className="features">
                            <span>Quartos: {(QtdDormitorios && typeof QtdDormitorios === 'string') ? QtdDormitorios : 0}</span>
                            <span>Banheiros: {(QtdBanheiros && typeof QtdBanheiros === 'string') ? QtdBanheiros : 0}</span>
                            <span>Área Útil: {(AreaUtil && typeof AreaUtil === 'string') ? `${AreaUtil} m²` : `0 m²`}</span>
                        </p>
                        <p className="features">
                            <span>{TipoImovel}</span>
                        </p>
                    </div>
                    <div>
                        <Link href={{
                            pathname: "/property",
                            query: { code: CodigoImovel }
                        }}>
                            <a>
                                Ver detalhes <MdKeyboardArrowRight size={18} className="arrowButton" />
                            </a>
                        </Link>
                    </div>

                </div>

                <div className="cardFooterContainer">
                    <div>
                        <FaUser size={12} style={{ marginRight: '5px' }} /> Bordalo Imob
                    </div>

                    <div>
                        <BiCalendar size={15} style={{ marginRight: '5px' }} /> {DataCadastro?.split(' ')[0]}
                    </div>
                </div>

            </div>
        </CardMobile>
    );
}

export default ListCardMobile;