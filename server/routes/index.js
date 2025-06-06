const route = require('express').Router();

route.get('/', (req, res) => {
    res.json({
        message: "Home page"
    })
})

module.exports = route;