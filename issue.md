## 疑问
1. 样式加了scoped，会导致部分样式不生效？ eg: hll-dialog
2. vant-cli无法热更新？

3. 不用jsx写法，如何渲染$slots.default？
* 表示要插入的内容：<template #xxx></template>
* 表示被插入的内容：<slot name=xxx></slot>
4. hll-luck-draw可以，hll-luckDraw则不行，也不曝错。垃圾！
5. 修改webpack配置,需创建webpack.config.js. 网上没找到相关资料有说?
看源码.
需在根目录手动添加webpack.config.js. vant-cli内有webpack的默认配置, 需创建webpack.config.js添加自定义配置. vant-cli会将默认配置与自定义配置合并, merge成最终的webpack配置
```js
// @vant/cli/lib/common/constant.js
exports.ROOT_WEBPACK_CONFIG_FILE = path_1.join(exports.ROOT, 'webpack.config.js');
// @vant/cli/lib/common/index.js
const constant_1 = require("./constant");
function getWebpackConfig(defaultConfig) {
    if (fs_extra_1.existsSync(constant_1.ROOT_WEBPACK_CONFIG_FILE)) {
        const config = require(constant_1.ROOT_WEBPACK_CONFIG_FILE);
        // 如果是函数形式，可能并不仅仅是添加额外的处理流程，而是在原有流程上进行修改
        // 比如修改markdown-loader,添加options.enableMetaData
        if (typeof config === 'function') {
            return webpack_merge_1.merge(defaultConfig, config(defaultConfig));
        }
        return webpack_merge_1.merge(defaultConfig, config);
    }
    return defaultConfig;
}
```
6. 样式? 组件是以设计图750px为基准的. 而vant-cli是用iframe的, 如何做适配?
7. vue dev-tool无效?
由于使用了vue3, 需用新的dev-tool才能使用