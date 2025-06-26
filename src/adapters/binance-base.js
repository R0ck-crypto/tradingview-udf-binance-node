const request = require('request')

/**
 * Base Binance REST API wrapper.
 */
class BinanceBase {
    constructor(config) {
        this.config = config
        this.baseURL = config.baseURL
        this.endpoints = config.endpoints
    }

    /**
     * Current exchange trading rules and symbol information.
     * @returns {Promise} Response promise.
     */
    exchangeInfo() {
        return this.request(this.endpoints.exchangeInfo)
    }

    /**
     * Kline/candlestick bars for a symbol. Klines are uniquely identified by their open time.
     * @param {string} symbol - Trading symbol.
     * @param {string} interval - Klines interval.
     * @param {number} startTime - Start time in miliseconds.
     * @param {number} endTime - End time in miliseconds.
     * @param {number} limit - Klines limit.
     * @returns {Promise} Response promise.
     */
    klines(symbol, interval, startTime, endTime, limit) {
        return this.request(this.endpoints.klines, { qs: { symbol, interval, startTime, endTime, limit } })
    }

    /**
     * Common request.
     * @param {string} path - API path.
     * @param {object} options - request options.
     * @returns {Promise} Response promise.
     */
    request(path, options) {
        return new Promise((resolve, reject) => {
            request(this.baseURL + path, options, (err, res, body) => {
                if (err) {
                    return reject(err)
                }
                if (!body) {
                    return reject(new Error('No body'))
                }

                try {
                    const json = JSON.parse(body)
                    if (json.code && json.msg) {
                        const err = new Error(json.msg)
                        err.code = json.code
                        return reject(err)
                    }
                    return resolve(json)
                } catch (err) {
                    return reject(err)
                }
            })
        })
    }
}

module.exports = BinanceBase 