const { Router } = require('express');
const ApiRouter = Router();

const V1 = {
    API: require('./v1/api.js'),
    EOS: require('./v1/eos.js'),
    STORE: require('./v1/store.js')
}

ApiRouter.use('/api', V1.API);
ApiRouter.use('/eos', V1.EOS);
ApiRouter.use('/store', V1.STORE);

module.exports = ApiRouter;