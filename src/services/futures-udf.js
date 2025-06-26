const BaseUDF = require('./base-udf')
const BinanceFutures = require('../adapters/binance-futures')
const markets = require('../config/markets')

/**
 * Futures UDF implementation
 */
class FuturesUDF extends BaseUDF {
    constructor() {
        super(new BinanceFutures(), markets.futures)
    }
}

module.exports = FuturesUDF 