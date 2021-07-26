/** @jsx jsx */
import { jsx } from 'theme-ui'

import { FC, useState, memo } from 'react';
import { ISearchFormBuy } from "interfaces";
import { useForm } from "src/hooks/useForm";

import { useRouter } from "next/router";

import Form from "src/styles/Form.module.css";
import DropDownComponent from "src/components/DropDownComponent";
import InputTextComponent from "src/components/InputTextComponent";

const SearchForm : FC<ISearchFormBuy> = ({ cityList, streetListBuy, updateStreetBuy }) => {

    const [selectdTab, setSelectdTab] = useState(true);

    const router = useRouter();

    const form = useForm({
        tipoImovel: selectdTab,
        cidade: "",
        bairro: "",
        tipo: "Todos os tipos",
        valores: [0, 200000000],
        area: [0, 4000],
        quartos: 0,
        banheiros: 0,
        code: ""
    }, () => submitform());


    const submitform = () => {

        const filterOptions = {
            ...form.formValues,
            tipoImovel: selectdTab 
        }

        router.push({
            pathname: "/list",
            query: filterOptions
        });
    }

    return (
        <div className={Form.form}>
            <div className={Form.formPosition}>
                <ul>
                    <li 
                        sx={{
                            backgroundColor: selectdTab ?  "#fff" : "#ddd",
                            color: selectdTab ?  "#000" : "#959595"
                        }}
                        onClick={() => setSelectdTab(true)}
                    >
                        Compra
                    </li>
                    <li
                        sx={{
                            backgroundColor: !selectdTab ?  "#fff" : "#ddd",
                            color: !selectdTab ?  "#000" : "#959595"
                        }}
                        onClick={() => setSelectdTab(false)}
                    >
                        Aluguel
                    </li>
                </ul>
                <div className={Form.searchContainer}>
                    <form onSubmit={form.handleForm} className={Form.containerInputs} >
                        <div className={Form.inputPositions}>
                            <DropDownComponent 
                                defaultValue="Todas as cidades"
                                ListOptions={cityList}
                                selectedValue={form.formValues["cidade"]}
                                updateSimbling={updateStreetBuy}
                                onChangeValue={form.handleChangeForm}
                                KeyName="cidade"
                            /> 
                            <DropDownComponent 
                                defaultValue="Todas os bairros"
                                ListOptions={streetListBuy}
                                selectedValue={form.formValues["bairro"]}
                                onChangeValue={form.handleChangeForm}
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
                                selectedValue={form.formValues["tipo"]}
                                onChangeValue={form.handleChangeForm}
                                KeyName="tipo"
                                defaultValue={"Todos os tipos"}
                            />
                            <InputTextComponent 
                                nameField="code"
                                placeholder="Código imovel"
                                extraStyles={{
                                    marginTop: "-30px"
                                }}
                                value={form.formValues['code'] ? form.formValues['code'] : ""}
                                onChange={form.handleChangeForm}
                            />
                        </div>

                        <div className={Form.buttons}>
                            <input
                                sx={{ variant: "buttons.primary" }} 
                                type="submit" 
                                value="Pesquisar" 
                                className={Form.SubmitButtonDesktop}
                            />
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default memo(SearchForm);