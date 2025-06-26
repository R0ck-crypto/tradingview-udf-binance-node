const BinanceBase = require('./binance-base')
const markets = require('../config/markets')

/**
 * Binance Spot REST API wrapper.
 */
class BinanceSpot extends BinanceBase {
    constructor() {
        super(markets.spot)
    }
}

module.exports = BinanceSpot 