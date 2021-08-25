import Header from "src/components/Header";
import Head from "next/head";

import Link from "next/link";
import Footer from "src/components/Footer";
 
function Services() {

  return (
    <>
        <Head>
            <title>Serviços - Bordalo Imob</title>
            <meta name="description" content="Profissionais capacitados, atendimento personalizado e a qualidade que você merece. Seja para vender, alugar ou avaliar seu imóvel, nossa equipe está pronta para atendê-lo!" />
        </Head>
        <Header />
        <div className="bannerCompany">
            <div className="bannerText">
                <h1>Serviços</h1>
            </div>
        </div>

        <section>
            <div className="servicesBanner">
                Somos uma imobiliária full service que atua de forma profissional e especializada. Conheça e entenda cada serviço que realizamos:
            </div>

            <div className="serviceContainerOne">
                <div className="serviceInfoContainer">
                    <h2>VENDA</h2>
                    <p>
                        Nada de dor de cabeça na hora de vender um imóvel: aqui oferecemos agilidade, segurança e tranquilidade para 
                        todas as negociações. Com experiência acumulada no mercado de imóveis residenciais e olhar inovador, trabalhamos 
                        com um formato de venda de imóveis prontos que une tecnologia e personalização. Oferecemos:
                    </p>

                    <ul>
                        <li>Visitas acompanhadas por corretores especializados na região;</li>
                        <li>Laudo de avaliação gratuito;</li>
                        <li>Laudo de vistoria;</li>
                        <li>Análise completa de documentação para modalidades de venda;</li>
                        <li>Fotos profissionais, vídeos e tour virtual;</li>
                        <li>Textos escritos de forma personalizada;</li>
                        <li>Divulgação nos mais importantes portais do mercado e mídias sociais;</li>
                        <li>Filmagem com Drone e divulgação nas Redes Sociais;</li>
                    </ul>
                </div>
            </div>

            <div className="serviceContainerTwo">
                <div className="serviceInfoContainer">
                    <h2>ALUGUEL</h2>
                    <p>
                        A Bordalo Imob trabalha para que seu imóvel seja alugado com o máximo de celeridade, garantindo 
                        segurança na negociação e escolha do inquilino. Veja tudo o que o departamento 
                        de administração de locações tem a oferecer:
                    </p>

                    <ul>
                        <li>Avaliação segura do valor do aluguel;</li>
                        <li>Criteriosa seleção dos pretendentes com cuidadosa análise de documentação e garantias;</li>
                        <li>Segurança na confecção dos contratos, elaborados por advogados especialistas em direito imobiliário;</li>
                        <li>Vistoria minuciosa do imóvel no início e término da locação;</li>
                        <li>Manutenção de arquivo dos documentos contábeis e oficiais do imóvel;</li>
                        <li>Controle de todos os encargos como IPTU, cotas condominiais e seguros obrigatórios;</li>
                        <li>Repasse do aluguel até o 5 dia útil após o pagamento do boleto, com prestação de contas mensal;</li>
                        <li>Assistência jurídica para cobrança de aluguéis e encargos em atraso;</li>
                        <li>Taxa de administração somente sobre o valor do aluguel;</li>
                        <li>Fotos profissionais, vídeos e tour virtual;</li>
                        <li>Textos escritos de forma personalizada;</li>
                        <li>Divulgação nos mais importantes portais do mercado e mídias sociais;</li>
                    </ul>
                </div>
            </div>

            <div className="serviceContainerThree">
                <div className="serviceInfoContainer">
                    <h2>LANÇAMENTOS</h2>
                    <p>
                        Realizamos na Bordalo Imob lançamentos imobiliários pontuais e trabalhamos sempre com imóveis especiais que 
                        tenham sinergia com o nosso trabalho. Atuamos na região do DF e contamos com toda a expertise e 
                        capacitação dos melhores profissionais do mercado.
                    </p>

                    <p>
                        Estamos prontos para atender construtores e incorporadores trabalhando produtos especiais para públicos exigentes.
                    </p>

                </div>
            </div>

            <div className="serviceContainerFour">
                <div className="serviceInfoContainer">
                    <h2>LAUDO DE AVALIAÇÕES</h2>
                    <p>
                        Avaliar o patrimônio é uma tarefa que requer seriedade, competência e conhecimento de imóveis. Nessa atividade, 
                        o profissionalismo e a constante atualização tecnológica, adquiridos ao longo dos anos, leva à precisão, aos valores 
                        de venda e locativos dos bens avaliados, fundamentais para um bom negócio. Nesse sentido, trabalhamos com avaliações 
                        imobiliárias baseadas no método comparativo direto do mercado, visando estabelecer o real valor de mercado de uma propriedade. 
                        Esta informação pode ser utilizada para:
                    </p>

                    <ul>
                        <li>Laudo para negociações de compra e venda</li>
                        <li>Laudo para Locações</li>
                        <li>Laudo para Inventários</li>
                        <li>Laudo para revisões de valor locatício em acordos extrajudiciais</li>
                        <li>Laudo para ações judiciais, além de todos os atos que pretendem estabelecer o valor mercadológico do imóvel</li>
                    </ul>

                    <p>
                        A maneira mais precisa de se ter certeza sobre o valor de um bem é a contratação de um Laudo Técnico de 
                        Avaliação Mercadológica de Imóveis que só pode ser emitido por profissionais especializados e capacitados 
                        como Engenheiros, Arquitetos ou Corretores de Imóveis que sejam Peritos avaliadores, credenciados no CNAI – 
                        <Link href="http://cofeci.gov.br/index.php?option=com_wrapper&view=wrapper&Itemid=303" passHref={true}>
                            <a target="_blank">
                                Cadastro Nacional de Avaliadores de Imóveis.
                            </a>
                        </Link>

                    </p>

                    <h3>Valores / Honorários</h3>

                    <p>
                        O parecer pode ser somente verbal ou por escrito. Pode ser confeccionado e apresentado de forma simples ou detalhada.
                    </p>

                    <p>
                        A avaliação se inicia através de visita e vistoria no imóvel e análise mercadológica da região. Sua elaboração é baseada nas 
                        informações colhidas e estudos realizados. Finalmente, é confeccionada com a publicação de dados relativos ao imóvel, 
                        apresentação de produtos similares e características da região, zoneamento, reproduções fotográficas, documentos, análise detalhada 
                        e justificativa do valor.
                    </p>

                    <p>
                        Solicite um orçamento prévio, alguns dados, como: endereço completo, metragem (útil ou construída) e de terreno (exceto grupo 1), 
                        o objetivo (comercialização, judicial, atualização patrimonial, etc) e também a forma da avaliação (verbal, simples ou detalhada).
                    </p>

                </div>
            </div>

            <div className="serviceContainerFive">
                <div className="serviceInfoContainer">
                    <h2>CRÉDITO IMOBILIÁRIO</h2>
                    <p>
                        Estamos ao seu lado nesta grande conquista!
                    </p>

                    <p>
                        A compra de um imóvel representa a realização de um grande sonho e participar nesse momento de 
                        vida é sempre um privilégio para nós.
                    </p>

                    <p>
                        Possuímos o financiamento certo para a compra de seu imóvel residencial ou comercial. Você pode financiar o valor do 
                        seu imóvel em até 35 anos. Com a possibilidade de incluir as despesas com a compra do imóvel em seu financiamento com utilização do FGTS.
                    </p>

                    <p>
                        Trabalhamos também com o REFIN – empréstimo com imóvel em garantia. Também conhecido como refinanciamento imobiliário ou alienação 
                        fiduciária, esse é um tipo de crédito em que você utiliza seu imóvel como garantia de pagamento, dando acesso aos menores juros do mercado.
                    </p>

                    <p>
                        Nessa modalidade de empréstimo, você consegue transformar até 60% do valor do seu imóvel em crédito para tirar 
                        seus planos do papel, abrir seu negócio e quitar suas dívidas.
                    </p>

                    <p>
                        São aceitos como garantia: casas, apartamentos, imóveis comerciais e terrenos.
                    </p>

                </div>
            </div>

            <div className="serviceContainerSix">
                <div className="serviceInfoContainer">
                    <h2>CLEAN HOUSE</h2>
                    <p>
                        O CLEAN HOUSE disponibiliza cuidados semanais com a piscina do imóvel, estando os produtos necessários inclusos, 
                        bem como limpeza de jardim e demais dependências, realizados com frequência mínima mensal, estando disponíveis para contratação.
                    </p>

                    <p>
                        Serviços CLEAN HOUSE PREMIUM de Limpeza, com maior frequência e detalhamento, pós-obra ou que impliquem em qualquer 
                        tipo de risco, poderão ser realizados à parte, mediante contratação de equipes especializadas. Consulte-nos!
                    </p>
                </div>
            </div>

            <div className="serviceContainerSeven">
                <div className="serviceInfoContainer">
                    <h2>MARKETING</h2>
                    <p>
                        Inclui a utilização dos seguintes meios:
                    </p>

                    <ul>
                        <li>Estratégia em REDES SOCIAIS, (facebook, LinkedIN, Instagram e Youtube)</li>
                        <li>Principais PORTAIS IMOBILIARIOS (WIMÓVEIS, ZAP, VIVA REAL)</li>
                        <li>Destaque no site BORDALO IMOB</li>
                        <li>E-mail Marketing</li>
                        <li>Mailing VIP segmentado no perfil do Imóvel</li>
                        <li>Mailing de arquitetos, decoradores e parceiros do mercado</li>
                        <li>Produção de fôlderes impressos e digitais sobre o imóvel, vídeos e fotos</li>
                        <li>Estratégia Google ADWORDS</li>
                        <li>Divulgação oficial ao mercado, direcionado a todas imobiliárias e corretores, com as informações oficiais sobre o imóvel</li>
                        <li>Placa informando sobre a comercialização e disponibilidade do imóvel</li>
                    </ul>
                </div>
            </div>

            <div className="serviceContainerEight">
                <div className="serviceInfoContainer">
                    <h2>MAILING VIP</h2>
                    <p>
                        O mailing da Bordalo Imob é usado com muito critério, sigilo e especialmente suportado por 
                        contato telefônico e RSVP para visitas nos imóveis.
                    </p>

                    <p>
                        Contamos com:
                    </p>

                    <ul>
                        <li>Mailing de clientes da Bordalo IMOB segmentado por perfil de interesse</li>
                        <li>Mailing de parceiros, arquitetos e corretores especializados</li>
                        <li>Mailing para formadores de opinião sobre o ramo imobiliário e interessados</li>
                    </ul>
                </div>
            </div>
        </section>
        <Footer />
    </>
  )
}

export default Services;