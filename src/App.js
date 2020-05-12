import React from "react";
import * as Yup from "yup";

import phone from "../src/styles/phone@2x.svg";
import password from "../src/styles/password@2x.svg"
import {
    InputWrapper,
    Button,
} from "./style";
import {Input} from "./components/Input";
import {Form} from "./components/Form";

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

    const onSubmit = data => console.log(data);
    return (
        <Form onSubmit={onSubmit} validationSchema={LoginSchema}>
            <Input
                type="tel"
                placeholder=" "
                name="phoneNumber"
                label="Cep Telefonu Numarası"
                icon={phone}
            />
            <Input
                type="text"
                placeholder=" "
                name="password"
                label="Şifre"
                icon={password}
            />
            <InputWrapper>
                <Button type="submit">Giriş Yap</Button>
            </InputWrapper>
        </Form>
    );
};

export default App;