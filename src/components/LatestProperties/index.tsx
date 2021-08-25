import React, { useEffect, useState } from "react";
import FeatureCard from "../FeatureCard";

import { IPropertyXML } from "interfaces";
import { SpacingContainer } from "./style";


const MissingImage = "/images/missing-image.png";

type ListPropterties = {
    List: Array<IPropertyXML>
};

const filterTypeLocacao = (value : IPropertyXML) => {
    if(value.PrecoLocacao && typeof value.PrecoLocacao === 'string' && value.TipoOferta === '2') {
        return true;
    }
}

const filterTypeVenda = (value : IPropertyXML) => {
    if(value.PrecoVenda && typeof value.PrecoVenda === 'string' && value.TipoOferta === '2') {
        return true;
    }
}

const compare = (a : IPropertyXML, b : IPropertyXML) => {
    if(a.DataCadastro && b.DataCadastro) {
        if(a.DataCadastro < b.DataCadastro){
            return -1;
        }
    
        if ( a.DataCadastro > b.DataCadastro ){
            return 1;
        }
        return 0;
    }

    return 0;
}


const Rent : React.FC<ListPropterties> = ({ List }) => {

    const [pList, setPList] = useState<Array<IPropertyXML>>([]);

    useEffect(() => {
        if(List && List.length > 0) {
            const sortArray = List.sort(compare);
            const newList = sortArray.filter(filterTypeLocacao).slice(0, 4);
            setPList(newList);
        }
    }, []);

    if(List && pList.length === 0) {
        return (
            <section className="spacingContainerEmpty">
                <p>Não há anuncios em super destaques.</p>
            </section>
        );
    }

    return (
        <SpacingContainer>
            <div className="latestCards">
                {pList.map((p) => (
                    <FeatureCard 
                        key={p.CodigoImovel}
                        QtdBanheiros={p.QtdBanheiros}
                        QtdDormitorios={p.QtdDormitorios}
                        TipoImovel={p.TipoImovel}
                        TipoOferta={p.TipoOferta}
                        DataCadastro={p.DataCadastro}
                        AreaUtil={p.AreaUtil}
                        Fotos={p.Fotos}
                        PrecoLocacao={p.PrecoLocacao} 
                        PrecoVenda={p.PrecoVenda}
                        Endereco={p.Endereco}
                        TituloImovel={p.TituloImovel}
                        CodigoImovel={p.CodigoImovel}
                        ArCondicionado={p.ArCondicionado}
                        thumbnail={(p.Fotos && p.Fotos.Foto && Array.isArray(p.Fotos.Foto)) ? p.Fotos?.Foto[0].Link[0].URLArquivo : MissingImage}
                    />
                ))}
            </div>
        </SpacingContainer>
    );
}


const Sell : React.FC<ListPropterties> = ({ List }) => {

    const [pList, setPList] = useState<Array<IPropertyXML>>([]);

    useEffect(() => {
        if(List && List.length > 0) {
            const sortArray = List.sort(compare);
            const orderedList = sortArray.filter(filterTypeVenda).slice(0, 4);
            setPList(orderedList);
        }
    }, [List]);

    if(List && List.length === 0) {
        return (
            <SpacingContainer>
                <p>Não há anuncios em destaques.</p>
            </SpacingContainer>
        );
    }

    return (
        <SpacingContainer>
            <div className="latestCards">
                {pList.map(
                    (p) => (
                        <FeatureCard 
                            key={p.CodigoImovel}
                            QtdBanheiros={p.QtdBanheiros}
                            QtdDormitorios={p.QtdDormitorios}
                            TipoImovel={p.TipoImovel}
                            DataCadastro={p.DataCadastro}
                            TipoOferta={p.TipoOferta}
                            AreaUtil={p.AreaUtil}
                            Fotos={p.Fotos}
                            PrecoLocacao={p.PrecoLocacao} 
                            PrecoVenda={p.PrecoVenda}
                            Endereco={p.Endereco}
                            TituloImovel={p.TituloImovel}
                            CodigoImovel={p.CodigoImovel}
                            ArCondicionado={p.ArCondicionado}
                            thumbnail={(p.Fotos && p.Fotos.Foto && Array.isArray(p.Fotos.Foto)) ? p.Fotos?.Foto[0].Link[0].URLArquivo : MissingImage}
                        />
                ))}
            </div>
        </SpacingContainer>
    );
}


const LatestSellPropeties =  React.memo(Sell);
const LatestRentProperties = React.memo(Rent);
export { LatestRentProperties, LatestSellPropeties };