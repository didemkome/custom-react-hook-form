import React from "react";
import { useFormContext } from "react-hook-form";

import { InputWrapper, Label, FormInput, ErrorIcon, ValidIcon, ErrorMessage } from "./Style";

export const Input = ({ name, label, icon, ...props }) => {
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
            {label &&
            <Label>
                {label}
            </Label>
            }
            {label && errors[name] &&
                <ErrorIcon/>
            }
            {label && (touched[name] && !errors[name]) && <ValidIcon/>}
            {errors[name] && (
                <ErrorMessage>{errors[name].message}</ErrorMessage>
            )}
        </InputWrapper>
    );
}
