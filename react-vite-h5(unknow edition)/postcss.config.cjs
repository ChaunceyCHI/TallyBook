// 此文件后缀名应写作cjs！！！！！！！！！！！！
// 用vite创建项目，配置postcss需要使用postcss.config.js
// 具体配置方法可以在GitHub中的postcss-pxtorem查看文档

module.exports = {
    "plugins": [
        require("postcss-pxtorem")({
            rootValue: 37.5,
            propList: ['*'],
            selectorBlackList: ['.norem'] // 过滤掉.norem-开头的class，不进行rem替换
        })
    ]
}
