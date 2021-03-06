/** @jsx jsx */
import { jsx } from 'theme-ui'

import { FC, useState, useEffect } from 'react';

import { IListProperties, IPropertyXML, IPageDetails } from "interfaces";
import property from "src/styles/Property.module.css";

import ListCard from "src/components/ListCard";
import ListCardMobile from "src/components/ListCardMobile";

import Pagination from "src/components/Pagination";
import { FaThList, FaThLarge } from "react-icons/fa";
import { TiArrowUnsorted } from "react-icons/ti";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const PAGE_LIMIT = 15;

const sortByDate = (a : IPropertyXML, b : IPropertyXML) => {
    if(
        typeof a.DataCadastro === 'string' &&
        typeof b.DataCadastro === 'string'
    ) {
        return new Date(b.DataCadastro).getTime() - new Date(a.DataCadastro).getTime();
    }

    return 0;
};

const sortMaxPrice = (a : IPropertyXML, b : IPropertyXML) => {
    if(typeof a.PrecoVenda === 'string' && typeof b.PrecoVenda === 'string') {
        return parseInt(b.PrecoVenda, 10) - parseInt(a.PrecoVenda, 10);
    }

    if(typeof a.PrecoLocacao === 'string' && typeof b.PrecoLocacao === 'string') {
        return parseInt(b.PrecoLocacao, 10) - parseInt(a.PrecoLocacao, 10);
    }

    return 0;
};

const sortMinPrice = (a : IPropertyXML, b : IPropertyXML) => {
    if(typeof a.PrecoVenda === 'string' && typeof b.PrecoVenda === 'string') {
        return parseInt(a.PrecoVenda, 10) - parseInt(b.PrecoVenda, 10);
    }

    if(typeof a.PrecoLocacao === 'string' && typeof b.PrecoLocacao === 'string') {
        return parseInt(a.PrecoLocacao, 10) - parseInt(b.PrecoLocacao, 10);
    }

    return 0;
};

const ListProperties : FC<IListProperties> = ({ List, isLoading }) => {

    const [paginatedList, setPaginatedList] = useState<Array<IPropertyXML>>([]);
    const [isCard, setIsCard] = useState(false);

    const [sortMethodName, setSortMethodName] = useState("Data");

    const [showOrderOptions, setShowOrderOptions] = useState(false)

    const paginate = (pg : number, sortMethod : (a : IPropertyXML, b : IPropertyXML) => number = sortByDate) => {
        if(List) {

            const slicedList = List.sort(sortMethod).slice((pg - 1) * PAGE_LIMIT, PAGE_LIMIT * pg);

            if(slicedList && slicedList.length > 0) {
                setPaginatedList(slicedList);
            }
        }
    }

    useEffect(() => {
        if(List && List.length > 0) paginate(1);
    }, [List]);

    useEffect(() => {
        sortList(sortMethodName);
    }, [sortMethodName]);

    const sortList = (method : string, pg: number = 1) => {
        setShowOrderOptions(false);
        if(List && List.length > 1) {
            switch (method) {
                case "Data":
                    paginate(pg, sortByDate);
                    break;
                case "Menor pre??o":
                    paginate(pg, sortMinPrice);
                    break;
                case "Maior pre??o":
                    paginate(pg, sortMaxPrice);
                    break;
                default:
                    break;
            }
        }

    }

    const handlePageChange = (page : IPageDetails) => {
        sortList(sortMethodName, page.currentPage);
    }

    const handleShowOrder = () => setShowOrderOptions(!showOrderOptions);

    const renderContainerList = () => {

        if(isLoading) {
            return (
                <SkeletonTheme color="#ddd" highlightColor="#ccc">
                    <div className={property.skeletonContainer}>
                        <Skeleton className={property.skeleton} count={10} />
                    </div>
                </SkeletonTheme>
            );
        }

        if(List && List.length === 0) {
            return (
                <div className={property.emptyList}>
                    <div>

                    </div>
                    N??o foi poss??vel encontrar im??veis
                </div>
            );
        }

        return (
            <>
                <div className={property.listOptionContainer}>
                    <div>
                        Ordenar por: <a onClick={handleShowOrder} sx={{ variant: "anchors.primaryFont", marginTop: "3px" }}>{sortMethodName} <TiArrowUnsorted /></a>
                    </div>
                    {showOrderOptions && (
                        <div className={property.orderContainer}>
                            <a onClick={() => setSortMethodName("Data")}>
                                Data
                            </a>
                            <a onClick={() => setSortMethodName("Menor pre??o")}>
                                Menor pre??o
                            </a>
                            <a onClick={() => setSortMethodName("Maior pre??o")}>
                                Maior pre??o
                            </a>
                        </div>
                    )}

                    <button onClick={() => setIsCard(false)}>
                        <FaThList 
                            size={20} 
                            color={'#aaa'} 
                        />
                    </button>
                    <button onClick={() => setIsCard(true)}>
                        <FaThLarge 
                            size={20} 
                            color={'#aaa'} 
                        />
                    </button>
                </div>
                {!isCard && (
                    <div className={property.listContainer}>
                        {paginatedList.map((p : IPropertyXML) => (
                            <ListCard 
                                key={p.CodigoImovel}
                                Cidade={""}
                                AreaUtil={p.AreaUtil}
                                DataCadastro={p.DataCadastro}
                                Endereco={p.Endereco}
                                TipoImovel={p.TipoImovel}
                                CodigoImovel={p.CodigoImovel}
                                thumbnail={(p.Fotos && p.Fotos.Foto && Array.isArray(p.Fotos.Foto)) ? p.Fotos?.Foto[0].Link[0].URLArquivo : undefined}
                                QtdBanheiros={p.QtdBanheiros}
                                QtdDormitorios={p.QtdDormitorios}
                                QtdVagas={p.QtdVagas}
                                Fotos={p.Fotos}
                                PrecoVenda={p.PrecoVenda}
                                PrecoLocacao={p.PrecoLocacao}
                                TituloImovel={p.TituloImovel}
                            />
                        ))}
                        <Pagination
                            pageLimit={PAGE_LIMIT}
                            pageNeighbours={2}
                            total={List ? List.length : 0}
                            onPageChanged={handlePageChange} 
                        />
                    </div>
                )}

                {isCard && (
                    <div className={property.listContainerCards}>
                        {paginatedList.map((p : IPropertyXML) => (
                            <ListCardMobile 
                                key={p.CodigoImovel}
                                Cidade={""}
                                Endereco={p.Endereco}
                                AreaUtil={p.AreaUtil}
                                TipoImovel={p.TipoImovel}
                                CodigoImovel={p.CodigoImovel}
                                DataCadastro={p.DataCadastro}
                                thumbnail={(p.Fotos && p.Fotos.Foto && Array.isArray(p.Fotos.Foto)) ? p.Fotos?.Foto[0].Link[0].URLArquivo : undefined}
                                QtdBanheiros={p.QtdBanheiros}
                                QtdDormitorios={p.QtdDormitorios}
                                QtdVagas={p.QtdVagas}
                                Fotos={p.Fotos}
                                PrecoVenda={p.PrecoVenda}
                                PrecoLocacao={p.PrecoLocacao}
                                TituloImovel={p.TituloImovel}
                            />
                        ))}
                        <Pagination
                            pageLimit={PAGE_LIMIT}
                            pageNeighbours={2}
                            total={List ? List.length : 0}
                            onPageChanged={handlePageChange} 
                        />
                    </div>
                )}
            </> 
        );
    }

    return (
        <div className={property.container}>
            {renderContainerList()}
        </div>
    );
}

export default ListProperties;