const Yup = require("yup");
const productFormSchema = Yup.object({
    name: Yup.string()
        .required("name required"),
    img: Yup.string()
        .required("img required"),
    price: Yup.string()
        .required("price required"),
    brand: Yup.string()
        .required("brand required"),
    description: Yup.string()
        .required("description required")
        .min(10, "description too short")
        .max(100, "description too long!"),
    arrivalTime: Yup.string()
        .required("arrivalTime required"),

});

module.exports = productFormSchema;
