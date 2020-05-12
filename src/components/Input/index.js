import React from "react";
import { useFormContext } from "react-hook-form";

import { InputWrapper, Label, FormInput, ErrorIcon, ValidIcon, ErrorMessage } from "./style";

export const Input = ({ name, label, valid, icon, ...props }) => {
    const { errors, formState, register } = useFormContext();
    const { touched } = formState;
    return (
        <InputWrapper>
            <FormInput
                name={name}
                ref={register}
                {...props}
                label={label}
                hasError={errors[name]}
                hasValid={touched[name] && !errors[name]}
            />
            <Label>
                <img src={icon} alt=""/>
                {label}
            </Label>
            {errors[name] &&
                <ErrorIcon>
                    {/*<FontAwesomeIcon icon={["fas", "times"]} />*/}
                </ErrorIcon>
            }
            {touched[name] && !errors[name] && <ValidIcon/>}
            {errors[name] && (
                <ErrorMessage>{errors[name].message}</ErrorMessage>
            )}
        </InputWrapper>
    );
}
