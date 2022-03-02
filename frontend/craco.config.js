const path = require('path')
const resolvePath = (p) => path.resolve(__dirname, p)
module.exports = {
    webpack: {
        alias: {
            '@components': resolvePath('./src/Components'),
            '@assets': resolvePath('./src/assets'),
            '@utils': resolvePath('./src/utils'),
        },
    },
}
