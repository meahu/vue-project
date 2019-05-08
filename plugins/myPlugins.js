module.exports = class myPlugins {
    constructor () {
        console.log('constructor')
    }

    apply (compiler) {
        compiler.plugin('emit', (compilation, callback) => {
            for (let item in compilation.assets) {
                console.log(item, /asset\/css/.test(item));
            }
            callback()
        })
    }
}