import { useEffect, useState } from "react";

import Footer from "src/components/Footer";
import TeamCard from "src/components/TeamCard";

import AnimatedLoadingScreen from "src/components/AnimatedLoadingScreen";
import Header from "src/components/Header";
import Head from "next/head";

function Team() {

    const [isLoadingPage, setIsLoadingPage] = useState(true);

    useEffect(() => {
        setIsLoadingPage(false);
    }, []);

    if(isLoadingPage) {
        return <AnimatedLoadingScreen />;
    }

    return (
        <>
            <Head>
                <title>Equipe - Bordalo Imob</title>
                <meta name="description" content="Profissionais capacitados, atendimento personalizado e a qualidade que você merece. Seja para vender, alugar ou avaliar seu imóvel, nossa equipe está pronta para atendê-lo!" />
            </Head>
            <Header />

            <section className="containerStaticMargin">

                <h2>Nossa Equipe</h2>

                <div className="TeamContentFull">
                    <div className="noMargin">
                        <TeamCard 
                            code={1}
                            name="Aurélio Bordalo"
                            description="Sócio Diretor(a), Bordalo Imob"
                            image="/images/aureliobordalo.jpg"
                        />
                        <TeamCard 
                            code={2}
                            name="Danielle Christina"
                            description="Sócio Diretor(a), Bordalo Imob"
                            image="/images/DanielleChristina.jpg"
                        />
                    </div>
                </div>

                <h2>Administrativo</h2>

                <div className="TeamContentFull">
                    <div className="noMargin">
                        <TeamCard 
                            code={3}
                            name="Sheila Antunes"
                            description="Gerente Administrativo, Bordalo Imob"
                            image="/images/SheilaAntunes.jpg"
                        />
                        <TeamCard 
                            code={4}
                            name="Igor Martins"
                            description="Auxiliar Administrativo, Bordalo Imob"
                            image="/images/IgorMartins.jpg"
                        />
                    </div>
                </div>

                <h2>Consultores</h2>

                <div className="TeamContentFull">
                    <div className="noMargin">
                        <TeamCard 
                            code={5}
                            name="Lucas Bordalo"
                            description="Corretor de Imóveis, Bordalo Imob"
                            image="/images/LucasBordalo.jpg"
                        />
                    </div>
                </div>

                <h2>Atendimento</h2>

                <div className="TeamContentFull">
                    <div className="noMargin">
                        <TeamCard 
                            code={6}
                            name="Yasmim Cristiele"
                            description="Recepcionista, Bordalo Imob"
                            image="/images/YasmimCristiele.jpg"
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Team;