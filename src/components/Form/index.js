import React from "react";
import {FormContext, useForm} from "react-hook-form";

export function Form({ defaultValues, children, onSubmit, validationSchema }) {
    const methods = useForm({ defaultValues, validationSchema, validateCriteriaMode:"all", mode:"onChange" });
    const { handleSubmit } = methods;

    return (
        <FormContext {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                {Array.isArray(children)
                    ? children.map(child => {
                        return child.props.name
                            ? React.createElement(child.type, {
                                ...{
                                    ...child.props,
                                    register: methods.register,
                                    key: child.props.name
                                }
                            })
                            : child;
                    })
                    : children}
            </form>
        </FormContext>
    );
}