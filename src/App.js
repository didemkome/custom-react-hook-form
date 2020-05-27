import React from "react";

import {LoginSchema} from "./core/utils/forms";

import {Input} from "./components/Input";
import {Form} from "./components/Form";
import Checkbox from "./components/Checkbox";

import {
    InputWrapper,
    Button,
    Wrapper, Container
} from "./style";

const App = () => {
    const onSubmit = data => console.log(data);
    return (
        <Container>
            <Form autoComplete="off" onSubmit={onSubmit} validationSchema={LoginSchema}>
                <Input
                    type="tel"
                    placeholder=" "
                    name="phoneNumber"
                    label="Cep Telefonu Numarası"
                />
                <Input
                    type="password"
                    placeholder=" "
                    name="password"
                    label="Şifre"
                />
                <Wrapper>
                    <Checkbox name="remember" type="checkbox">Beni Hatırla</Checkbox>
                    <Checkbox type="checkbox">Oturumu Açık Tut</Checkbox>
                </Wrapper>
                <InputWrapper>
                    <Button type="submit">Giriş Yap</Button>
                </InputWrapper>
            </Form>
        </Container>
    );
};

export default App;
