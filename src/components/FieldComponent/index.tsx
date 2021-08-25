import React, { FormEvent } from 'react';
import { IInputText } from "interfaces";
import { IDropDown } from "interfaces/index";

import { Div } from './style';

const DropDownComponent : React.FC<IDropDown> = ({ ListOptions, Label, extraStyles, extraDropdownStyles, updateSimbling, defaultValue, onChangeValue, selectedValue, KeyName }) => {

    const handleChange = (event : any) => {
        if(event.target && event.target.value && updateSimbling) 
            updateSimbling(event.target.value);
        
        onChangeValue(event.target.value, KeyName);
    }

    return (
        <Div
            style={extraStyles}
        >
            {Label && <label>{Label}</label>}
            <select
                style={extraDropdownStyles}
                onChange={handleChange}
                value={selectedValue}
            >
                <option>{defaultValue ? defaultValue : "Todos"}</option>
                {ListOptions && ListOptions.map((opt, index) => <option key={index.toString()}>{opt}</option>)}
            </select>
        </Div>   
    );
}


const InputTextComponent : React.FC<IInputText> = ({ nameField, placeholder, value, onChange }) => {

    const handleChange = (e : FormEvent<HTMLInputElement>) => {
        onChange(e.currentTarget.value, nameField);
    }

    return (
        <Div>
            <input type="text" name={nameField} placeholder={placeholder} value={value} onChange={handleChange} maxLength={12} />
        </Div>   
    );
}

export { DropDownComponent, InputTextComponent };
