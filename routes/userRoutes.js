// import
const { getAsync, postAsync } = require('../models/users')
var router = require('express').Router();

// define routes
router.get("/", async (req, res, next) => {
    try {
        let results = []
        await getAsync().then(res => { if (res) results = res });
        res.send(results);
    } catch (error) {
        console.log(error);
        return error;
    }
    next();
})

router.get('/:name', async function (req, res, next) {
    try {
        let results = []
        await getAsync(req.params.name).then(res => { if (res) results = res });
        res.send(results);
    } catch (e) {
        console.log(e);
        return e;
    }
    next();
})


router.post("/", async (req, res, next) => {
    try {
        let results = []
        results = await postAsync(req.body)
        res.send(results)
    } catch (error) {
        console.log(error);
        return error;
    }
    next();
})

module.exports = router;
