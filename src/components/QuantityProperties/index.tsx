import React, { useEffect, useState } from 'react';  
import { useAppContext } from "src/context/parseXml";

import { IContext } from "interfaces";

import Link from "next/link";
import { QuantityContainer } from './style';

const QuantityProperties : React.FC = () => {

    const app : IContext = useAppContext();

    const filterRent = () => {
        const R = app.properties.filter(p => (p.PrecoLocacao && typeof p.PrecoLocacao === 'string')).length;
        setQuantityRent(R);
    }

    const filterSell = () => {
        const S = app.properties.filter(p => (p.PrecoVenda && typeof p.PrecoVenda === 'string')).length;
        setQuantitySell(S);
    }

    const [quantitySell, setQuantitySell] = useState(0);
    const [quantityRent, setQuantityRent] = useState(0);

    useEffect(() => {
        filterRent();
        filterSell();
    }, []);

    return (
        <QuantityContainer>
            <h3>Situação do Imóvel</h3>

            <ul>
                <li>
                    <Link href={{
                        pathname: "/list",
                        query: {
                            tipoImovel: true
                        }
                    }}>
                        <a>
                            Aluguel <span>({quantityRent})</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link  href={{
                        pathname: "/list",
                        query: {
                            tipoImovel: false
                        }
                    }}>
                        <a>
                            Venda <span>({quantitySell})</span>
                        </a>
                    </Link>
                </li>
            </ul>
        </QuantityContainer> 
    )
}

export default QuantityProperties;