import Header from "src/components/Header";
import Head from "next/head";

import Footer from "src/components/Footer";
 
function Custom404() {

  return (
    <>
        <Head>
            <title>Allmatech Imobiliária - 404</title>
            <meta name="description" content="404 - Página não encontrada. Lorem hendrerit suscipit, amet." />
        </Head>
        <Header />
        <div className="bannerCompany">
        </div>

        <section className="containerStaticPage">
            <h1 className="pageError">
                404 - Página não encontrada.
            </h1>
        </section>
        <Footer />
    </>
  )
}

export default Custom404;