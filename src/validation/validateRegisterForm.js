const Yup = require("yup");
const registerFormSchema = Yup.object({
    name: Yup.string()
        .required("Username required")
        .min(4, "Username too short")
        .max(28, "Username too long!"),
    password: Yup.string()
        .required("Password required")
        .min(6, "Password too short")
        .max(28, "Password too long!"),
    email: Yup.string()
        .required("Email required"),
    address: Yup.string()
        .required("Address required")
        .min(10, "Address should be like: number/street/city/state")
        .max(40, "Address should be like: number/street/city/state"),
    number: Yup.string()
        .required("Number required")
        .min(11, "Number too short")
        .max(15, "Number too long!"),
});

module.exports = registerFormSchema;
