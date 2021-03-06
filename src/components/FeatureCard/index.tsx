import { FC, useState } from 'react';
import { IPropertyXML } from "interfaces/index";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { BiCalendar } from "react-icons/bi";
import { AiFillCamera } from "react-icons/ai";

import Link from "next/link";
import { FeatureCardContainer } from './style';

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
            return <span className="featured">Destaque</span>
        }

        if(type === "3") {
            return <span className="featured">Super Destaque</span>
        }

        return <div></div>
    }

    return (
        <FeatureCardContainer>
            <div className="imageCardContainer">
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

                        <div className="priceCardContainer">
                            <span className="feature">{getPrice(PrecoLocacao, PrecoVenda)}</span>

                            <span className="toolTip" >
                                <AiFillCamera />
                                <span className="toolTipText">Fotos ({quantityPhotos})</span>
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

                <div className="cardFeaturesContainer">
                    <div>
                        <p className="features">
                            <span>Quartos: {(QtdDormitorios && typeof QtdDormitorios === 'string') ? QtdDormitorios : 0}</span>
                            <span>Banheiros: {(QtdBanheiros && typeof QtdBanheiros === 'string') ? QtdBanheiros : 0}</span>
                            <span>??rea ??til: {(AreaUtil && typeof AreaUtil === 'string') ? `${AreaUtil} m??` : `0 m??`}</span>
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
        </FeatureCardContainer>
    );
}

export default FeatureCard;