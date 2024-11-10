const { Router } = require('express');
const router = Router();

// [API] Comment Message
router.all('/fortnite/api/feedback/Comment', (req, res) => {
    console.log("Comment!");
    console.log(req);
    res.status(200);
    res.json({});
});

// [API] Bug Message
router.all('/fortnite/api/feedback/Bug', (req, res) => {
    console.log("BUG!");
    res.status(200);
    res.json({});
});

// [API] Version Checker
router.get('/fortnite/api/v2/versioncheck/*', (req, res) => {
    res.json({
        "type": "NO_UPDATE"
    })
});

module.exports = router;