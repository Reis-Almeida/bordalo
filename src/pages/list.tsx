import { useEffect, useState } from "react";
import { useAppContext } from "src/context/parseXml";

import FilterFormList from "src/components/FilterFormList";
import Header from "src/components/Header";
import Head from "next/head";

import Footer from "src/components/Footer";
import { IPropertyXML, IContext } from 'interfaces';

import { useRouter } from 'next/router';
import { useFilter } from "src/hooks/useFilter";
import { useApi } from "src/hooks/useApi";

import ListProperties from "src/components/ListProperties";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Link from "next/link";

function List() {

  const app : IContext | any = useAppContext();

  const router = useRouter();

  const { filterProperties } = useFilter(); 
  const { _fetchData } = useApi();
 
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingScreen, setIsLoadingScreen] = useState(true);

  const [listProperties, setListProperties] = useState<Array<IPropertyXML> | undefined>(undefined);

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
        await app.setProperties(res.Imoveis.Imovel);  
  
        handleQuery();
      }
  }

  const handleQuery = () => {

    const { query } = router;
    
    const filteredProperties = filterProperties(app.properties, query); 
    setListProperties(filteredProperties);     
    setIsLoading(false);
    setIsLoadingScreen(false);   

  }

  const handleFilter = (query: object) => {
    window.scrollTo(0, 0);

    setIsLoading(true);  
    const filteredProperties = filterProperties(app.properties, query); 

    setListProperties(filteredProperties);  
    setIsLoading(false);

  }

  const renderContent = () => {

      if(isLoadingScreen) {
        return (
          <SkeletonTheme color="#ddd" highlightColor="#ccc">
              <div className="skeletonContainer">
                  <Skeleton className="skeletonAuthor" />
                  <Skeleton className="skeletonFilter" />
                  <Skeleton className="skeletonOther" />
              </div>
          </SkeletonTheme>
        );
      }

      return (
        <>
          <FilterFormList 
            propertyList={app.properties}
            callbackList={handleFilter}
          />
        </>
      );
  }

  return (
    <>
      <Head>
          <title>Pesquisa de Imóveis - Bordalo Imob</title>
          <meta name="description" content="Profissionais capacitados, atendimento personalizado e a qualidade que você merece. Seja para vender, alugar ou avaliar seu imóvel, nossa equipe está pronta para atendê-lo!" />
      </Head>

      <Header />
      <div className="containerStatic">
        <section className="containerList">
            <div className="lineLinks">

              <Link href="https://allmateste.com.br/site-next/">
                <a>
                  Home 
                </a>
              </Link>
              <span>{">"}</span> 
              Pesquisa Avançada
            </div>
            <div className="contentReverse">
              <aside>
                  {renderContent()}
              </aside>
              <main>
                <ListProperties 
                  List={listProperties}
                  isLoading={isLoading}
                />
              </main>
            </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default List;