/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useEffect, useState } from 'react';  
import { useAppContext } from "src/context/parseXml";

import { IContext } from "interfaces";

import property from 'src/styles/Property.module.css';
import Link from "next/link";

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
        <div className={property.quantityContainer}>
            <h3>Situação do Imóvel</h3>

            <ul>
                <li>
                    <Link href={{
                        pathname: "/list",
                        query: {
                            tipoImovel: true
                        }
                    }}>
                        <a sx={{ variant: "anchors.primaryFont" }}>
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
                        <a sx={{ variant: "anchors.primaryFont" }}>
                            Venda <span>({quantitySell})</span>
                        </a>
                    </Link>
                </li>
            </ul>
        </div> 
    )
}

export default QuantityProperties;