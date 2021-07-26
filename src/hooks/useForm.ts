import React, { useState, useEffect } from "react";
import { IinitValues } from "interfaces/index";

const formatKeys = ["banheiros", "garagem", "quartos"];

export const useForm = (initValues : IinitValues, submitForm : (values : object) => void) => {

    const [formValues, setFormValues] = useState(initValues);
    const [errMessage, setErrMessage] = useState("");

    const handleChangeForm = (value: string, KeyName : string) => {

        if(formatKeys.includes(KeyName)) {
            const formatKeyValue = parseInt(value.split("+").join(""));

            setFormValues({
                ...formValues,
                [KeyName]: formatKeyValue
            });

            return;
        }

        setFormValues({
            ...formValues,
            [KeyName]: value
        });

    }

    useEffect(() => {
        setFormValues({
            ...formValues,
            bairro: "Todos os bairros"
        });
    }, [formValues.cidade]);


    const handleSliderChangeValue = (values: Array<number>) => {
        setFormValues({
            ...formValues,
            ["valores"] : values
        });
    }

    const handleSliderChangeArea = (values: Array<number>) => {
        setFormValues({
            ...formValues,
            ["area"] : values
        });
    }

    const handleCheck = (KeyName : any) => {
        switch (KeyName) {
            case 'piscina':
                setFormValues({
                    ...formValues,
                    "piscina": !formValues.piscina
                });
                break;
            case 'arCondicionado':
                setFormValues({
                    ...formValues,
                    "arCondicionado": !formValues.arCondicionado
                });
                break;
            case 'seguranca':
                setFormValues({
                    ...formValues,
                    "seguranca": !formValues.seguranca
                });
                break;
            default:
                break;
        }
    }

    const handleForm = (e : React.FormEvent) => {
        e.preventDefault();

        let searchValues = {
            ...formValues
        };

        if(typeof searchValues['tipoImovel'] === 'string') {

            if(formValues['tipoImovel'] === 'Venda') {
                searchValues.tipoImovel = true;
            }

            if(formValues['tipoImovel'] === 'Aluguél') {
                searchValues.tipoImovel = false;
            }

            if(formValues['tipoImovel'] === 'Todos os tipos de imoveis') {
                searchValues.tipoImovel = '';
            }

        }

        if(formValues["valores"][0] > formValues["valores"][1]) {
            setErrMessage("Valor min. não pode ser maior que o valor max.");
            return;
        }

        if(formValues["valores"][1] > 200000000) {
            setErrMessage("Valor max não pode exceder R$ 200.000.000.");
            return;
        }

        setErrMessage(""); 
        submitForm(searchValues);
    }

    return { 
        formValues, 
        handleChangeForm,
        handleForm,
        handleCheck,
        handleSliderChangeValue,
        handleSliderChangeArea,
        errMessage
    }
}