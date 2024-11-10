const { Router } = require('express');
const router = Router();

router.delete('/account/api/oauth/sessions/kill/*', (req, res) => {
    res.status(204).end();
});

router.delete('/account/api/oauth/sessions/kill', (req, res) => {
    res.status(204).end();
});

module.exports = router;