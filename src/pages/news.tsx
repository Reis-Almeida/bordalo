import React from "react";

import Header from "src/components/Header";
import Footer from "src/components/Footer";
import Head from "next/head";
import Link from "next/link";

function News() {

  return (
    <>
      <Head>
          <title>Noticias - Bordalo Imob</title>
          <meta name="description" content="Profissionais capacitados, atendimento personalizado e a qualidade que você merece. Seja para vender, alugar ou avaliar seu imóvel, nossa equipe está pronta para atendê-lo!" />
      </Head>
      <Header />
      <div className="banner">
          <div className="bannerText">
              <h1>Notícias</h1>
          </div>
      </div>
      <section className="newsArea">
          <div className="containerNews">
            <div>
              <h2>Vendas do mercado imobiliário sobem 16% no trimestre</h2>

              <p>Número de lançamentos subiu 11,8% e atingiu 30.607 unidades</p>
            </div>

            <div className="imageContainer">
                <img src="https://www.bordaloimob.com.br/Content/imgs/dados-1-1-1-e1559122555573.jpg" height="540" width="800" />
                <p><strong>Fonte:</strong> Germano Lüders / VILA NOVA CONCEICAO</p>

                <p>
                  São Paulo: presidente da CBIC, José Carlos Martins, avaliou que as Regiões Sudeste e 
                  Centro-Oeste estão puxando o crescimento do mercado imobiliário no Brasi (Germano Lüders/EXAME)
                </p>
            </div>

            <p>
                São Paulo — O mercado imobiliário nacional apresentou aumento dos lançamentos e das vendas no segundo trimestre de 2019 em comparação 
                com o mesmo período de 2018, com redução do estoque de imóveis residenciais novos, de acordo com pesquisa divulgada nesta segunda-feira, 
                26, pela Câmara Brasileira da Indústria da Construção (CBIC).
            </p>

            <p>
                Os lançamentos de imóveis no país cresceram 11,8% e atingiram 30.607 unidades. Por sua vez, 
                as vendas de imóveis subiram 16,0% chegando a 32.813 unidades.
            </p>

            <p>
                Com mais vendas do que lançamentos, o estoque (que considera imóveis na planta, em obras e recém-construídos) 
                recuou 8,7%, atingindo 111.055 unidades. Com essa velocidade de vendas, seriam precisos 11,1 meses para escoar esse 
                estoque. Um ano antes, eram necessários 13,1 meses.
            </p>

            <p>
                O presidente da CBIC, José Carlos Martins, avaliou que as Regiões Sudeste e Centro-Oeste 
                estão puxando o crescimento do mercado imobiliário no Brasil.
            </p>

            <p>
                No Sudeste, disse ele, a melhora se deve à economia mais pujante do que em outros Estados, especialmente 
                em São Paulo. Já no Centro-Oeste, a economia local é movimentada pelo agronegócio. 
                “O mercado imobiliário continua se recuperando”, afirmou.
            </p>

            <p>
                Martins observou também que o preço dos imóveis, na média, apresentou uma alta real em 
                torno de 8% acima da inflação desde o início de 2017, quando a pesquisa começou a ser feita. 
                “O preço do metro já passa a ser importante”, frisou.
            </p>

            <p>
                <strong style={{ display: "block" }}>Referência de material com autoria conhecida:</strong>
                Estadão Conteúdo. Vendas do mercado imobiliário sobem 16% no trimestre. Disponível em: 
                {`<`}https://exame.abril.com.br/economia/mercado-imobiliario-tem-alta-de-118-em-lancamentos{`>`}. 
                26 ago 2019, 12h48. Acesso em: 08 de Outubro de 2019
            </p>

          </div>

          <div className="containerNews">
            <div>
              <h2>Presidente da Ademi: mercado imobiliário deve gerar 110 mil empregos no DF</h2>

              <p>Eduardo Aroeira disse, em entrevista ao programa CB.Poder, que o momento é ideal para a compra da casa própria</p>
            </div>

            <div className="imageContainer">
                <img src="https://www.bordaloimob.com.br/Content/imgs/20191001175525273691i.jpg" height="540" width="800" />
                <p><strong>Fonte:</strong> Ana Rayssa/CB/D.A Press</p>

                <p>
                  Eduardo Aroeira, presidente da Ademi-DF, foi entrevistado no CB.Poder
                </p>
            </div>

            <p>
                Um dia depois de o Bradesco acompanhar o movimento do Itaú e reduzir suas taxas de juros do crédito imobiliário, 
                o presidente da Associação de Dirigentes de Empresas do Mercado Imobiliário do DF (Ademi-DF), Eduardo Aroeira, 
                comentou a situação atual e futura do setor, assim como os possíveis efeitos da retomada do mercado. Para ele, 
                o momento é bom para a compra da casa própria. Em entrevista ao CB.Poder, programa do Correio em parceria com a 
                TV Brasília, nesta terça-feira (1º/10), Aroeira estimou que os novos lançamentos de imóveis no DF devem gerar 
                cerca de 110 mil empregos diretos e indiretos, em um prazo de seis meses. Ele ainda falou sobre as novidades imobiliárias no DF, 
                sobretudo no setor Noroeste, e sobre a construção das quadras 500 do Sudoeste.
            </p>

            <p>
                Na última sexta-feira (27/9), o Itaú reduziu sua taxa de juros do crédito imobiliário para a partir de 7,45% ao ano + TR (Taxa Referencial). 
                Nesta segunda-feira (30/9), o Bradesco fez o mesmo, e reduziu sua taxa para a mesma modalidade para a partir de 7,30% ao ano TR, 
                a menor até agora. Até então, a taxa mais baixa era do Santander, que oferecia financiamento a 7,99% TR. A onda de redução de custos 
                para o financiamento da casa própria veio seguida da queda da taxa Selic (taxa básica de juros), de 6% para 5,5% ao ano.
            </p>

            <p>
                Em agosto, a Caixa Econômica Federal já havia lançado uma linha de crédito imobiliário indexada ao Índice de Preços ao Consumidor Amplo (IPCA), 
                que mede a inflação do país, com juros entre 2,95% e 4,95% ao ano. Atualmente, o cliente da Caixa pode escolher entre o novo modelo e o antigo, 
                que cobra juros entre 8,5% e 9,75% ao ano mais TR. Por causa dessas medidas, o presidente da Ademi-DF acredita que o momento é 
                ideal para a compra de imóveis. Ele também ressaltou que as vendas de empreendimentos em 2019, até o mês de julho, já contabilizam um número 
                maior do que as vendas de todo o ano de 2018.
            </p>

            <p>
                "Os dados que temos trazem muita confiança para a gente de que esse é um momento de comprar o imóvel, e de recuperação do mercado. 
                Não é aquele 'boom' que a gente teve há vários anos (2010/2011), que não foi sustentável, mas acreditamos em um crescimento sustentável do mercado", 
                disse Aroeira. "Com relação a nossa pesquisa de velocidade de vendas, a gente verifica que, para o mês de julho, nosso último número, 
                a gente tem o índice de 6,1%. A gente considera na Ademi que 5% é o ideal. Em 2018, vendemos 1761 unidades no ano inteiro. Até julho deste ano, 
                já comercializamos aqui no DF 2165 unidades, mais do que ano passado inteiro. Isso equivale a soma, por exemplo, de 2017 e 2016."
            </p>

            <p>
                O representante da Ademi-DF também estima que a recuperação do mercado imobiliário no DF deve se traduzir na geração de cerca de 110 mil 
                empregos diretos e indiretos para o setor da construção civil. "Enquanto no ano de 2018 inteiro tivemos R$ 1,24 bilhões acumulados em 
                lançamentos, até julho de 2019 já tivemos R$ 1,28 bi, e acreditamos que vamos chegar ainda nos R$ 2,4 bilhões", apontou ele. "Na prática, 
                o que isso significa para a cidade e para a sociedade? Lançamento ainda não é obra, esses números já foram lançados, os empreendimentos estão 
                comprometidos, a gente naturalmente vai ter que iniciar a construção desses edifícios, isso gera emprego. Nas nossas estimativas, isso 
                vai gerar para o DF só R$ 1,2 bi a mais, e cerca de 110 mil empregos diretos e indiretos", acrescentou. Segundo Aroeira, os resultados devem 
                começar a aparecer a partir do próximo semestre: "Em 6 meses, eu acredito que a gente vai começar a sentir isso nos índices de empregabilidade do DF."
            </p>

            <p>
                De acordo com Aroeira, além de atrair empregos e maiores vendas, a retomada do mercado imobiliário também trouxe uma procura maior 
                por parte daqueles que desejam investir em imóveis novos ou usados. "O investidor de alto padrão geralmente sabe fazer conta financeira, 
                e o maior impacto que a gente tem tido de aumento de volume de vendas e de velocidade de vendas é no setor Noroeste, que é um imóvel 
                de valor mais alto. A atratividade da renda fixa realmente está muito ruim por conta da taxa Selic baixa, então, várias dessas pessoas 
                já estão identificando o imóvel como o melhor investimento para o momento", esclareceu.
            </p>

            <p>
                Em relação às novidades apresentadas nos futuros empreendimentos, o presidente da Ademi-DF afirmou que os novos imóveis terão uma 
                "grande tendência à sustentabilidade". Segundo ele, também há uma tendência de redução do tamanho desses empreendimentos, que 
                em sua maioria, devem ter de dois a quatro quartos. "Principalmente no bairro do Noroeste temos energia solar, reaproveitamento de 
                água, temos necessariamente segregação do lixo", disse. "Nos nossos empreendimentos ainda é muito forte a propriedade, mas 
                a gente tem tido os nossos empreendimentos como compartilhamento de espaços, temos compartilhamento de bicicletas, de 
                lavanderia, isso é uma tendência mundial muito forte que temos tido."
            </p>

            <p>
                Recentemente, o Supremo Tribunal de Justiça (STJ) permitiu a construção das quadras 500 do Sudoeste. A área de construção fica próxima 
                ao Parque das Sucupiras, espaço com vegetação nativa do Cerrado no DF. Por isso, o Ministério Público (MPDF) recorreu da decisão, 
                com a justificativa de que as obras prejudicariam à proteção ambiental, além de beneficiar um pequeno número de pessoas. 
                Questionado sobre a questão ambiental, o representante da Ademi-DF afirmou que é preciso "analisar como se pensa o urbanismo moderno".
            </p>

            <p>
                Dentro do chamado "urbanismo moderno", Aroeira destacou duas características: o adensamento dos centros e a diversidade de usos. 
                "Por que querem adensar os centros e diversificar os usos? Para diminuir o uso do transportes, e assim, evitar que haja emissão 
                de Dióxido de Carbono (CO2) na atmosfera. Esse é o princípio", alegou. "O desafio é: como fazer isso em uma cidade tombada? 
                Qual é o centro do DF? O Plano Piloto. A única forma de se adensar o centro do DF é através da utilização das áreas que já existem disponíveis".
            </p>

            <p>
                Sobre o assunto, Eduardo Aroeira ainda acrescentou que "as árvores estavam no lugar das quadras 500 do Sudoeste". 
                "Brasília não depende daquele pedaço de árvores para que tenha um verde abundante. A gente já tem verde abundante em 
                Brasília inteira. Dessa maneira, a gente tem que pensar de uma maneira estruturante do urbanismo como um todo, e não de 
                interesses particulares. Temos que pensar na sociedade, como irão ficar as emissões de CO2, como a gente vai melhorar o 
                transporte público sem adensar?", questionou. "É melhor não derrubar árvores, ninguém duvida disso, mas é melhor também não se 
                emitir gases para atmosfera, então a gente vive pensando nisso."
            </p>


            <p>
                <strong style={{ display: "block" }}>Referência de material com autoria conhecida:</strong>
                MOURA, Thaís. Presidente da Ademi: mercado imobiliário deve gerar 110 mil empregos no DF. Disponível em: &nbsp;
                <Link href="https://www.correiobraziliense.com.br/app/noticia/economia/2019/10/01/internas_economia,793145/presidente-da-ademi-mercado-imobiliario-deve-gerar-110-mil-empregos.shtml" passHref={true}>
                    <a target="_blank" sx={{ variant: "anchors.primaryFont" }}>
                        Presidente da Ademi: mercado imobiliário deve gerar 110 mil empregos no DF
                    </a>
                </Link>

                &nbsp; 01/10/2019 18:24. Acesso em: 08 de Outubro de 2019
            </p>

          </div>
      </section>

      <Footer />
    </>
  )
}

export default News;