import { createContext, useContext, useState } from 'react';
import { IPropertyXML, ICorretor } from "interfaces";


const initContext = {
  setProperties : (carga : Array<IPropertyXML>) => {
    console.log(carga)
  },
  properties: [] as Array<IPropertyXML>,
  getCurrentCorretor: (url : string) => {
    console.log(url)
  },
  currentCorretor: {
    code: 0,
    name: "",
    tel: "(61)2195-0060",
    cel: "(61)2195-0060",
    email: "contato@bordaloimob.com.br",
    Url: "",
    whats: "556193817124"
  }
}

let corretores : Array<ICorretor> = [
{
    code: 1,
    name: "Aurélio Bordalo",
    Funcao: "Sócio Diretor(a)",
    Url: "",
    tel: "(61) 2195-0060",
    cel: "(61) 99381-7118",
    whats:"(61) 99381-7118",
    email: "",
    URLImagem: "aureliobordalo.jpg"
},
{
    code: 2,
    name: "Danielle Christina",
    Funcao: "Sócio Diretor(a)",
    Url: "",
    tel: "(61) 21950060",
    cel: "(61) 9381-7124",
    whats:"(61) 9381-7124",
    email: "danielle@bordaloimob.com.br",
    URLImagem: "DanielleChristina.jpg"
},
{
    code: 3,
    name: "Sheila Antunes",
    Funcao: "Gerente Administrativo",
    Url: "",
    tel: "(61) 2195-0060",
    cel: "",
    whats:"",
    email: "",
    URLImagem: "SheilaAntunes.jpg"
},
{
    code: 4,
    name: "Igor Martins",
    Funcao: "Auxiliar Administrativo",
    Url: "",
    tel: "(61) 2195-0060",
    cel: "",
    whats:"",
    email: "",
    URLImagem: "IgorMartins.jpg"
},
{
    code: 5,
    name: "Lucas Bordalo",
    Url: "lucas",
    Funcao: "Corretor de Imóveis",
    tel: "(61) 2195-0060",
    cel: "61 - 993624694",
    whats:"61 - 993624694",
    email: "lbordalo1994@gmail.com",
    URLImagem: "LucasBordalo.jpg"
},
{
    code: 6,
    name: "Yasmim Cristiele",
    Url: "",
    Funcao: "Recepcionista",
    tel: "(61) 2195-0060",
    cel: "",
    whats:"",
    email: "",
    URLImagem: "YasmimCristiele.jpg"
},
{
    code: 7,
    name: "Bordalo Imob",
    Funcao: "",
    Url: "",
    tel: "(61)2195-0060",
    cel: "(61)2195-0060",
    whats:"(61) 9381-7124",
    email: "contato@bordaloimob.com.br",
    //URLImagem: "~/Content/imgs/equipe/RozaneHorine.jpg"
},
{
    code: 8,
    name: "Gabriel Oliveira Rebouças",
    Funcao: "",
    Url: "gabriel",
    tel: "(61)2195-0060",
    cel: "(61) 99175-5874",
    whats:"(61) 99227-9871",
    email: "gabriel.bordaloimob@gmail.com",
    //URLImagem: "~/Content/imgs/equipe/RozaneHorine.jpg"
},
{
    code: 9,
    name: "Matheus Silva De Mello",
    Funcao: "",
    Url: "matheus",
    tel: "(61) 2195-0060",
    cel: "(61) 99834-0067",
    whats:"(61) 99834-0067",
    email: "mtsmello0@gmail.com",
    //URLImagem: "~/Content/imgs/equipe/RozaneHorine.jpg"
},
{
    code: 10,
    name: "Camilla Teixeira Bordalo",
    Funcao: "",
    Url: "camilla",
    tel: "(61) 2195-0060",
    cel: "(61) 99682-0707",
    whats:"(61) 99682-0707",
    email: "camillabordalocorretora@gmail.com",
    //URLImagem: "~/Content/imgs/equipe/RozaneHorine.jpg"
},
{
    code: 11,
    name: "Gelzileide de Macedo Neto",
    Funcao: "",
    Url: "leide",
    tel: "(61) 2195-0060",
    cel: "(61) 98623-3434",
    whats:"(61) 98623-3434",
    email: "leidemacedo.adm@gmail.com",
    //URLImagem: "~/Content/imgs/equipe/RozaneHorine.jpg"
},
{
    code: 12,
    name: "Felipe Santos Assunção",
    Funcao: "",
    Url: "felipe",
    tel: "(61) 2195-0060",
    cel: "(61) 99586-0223",
    whats:"(61) 99586-0223",
    email: "felipeassuncaobsb@gmail.com",
    //URLImagem: "~/Content/imgs/equipe/RozaneHorine.jpg"
},
{
    code: 13,
    name: "Juliana Vieira",
    Funcao: "",
    Url: "juliana",
    tel: "(61) 2195-0060",
    cel: "(61) 98272-2371",
    whats:"(61) 98272-2371",
    email: "anailujv@gmail.com",
    //URLImagem: "~/Content/imgs/equipe/RozaneHorine.jpg"
},
{
    code: 14,
    name: "Rozane Bastos Domingues Horine",
    Funcao: "",
    Url: "rozane",
    tel: "(61) 2195-0060",
    cel: "(61) 99914-0383",
    whats:"(61) 99914-0383",
    email: "rozanehorine@gmail.com",
    URLImagem: "RozaneHorine.jpg"
},
{
    code: 15,
    name: "Magna Adriana Soares Costa",
    Funcao: "",
    Url: "magna",
    tel: "(61) 2195-0060",
    cel: "(61) 98299-1728",
    whats:"(61) 98299-1728",
    email: "magna.veloxlavanderia@gmail",
    //URLImagem: "~/Content/imgs/equipe/RozaneHorine.jpg"
},
{
    code: 16,
    name: "Mariana vilas Boas",
    Funcao: "",
    Url: "mariana",
    tel: "",
    cel: "(61) 98350–5200",
    whats:"(61) 98350–5200",
    email: "vilasboasimob@gmail.com",
    URLImagem: "Mari.jpeg"
},
{
    code: 17,
    name: "André Luiz Simplício",
    Funcao: "",
    Url: "andreluiz",
    tel: "",
    cel: "(61) 98445-7715",
    whats:"(61) 98445-7715",
    email: "Simplicioimoveis@gmail.com",
    URLImagem: "Simplicio.jpeg"
},
{
    code: 18,
    name: "André Henrique O Costa",
    Funcao: "",
    Url: "andrecosta",
    tel: "",
    cel: "(61) 98265-8896",
    whats:"(61) 98265-8896",
    email: "costa0001@hotmail.com",
    URLImagem: "andrecosta.jpg"
},
{
    code: 19,
    name: "Gustavo Motta",
    Funcao: "",
    Url: "gustavo",
    tel: "",
    cel: "(61) 99858-7237",
    whats:"(61) 998558-7237",
    email: "Mottg16@gmail.com",
    URLImagem: "gustavodeaguiar.jpg"
},
{
    code: 20,
    name: "Pollyana Xavier do Amaral",
    Funcao: "",
    Url: "pollyana",
    tel: "",
    cel: "(61) 98241-8900",
    whats:"(61) 98241-8900",
    email: "Pollyamaral@hotmail.com",
    URLImagem: "PollyanaXavier.jpg"
},
{
    code: 21,
    name: "André Duarte",
    Funcao: "",
    Url: "andreduarte",
    tel: "",
    cel: "(61) 98607-0007",
    whats:"(61) 98607-0007",
    email: "pr.andreduarte@gmail.com",
    URLImagem: "andreduarte.jpg"
},
{
    code: 22,
    name: "Esmeralda Rodrigues dos Santos",
    Funcao: "",
    Url: "esmeralda",
    tel: "",
    cel: "(61) 99142-0603",
    whats:"(61) 99142-0603",
    email: "esmeralda.correta@gmail.com",
    //URLImagem: "~/Content/imgs/equipe/RozaneHorine.jpg"
},
{
    code: 23,
    name: "Sueli Simões da Silva",
    Funcao: "",
    Url: "sueli",
    tel: "",
    cel: "(61) 99629-8316",
    whats:"(61) 99629-8316",
    email: "Suelyysimoes@gmail.com",
    //URLImagem: "~/Content/imgs/equipe/RozaneHorine.jpg"
},
{
    code: 24,
    name: "Ferix Antònio Orro Neto",
    Funcao: "",
    Url: "ferix",
    tel: "",
    cel: "(61) 99149-1751",
    whats:"(61) 99629-8316",
    email: "faoneto84@gmail.com",
    //URLImagem: "~/Content/imgs/equipe/RozaneHorine.jpg"
},
{
    code: 25,
    name: "José Rodrigo de Paulo",
    Funcao: "",
    Url: "rodrigo",
    tel: "",
    cel: "(61) 98140-0071",
    whats:"(61) 98140-0071",
    email: "rodrigodepaulo.correto@gmail.com",
    URLImagem: "RodrigodePaulo.jpg"
},
{
    code: 26,
    name: "Fabiana vilas boas de Almeida",
    Funcao: "",
    Url: "fabiana",
    tel: "",
    cel: "(61) 99988-2018",
    whats:"(61) 99988-2018",
    email: "Fabiana.vba@gmail.com",
    //URLImagem: "~/Content/imgs/equipe/RozaneHorine.jpg"
},
{
    code: 27,
    name: "Tatiane da Silva Lopes",
    Funcao: "",
    Url: "tatiane",
    tel: "",
    cel: "(61) 99562-6688",
    whats:"(61) 99562-6688",
    email: "tat.slopes@gmail.com",
    URLImagem: "TatianadaSilva.jpg"
}];

let currentCorretor : ICorretor = {
  code: 0,
  name: "",
  tel: "(61)2195-0060",
  cel: "(61)2195-0060",
  email: "contato@bordaloimob.com.br",
  Url: "",
  whats: "556193817124"
}

const AppContext = createContext(initContext);

export function AppWrapper({ children } : any) {
    const [properties, setProperties] = useState<Array<IPropertyXML>>([]);   

    const getCurrentCorretor = (url : string) => {
        const corretor = corretores.filter(c => {
            if(c.Url !== "") {
                const rg = new RegExp(c.Url);

                if(rg.test(url)) {
                  return true;
                }
  
                return false;
            }

            return false;
        });

        if(corretor.length > 0) {
          currentCorretor = { ...corretor[0] }
        }
    }

    const data = {
      setProperties,
      properties,
      getCurrentCorretor,
      currentCorretor
    }
    
    return (
      <AppContext.Provider value={data}>
        {children}
      </AppContext.Provider>
    );
}

export function useAppContext() {
  return useContext(AppContext);
}