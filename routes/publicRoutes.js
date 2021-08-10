// import statements
const path = require('path');
var router = require('express').Router();

router.get("/", (req, res, next) => {
    try {
        const options = {
            root: path.join('static'),
        }
        res.sendFile('/homepage/index.html', options);
    } catch (error) {
        log.error(error);
        next();
    }
})

router.get("/aboutus", (req, res, next) => {
    try {
        const options = {
            root: path.join('static'),
        }
        res.sendFile('aboutus/index.html', options);
    } catch (error) {
        log.error(error);
        next();
    }
})

module.exports = router;
