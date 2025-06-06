const route = require('express').Router();

route.get('/', (req, res) => {
    res.json({
        message: "Home page"
    })
})

const incomeRoutes = require('./income');
const expenseRoutes = require('./expense');

route.get('/incomes', incomeRoutes)
route.get('/expenses', expenseRoutes)


module.exports = route;