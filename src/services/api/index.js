const { Router } = require('express');
const ApiRouter = Router();

const V2 = {
    API: require('./v2/api.js'),
    EOS: require('./v2/eos.js'),
    STORE: require('./v2/store.js'),
    OAUTH: require('./v2/oauth.js')
}

ApiRouter.use('/api', V2.API);
ApiRouter.use('/eos', V2.EOS);
ApiRouter.use('/store', V2.STORE);

module.exports = ApiRouter;