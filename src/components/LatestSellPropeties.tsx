/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useEffect, useState, memo } from "react";
import styles from 'src/styles/Home.module.css';
import MissingImage from "public/images/missing-image.png";

import { IPropertyXML } from "interfaces";
import FeatureCard from "./featureCard";

type ListPropterties = {
    List: Array<IPropertyXML>
};

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
    
        if (a.DataCadastro > b.DataCadastro ){
            return 1;
        }
        return 0;
    }

    return 0;

}

const LatestSellProperties : React.FC<ListPropterties> = ({ List }) => {

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
            <section className={styles.spacingContainer}>
                <p>Não há anuncios em destaques.</p>
            </section>
        );
    }

    return (
        <section className={styles.spacingContainer}>
            <div className={styles.latestCards}>
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
        </section>
    );
}


export default memo(LatestSellProperties);