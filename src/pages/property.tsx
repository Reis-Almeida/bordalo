import React, { useEffect, useState } from "react";
import { useAppContext } from "src/context/parseXml";

import Header from "src/components/Header";
import dynamic from "next/dynamic";

import { useRouter } from 'next/router';
import { useFilter } from "src/hooks/useFilter";
import { useApi } from "src/hooks/useApi";
import Head from "next/head";

import { FaHouseDamage } from "react-icons/fa";

import { IContext, IPropertyXML } from "interfaces";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import Footer from "src/components/Footer";

const LazyPropertyComponent = dynamic(
  () => import("src/components/PropertyContainer"),
  { 
    loading: ({ error }) => {
      if(error) {
        return (
          <div className="emptyProperty">
              <div>
                <FaHouseDamage />
              </div>
              <h3>
                Imovel não encontrado.
              </h3>
          </div>
        );
      }

      return (
        <SkeletonTheme color="#ddd" highlightColor="#ccc">
            <div className="skeletonContainer">
                <Skeleton className="skeletonImage" />
                <Skeleton className="skeletonBody" />
                <Skeleton className="skeletonMessage" />
            </div>
        </SkeletonTheme>
      );
  },
  ssr: false
}
);

function Property() {

  const app : IContext = useAppContext();

  const { query } = useRouter();
  const { getPropertyByCode } = useFilter();
  const { _fetchData } = useApi();

  const [prt, setPrt] = useState<IPropertyXML | null>(null);
  const [features, setFeatures] = useState<Array<string>>([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    if(app.properties.length === 0) {
      init();
    } else {
      handleQuery();
    }
    
  }, [app.properties]);

  const init = async () => {

      const res = await _fetchData();

      if(res && res.Imoveis) {
        app.setProperties(res.Imoveis.Imovel);  

        handleQuery();
      }
  }

  const handleQuery = () => {
    const { code } = query;

    if(typeof code === "string") {
      const p = getPropertyByCode(app.properties, code);
      extractFeatures(p);
      setPrt(p);
    }

  }

  const extractFeatures = (property : IPropertyXML | null) => {
    if(property) {
      let aux = features;

      if(property.AreaServico) aux.push("Área de serviço");
      if(property.Sauna) aux.push("Sauna");
      if(property.Guarita) aux.push("Guarita");
      if(property.Varanda) aux.push("Varanda");
      if(property.Jardim) aux.push("Jardim");
      if(property.QuartoWCEmpregada) aux.push("Quarto de empregada");
      if(property.InfraInternet) aux.push("Infraestrutura de Internet");

      setFeatures(aux);

    }
  }

  return (
    <>
      <Head>
          <title>{prt?.TituloImovel} - Bordalo Imob</title>
          <meta name="description" content="Profissionais capacitados, atendimento personalizado e a qualidade que você merece. Seja para vender, alugar ou avaliar seu imóvel, nossa equipe está pronta para atendê-lo!" />
      </Head>
      <Header />
      <LazyPropertyComponent 
          TipoImovel={prt?.TipoImovel}
          TituloImovel={prt?.TituloImovel}
          Observacao={prt?.Observacao}
          PrecoLocacao={prt?.PrecoLocacao}
          PrecoVenda={prt?.PrecoVenda}
          QtdBanheiros={prt?.QtdBanheiros}
          QtdVagas={prt?.QtdVagas} 
          QtdDormitorios={prt?.QtdDormitorios}
          CodigoImovel={prt?.CodigoImovel ? prt.CodigoImovel : "xxxx"}
          AreaTotal={prt?.AreaTotal}
          AreaUtil={prt?.AreaUtil}
          Cidade={prt?.Cidade}
          Bairro={prt?.Bairro}
          Endereco={prt?.Endereco}
          Fotos={prt?.Fotos}
          QtdSuites={prt?.QtdSuites}
          QtdSalas={prt?.QtdSalas}
          UF={prt?.UF}
          DataCadastro={prt?.DataCadastro ? prt.DataCadastro : "00/00/0000"}
          CEP={prt?.CEP}
          features={features}
      />
      <Footer />
    </>
  )
}

export default Property;