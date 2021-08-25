import Header from "src/components/Header";
import Head from "next/head";
import Link from "next/link";

import { FaFontAwesomeFlag } from "react-icons/fa";

import Footer from "src/components/Footer";
 
function Company() {

  return (
    <>
        <Head>
            <title>Quem somos - Bordalo Imob</title>
            <meta name="description" content="Profissionais capacitados, atendimento personalizado e a qualidade que você merece. Seja para vender, alugar ou avaliar seu imóvel, nossa equipe está pronta para atendê-lo!" />
        </Head>
        <Header
        />
        <div className="bannerCompany">
            <div className="bannerText">
                <h1>Quem somos</h1>
            </div>
        </div>

        <section className="containerStaticPage">
            <div className="companyContent"> 
                <p>
                    Criada por <strong>Aurélio Bordalo</strong> e <strong>Danielle Costa</strong>, a <strong>BORDALO IMOB</strong> é o resultado de 18 anos de dedicação e experiência ao mercado imobiliário.
                </p>

                <p>
                    Ambos foram diretores de algumas das mais importantes empresas do mercado imobiliário e CEO da segunda maior imobiliária de lançamentos de Brasília. 
                    Essa experiência permitiu agregar conhecimento em operações voltadas para os mais diversos segmentos que compõem esse mercado.
                </p>

                <p>
                    A empresa Bordalo Imóveis foi reconhecida por ter feito a maior intermediação Imobiliária do DF, <strong>a Venda da Academia de Tênis Resort José Farani</strong>, 
                    vista como sinônimo de glamour e poder, além de ser um dos mais importantes pólos gastronômicos e culturais da capital federal.
                </p>

                <p>
                    Aliada a toda essa experiência, temos a alma jovem e estamos sempre ligados em inovações e nas novidades do mercado, 
                    tudo para você ter sossego e segurança, garantindo ao seu imóvel a atenção e o toque de sofisticação que ele merece.
                </p>  

                <p>
                    Nos últimos oito anos, nossa empresa definiu um padrão de atendimento personalizado, contando com consultores especialistas em orientar 
                    seus clientes de forma a garantir o melhor negócio com segurança, sigilo e transparência. Além do atendimento, as estratégias de comunicação 
                    focadas e segmentadas para o mercado de alto padrão fizeram da Bordalo Imob uma empresa de visão. Nossos clientes percebem desde o primeiro 
                    contato com nossos consultores que suas necessidades são o ponto de partida para a identificação do imóvel adequado ao seu perfil. Assim como 
                    os compradores, os proprietários dos imóveis comercializados por meio da Bordalo Imob recebem atendimento atencioso, dedicado e ágil.
                </p> 

                <p>
                    Conte conosco para fazer um bom negócio!
                </p> 

                <p>
                    <strong>BORDALO IMOB</strong>
                </p> 
            </div>
        </section>

        <section className="containerStaticPage">
            <div className="servicesContent"> 

                <h2>Serviços</h2>

                <div className="servicesContainer">
                    <div className="service">
                        <div>
                            <FaFontAwesomeFlag  size={40} color={"#333"} />
                        </div>

                        <div className="serviceDescription">
                            <h3>Vendas</h3>
                            <p>
                                Nada de dor de cabeça na hora de vender um imóvel: 
                                aqui oferecemos agilidade, segurança e tranquilidade
                                para todas as negociações.
                            </p>

                            <Link href="/services">
                                <a>
                                    Leia mais
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="service">
                        <div>
                            <FaFontAwesomeFlag  size={40} color={"#333"} />
                        </div>

                        <div className="serviceDescription">
                            <h3>Aluguel e Administração</h3>
                            <p>
                                A Bordalo Imob trabalha para que seu imóvel 
                                seja alugado com o máximo de celeridade, 
                                garantindo segurança na negociação e escolha do inquilino.
                            </p>

                            <Link href="/services">
                                <a>
                                    Leia mais
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="service">
                        <div>
                            <FaFontAwesomeFlag  size={40} color={"#333"} />
                        </div>

                        <div className="serviceDescription">
                            <h3>Lançamentos</h3>
                            <p>
                                Realizamos na Bordalo Imob lançamentos imobiliários 
                                pontuais e trabalhamos sempre com imóveis especiais 
                                que tenham sinergia com o nosso trabalho.
                            </p>

                            <Link href="/services">
                                <a>
                                    Leia mais
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="service">
                        <div>
                            <FaFontAwesomeFlag  size={40} color={"#333"} />
                        </div>

                        <div className="serviceDescription">
                            <h3>Avaliações Imobiliárias</h3>
                            <p>
                                Avaliar o patrimônio é uma tarefa que requer seriedade, 
                                competência e conhecimento de imóveis.
                            </p>

                            <Link href="/services">
                                <a>
                                    Leia mais
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="service">
                        <div>
                            <FaFontAwesomeFlag  size={40} color={"#333"} />
                        </div>

                        <div className="serviceDescription">
                            <h3>Crédito Imobiliário</h3>
                            <p>
                                A compra de um imóvel representa a realização de um grande 
                                sonho e participar nesse momento de vida é sempre um 
                                privilégio para nós.
                            </p>

                            <Link href="/services">
                                <a>
                                    Leia mais
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="service">
                        <div>
                            <FaFontAwesomeFlag  size={40} color={"#333"} />
                        </div>

                        <div className="serviceDescription">
                            <h3>Clean House</h3>
                            <p>
                                O CLEAN HOUSE disponibiliza cuidados semanais com a piscina 
                                do imóvel, bem como limpeza de jardim e demais dependências, 
                                realizados com frequência mínima mensal.
                            </p>

                            <Link href="/services">
                                <a>
                                    Leia mais
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="service">
                        <div>
                            <FaFontAwesomeFlag  size={40} color={"#333"} />
                        </div>

                        <div className="serviceDescription">
                            <h3>Marketing e Divulgação</h3>
                            <p>
                                Utilizando estratégias em redes sociais, utilizando e-mail marketing 
                                e outros produtos para auxiliar você a divulgar seu imóvel ao mercado.
                            </p>

                            <Link href="/services">
                                <a>
                                    Leia mais
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="service">
                        <div>
                            <FaFontAwesomeFlag  size={40} color={"#333"} />
                        </div>

                        <div className="serviceDescription">
                            <h3>Mailing Vip</h3>
                            <p>
                                O mailing da Bordalo Imob é usado com muito critério, 
                                sigilo e especialmente suportado por contato 
                                telefônico e RSVP para visitas nos imóveis.
                            </p>

                            <Link href="/services">
                                <a>
                                    Leia mais
                                </a>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <Footer />
    </>
  )
}

export default Company;