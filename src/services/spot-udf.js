const BaseUDF = require('./base-udf')
const BinanceSpot = require('../adapters/binance-spot')
const markets = require('../config/markets')

/**
 * Spot UDF implementation
 */
class SpotUDF extends BaseUDF {
    constructor() {
        super(new BinanceSpot(), markets.spot)
    }
}

module.exports = SpotUDF 