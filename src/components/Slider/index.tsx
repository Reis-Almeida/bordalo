import React, { memo } from 'react';
import { ISlider } from "interfaces/index";
import Slider from "rc-slider";

import CurrencyInput from "src/components/CurrencyInput";
import { SliderContainer } from './style';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

const SliderComponent : React.FC<ISlider> = ({ Label, values, onChangeValue, errorMessage, minV, maxV, defaultValue }) => {
    
    const handleChange = (e : Array<number>) => onChangeValue(e);
    const formatValue = (e : number) => e.toLocaleString("pt");


    const handleChangeInputMin = (e : React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();

        if(e.currentTarget.value) {
            const convertedValue = parseInt(e.currentTarget.value.split('.').join(""));
            const updatedValues = [convertedValue, values[1]];
            onChangeValue(updatedValues);
        } else {
            const updatedValues = [0, values[1]];
            onChangeValue(updatedValues);
        }
    }

    const handleChangeInputMax = (e : React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();

        if(e.currentTarget.value) {
            const convertedValue = parseInt(e.currentTarget.value.split('.').join(""));
            const updatedValues = [values[0], convertedValue];
            onChangeValue(updatedValues); 
        } else {
            const updatedValues = [values[0], 0];
            onChangeValue(updatedValues); 
        }
    }

    return (
        <SliderContainer>
            <label>
                {Label}
            </label>
            <Range 
                min={minV}
                max={maxV}
                defaultValue={defaultValue}
                onChange={handleChange}
                value={values}
                autoFocus
                tipFormatter={formatValue}
            />

            <div className="SliderInputContainer">
                <div>
                    <CurrencyInput placeholder="R$0,00" type="text" value={values[0]} onChange={handleChangeInputMin} />
                    <span>Min.</span>
                </div>

                <div>
                    <CurrencyInput placeholder="R$0,00" type="text" value={values[1]} onChange={handleChangeInputMax} />
                    <span>Max.</span>
                </div>
            </div>
            {errorMessage && (
                <div className="ErrorMessage">
                    <span>{errorMessage}</span>
                </div>
            )}

        </SliderContainer>   
    );
}

export default memo(SliderComponent);