const Yup = require("yup");
const loginFormSchema = Yup.object({
    password: Yup.string()
        .required("Password required")
        .min(6, "Password too short")
        .max(28, "Password too long!"),
    email: Yup.string()
        .required("Email required"),
});

module.exports = loginFormSchema;
