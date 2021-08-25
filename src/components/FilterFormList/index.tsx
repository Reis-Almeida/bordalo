import { useState, useEffect, memo } from "react";

import { Form } from './style';

import { useForm } from "src/hooks/useForm";
import { useFilter } from "src/hooks/useFilter";

import { IFilterFormList, IPropertyXML } from "interfaces";
import { DropDownComponent, InputTextComponent } from "src/components/FieldComponent";
import SliderComponent from "src/components/Slider";

const FilterFormList : React.FC<IFilterFormList> = ({ propertyList, callbackList }) => {

    const { extractCity, filterUnique } = useFilter();

    const [cities, setCities] = useState<Array<string>>([]);
    const [streets, setStreets] = useState<Array<string>>([]);

    const { 
        formValues, 
        handleChangeForm, 
        handleSliderChangeValue, 
        handleSliderChangeArea,
        errMessage, 
        handleForm 
    } = useForm({
        tipoImovel: true,
        code: "",
        cidade: "",
        tipo: "",
        bairro: "",
        valores: [0, 200000000],
        area: [0, 4000],
        quartos: 0,
        banheiros: 0,
        garagem: 0 
    }, (values : object) => submitForm(values));

    useEffect(() => {
        if(propertyList) {
            const extractedCities = extractCity(propertyList);
            if(extractedCities) setCities(extractedCities);  
        }
    }, []);
  
    const extractStreets = (selectedCity : string) => {

        if(propertyList) {
            const mappedStreets : Array<any> = propertyList.map((imovel : IPropertyXML) => {
                if(imovel.Cidade === selectedCity && imovel.Bairro)
                  return imovel.Bairro;

                return;
            });

            const filteredStreets = mappedStreets.filter(filterUnique);
            setStreets(filteredStreets); 
        }
    }
  
    const submitForm = (filterOptions : object) => {
        callbackList(filterOptions);
    }

    return (
        <Form>
            <form className={"filterList"} onSubmit={handleForm}>

                <DropDownComponent 
                    ListOptions={[
                        "Aluguél"
                    ]}
                    selectedValue={formValues["tipoImovel"]}
                    onChangeValue={handleChangeForm}
                    KeyName="tipoImovel"
                    defaultValue={"Venda"}
                />

                <DropDownComponent 
                    defaultValue="Todas as cidades"
                    ListOptions={cities}
                    selectedValue={formValues["cidade"]}
                    updateSimbling={extractStreets}
                    onChangeValue={handleChangeForm}
                    KeyName="cidade"
                /> 

                <DropDownComponent 
                    defaultValue="Todos os bairros"
                    ListOptions={streets}
                    selectedValue={formValues["bairro"]}
                    onChangeValue={handleChangeForm}
                    KeyName="bairro"
                />

                <DropDownComponent 
                    ListOptions={[
                        "Apartamento",
                        "Casa",
                        "Comercial/Industrial",
                        "Flat/Aparthotel",
                        "Rural",
                        "Terreno"
                    ]}
                    selectedValue={formValues["tipo"]}
                    onChangeValue={handleChangeForm}
                    KeyName="tipo"
                    defaultValue={"Todos os tipos"}
                />

                <InputTextComponent 
                    nameField="code"
                    placeholder="Código do imovel"
                    value={formValues['code'] ? formValues['code'] : ""}
                    onChange={handleChangeForm}
                />

                <SliderComponent 
                    Label="Valor (R$)" 
                    minV={0}
                    maxV={200000000}
                    defaultValue={[0, 200000000]}  
                    values={formValues["valores"]}  
                    onChangeValue={handleSliderChangeValue} 
                    errorMessage={errMessage}
                />

                <DropDownComponent 
                    Label="Qtd. Quartos"
                    ListOptions={[
                        "1+",
                        "2+",
                        "3+",
                        "4+",
                        "5+",
                        "6+",
                        "7+",
                        "8+",
                        "9+",
                        "10+"
                    ]}
                    selectedValue={formValues["quartos"] + "+"}
                    onChangeValue={handleChangeForm}
                    defaultValue={"0+"}
                    KeyName="quartos"
                /> 

                <SliderComponent 
                    Label="Área útil (m²)" 
                    minV={0}
                    maxV={4000}
                    defaultValue={[0, 4000]}  
                    values={formValues["area"]}  
                    extraStyles={{
                        marginTop: '10px'
                    }}
                    onChangeValue={handleSliderChangeArea} 
                    errorMessage={errMessage}
                />

                <input 
                    type="submit" 
                    value="Buscar" 
                    className={"SubmitButton"}
                />
            </form>
        </Form>
    );
}

export default memo(FilterFormList);