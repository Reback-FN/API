const { Router } = require('express');
const router = Router();

router.get('/epic/id/v2/sdk/accounts', (req, res) => {
    const query = req.query;
    res.send([
        {
            "accountId": query.accountId,
            "displayName": query.accountId,
            "preferredLanguage": "en",
            "linkedAccounts": [],
            "cabinedMode": false,
            "empty": false
        }
    ]);
});

module.exports = router;