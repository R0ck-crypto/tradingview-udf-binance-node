module.exports = {
    spot: {
        name: 'BINANCE_SPOT',
        displayName: 'Binance Spot',
        baseURL: 'https://api.binance.com',
        endpoints: {
            exchangeInfo: '/api/v3/exchangeInfo',
            klines: '/api/v3/klines'
        },
        symbol: {
            type: 'crypto',
            exchange: 'BINANCE',
            listed_exchange: 'BINANCE'
        }
    },
    futures: {
        name: 'BINANCE_FUTURES',
        displayName: 'Binance Futures',
        baseURL: 'https://fapi.binance.com',
        endpoints: {
            exchangeInfo: '/fapi/v1/exchangeInfo',
            klines: '/fapi/v1/klines'
        },
        symbol: {
            type: 'crypto_futures',
            exchange: 'BINANCE_FUTURES',
            listed_exchange: 'BINANCE_FUTURES'
        }
    }
} 