const createError = require('../../errors/errorHandle');
const methods = {
    async getHome(req, res, next) {
        try {
            const carsouel_data = [
                {
                    active: '',
                    title: 'Manage Your Business',
                    description: 'make account account easily you can add you products',
                    img: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                },
                {
                    active: 'active',
                    title: 'offers',
                    description: 'There is easy way to offer your products',
                    img: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1544&q=80',
                },
                {
                    active: '',
                    title: 'make money',
                    description: 'just get started with online shopping',
                    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
                }
            ]
            res.render("Home/home.ejs", { carsouel_data: carsouel_data });
        } catch (error) {
            next(createError(error.status, error.message));
        }
    }
}

module.exports = { ...methods }