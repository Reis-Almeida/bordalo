import Header from "src/components/Header";
import Head from "next/head";

import Footer from "src/components/Footer";
 
function Custom500() {

  return (
    <>
        <Head>
            <title>Allmatech Imobiliária - 500</title>
            <meta name="description" content="500 - Error interno no servidor. Lorem hendrerit suscipit, amet." />
        </Head>
        <Header />
        <div className="bannerCompany">
        </div>

        <section className="containerStaticPage">
            <h1 className="pageError">
                500 - Error interno no servidor.
            </h1>
        </section>
        <Footer />
    </>
  )
}

export default Custom500;