const BinanceBase = require('./binance-base')
const markets = require('../config/markets')

/**
 * Binance Futures REST API wrapper.
 */
class BinanceFutures extends BinanceBase {
    constructor() {
        super(markets.futures)
    }
}

module.exports = BinanceFutures 