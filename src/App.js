import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";*/
import {
    InputWrapper,
    Label,
    Input,
    ErrorMessage,
    Button,
    ErrorIcon
} from "./style";

/*library.add(faTimes);*/

const App = () => {
    const regexes = {
        phoneNumber: /^[0][1-9]\d{9}$/,
        password: /^(?=.*\d)(?=.*[a-zA-Z]).{6,20}$/,
        letter: /^.*(?:^|[^\\wçığöşüÇİĞÖŞÜ])/
    };

    const validationMessages = {
        required: "Bu alanın doldurulması zorunludur.",
        phoneNumber:
            "Lütfen geçerli bir telefon numarası giriniz. Telefon numarası başına 0 olacak şekilde 11 haneli olmalıdır.",
        password:
            "Şifre maksimum 20 minimum 6 karakter içermelidir ve en az bir harf ve bir sayı içermelidir."
    };

    const LoginSchema = Yup.object().shape({
        phoneNumber: Yup.string()
            .required(validationMessages.required)
            .matches(regexes.phoneNumber, {
                message: validationMessages.phoneNumber
            }),
        password: Yup.string()
            .required(validationMessages.required)
            .matches(regexes.password, {
                message: validationMessages.password
            })
    });

    const { register, handleSubmit, errors } = useForm({
        validationSchema: LoginSchema
    });

    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputWrapper>
                <Input
                    type="tel"
                    placeholder=" "
                    name="phoneNumber"
                    ref={register}
                    hasError={errors.phoneNumber}
                    hasValid={!errors.phoneNumber}
                />
{/*                {errors.phoneNumber && (
                    <ErrorIcon>
                        <FontAwesomeIcon icon={["fas", "times"]} />
                    </ErrorIcon>
                )}*/}
                <Label>
                    Cep Telefonu Numarası
                </Label>
                {errors.phoneNumber && (
                    <ErrorMessage>{errors.phoneNumber.message}</ErrorMessage>
                )}
            </InputWrapper>
            <InputWrapper>
                <Input
                    type="text"
                    placeholder=" "
                    name="password"
                    ref={register}
                    hasError={errors.password}
                    hasValid={!errors.password}
                />
{/*                {errors.password && (
                    <ErrorIcon>
                        <FontAwesomeIcon icon={["fas", "times"]} />
                    </ErrorIcon>
                )}*/}
                <Label>Şifre</Label>
                {errors.password && (
                    <ErrorMessage>{errors.password.message}</ErrorMessage>
                )}
            </InputWrapper>
            <InputWrapper>
                <Button type="submit">Giriş Yap</Button>
            </InputWrapper>
        </form>
    );
};

export default App;