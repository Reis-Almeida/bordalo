import { useEffect, useState } from "react";
import { useAppContext } from "src/context/parseXml";
import Link from "next/link";

import SectionFull from "src/components/SectionFull";
import SearchForm from "src/components/SearchForm";
import Footer from "src/components/Footer";

import { useFilter } from "src/hooks/useFilter";
import { useApi } from "src/hooks/useApi";

import { IContext } from "interfaces";

import { LatestRentProperties, LatestSellPropeties } from "src/components/LatestProperties";
import AnimatedLoadingScreen from "src/components/AnimatedLoadingScreen";
import Header from "src/components/Header";
import Head from "next/head";

export default function Home() {

  const app : IContext = useAppContext();
  const { extractCity, filterUnique } = useFilter();
  const { _fetchData } = useApi();

  const [cities, setCities] = useState<Array<any>>([]);
  const [streetsBuy, setStreetsBuy] = useState<Array<any>>([]);
  const [streetsRent, setStreetsRent] = useState<Array<any>>([]);

  const [loadingScreen, setLoadingScreen] = useState<boolean>(true);

  useEffect(() => {
    if(app.properties.length === 0) {
      init();
    } else {
      const cities = extractCity(app.properties);
      setCities(cities);
      setLoadingScreen(false);
    }
  }, []);

  useEffect(() => {
    if(app.properties.length > 0 && cities.length > 0) {
      setLoadingScreen(false);
    }
  }, [app.properties, cities]);

  const init = async () => {
      app.getCurrentCorretor(window.location.href);
      const res = await _fetchData();

      if(res && res.Imoveis) {
        app.setProperties(res.Imoveis.Imovel);

        const cities = extractCity(res.Imoveis.Imovel);
        setCities(cities);
      }
  }

  const extractStreetsBuy = (selectedCity : string) => {
      const mappedStreets = app.properties.map((imovel : any) => {
        if(imovel.Cidade === selectedCity && imovel.Bairro)
          return imovel.Bairro;

      });

      const filteredStreets = mappedStreets.filter(filterUnique);
      setStreetsBuy(filteredStreets);    
  }

  const extractStreetsRent = (selectedCity : string) => {
    const mappedStreets = app.properties.map((imovel : any) => {
      if(imovel.Cidade === selectedCity && imovel.Bairro)
        return imovel.Bairro;

    });

    const filteredStreets = mappedStreets.filter(filterUnique);
    setStreetsRent(filteredStreets);    
  }

  if(loadingScreen) {
    return <AnimatedLoadingScreen />;
  }

  return (
    <>
      <Head>
        <title>Home - BordaloImob</title>
        <meta name="description" content="Profissionais capacitados, atendimento personalizado e a qualidade que você merece. Seja para vender, alugar ou avaliar seu imóvel, nossa equipe está pronta para atendê-lo!" />
      </Head>

      <Header />
      <SectionFull>
        <div className={"sectionDiv"}>
          <SearchForm 
            cityList={cities}
            updateStreetBuy={extractStreetsBuy}
            updateStreetRent={extractStreetsRent}
            streetListBuy={streetsBuy}
            streetListRent={streetsRent}
          />

          <div className="announceContainer">
            <h2>Anuncie aqui seu imóvel grátis</h2>

            <Link href="/announce">
              <a>Clique aqui para anunciar</a>
            </Link>
          </div>
        </div>
      </SectionFull>

      <section className="bodyContainer">
        <section className="recentPropertiesContainer">
            <h1>
                Nossos imóveis à venda em destaque
            </h1>

            <p>
                Opções exclusivas para você escolher o imóvel de seus sonhos.
            </p>

            <LatestSellPropeties 
                List={app.properties}
            />
        </section>

        <section className="recentPropertiesContainer">
            <h1>
                Nossos imóveis para aluguel em destaque
            </h1>

            <p>
                Opções exclusivas para você escolher o imóvel de seus sonhos.
            </p>

            <LatestRentProperties 
              List={app.properties}
            />
        </section>
      </section>

      <Footer />
    </>
  )
}