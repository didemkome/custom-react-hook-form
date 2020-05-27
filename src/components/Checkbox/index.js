import React from "react";

import {
    CheckboxLabel,
    CheckboxWrapper,
    FormCheckbox
} from "./Style";

import {useFormContext} from "react-hook-form";

const Checkbox = ({ children, id, onChange, name, defaultChecked }, ...props) => {
    const { register } = useFormContext();
    return (
            <CheckboxWrapper onChange={onChange}>
                <CheckboxLabel htmlFor={id}>
                    <FormCheckbox
                        ref={register}
                        defaultChecked={defaultChecked}
                        {...props}
                        type="checkbox"
                    />
                    {children}
                </CheckboxLabel>
            </CheckboxWrapper>
    );
};

export default Checkbox;
