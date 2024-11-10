const { Router } = require('express');
const router = Router();

// [STORE] Catalog Fortntie Store api
router.all('/fortnite/api/storefront/v2/catalog', async (req, res) => {
    const catalog = require('../../../../json/store.json');
    res.json(catalog);
});

// [STORE] Unknown
router.get('/catalog/api/shared/bulk/offers', async (req, res) => {
    res.json({});
});

module.exports = router;