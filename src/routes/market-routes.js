const query = require('../query')

function handlePromise(res, next, promise) {
    promise.then(result => {
        res.send(result)
    }).catch(err => {
        next(err)
    })
}

/**
 * 创建市场特定的路由
 * @param {object} udf - UDF 实例
 * @param {string} prefix - 路由前缀 (spot 或 futures)
 * @returns {function} Express 路由配置函数
 */
function createMarketRoutes(udf, prefix) {
    return (app) => {
        // 配置端点
        app.get(`/${prefix}/config`, (req, res, next) => {
            handlePromise(res, next, udf.config())
        })

        // 符号信息端点
        app.get(`/${prefix}/symbol_info`, (req, res, next) => {
            handlePromise(res, next, udf.symbolInfo())
        })

        // 符号解析端点
        app.get(`/${prefix}/symbols`, [query.symbol], (req, res, next) => {
            handlePromise(res, next, udf.symbol(req.query.symbol))
        })

        // 搜索端点
        app.get(`/${prefix}/search`, [query.query, query.limit], (req, res, next) => {
            if (req.query.type === '') {
                req.query.type = null
            }
            if (req.query.exchange === '') {
                req.query.exchange = null
            }

            handlePromise(res, next, udf.search(
                req.query.query,
                req.query.type,
                req.query.exchange,
                req.query.limit
            ))
        })

        // 历史数据端点
        app.get(`/${prefix}/history`, [
            query.symbol,
            query.from,
            query.to,
            query.resolution
        ], (req, res, next) => {
            handlePromise(res, next, udf.history(
                req.query.symbol,
                req.query.from,
                req.query.to,
                req.query.resolution
            ))
        })
    }
}

module.exports = createMarketRoutes 