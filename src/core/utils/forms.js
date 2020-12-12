import * as Yup from "yup";

export const regexes = {
    phoneNumber: /^[0][1-9]\d{9}$/,
    password: /^(?=.*\d)(?=.*[a-zA-Z]).{6,20}$/,
    letter: /^.*(?:^|[^\\wçığöşüÇİĞÖŞÜ])/
};

export const validationMessages = {
    required: "Bu alanın doldurulması zorunludur.",
    requiredShort: "Zorunlu Alan.",
    phoneNumber:
        "Lütfen geçerli bir telefon numarası giriniz. Telefon numarası başına 0 olacak şekilde 11 haneli olmalıdır.",
    password:
        "Şifre maksimum 20 minimum 6 karakter içermelidir ve en az bir harf ve bir sayı içermelidir."
};

export const LoginSchema = Yup.object().shape({
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