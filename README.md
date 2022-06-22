# uni-app-vue3-template

这是一个 `vue3` + `uni-app` + `vant` + `TS` 的 h5 项目快速起手 cli 模板

-   完善的 ts 支持
-   [vue-query](https://github.com/DamianOsipiuk/vue-query)
-   路径 aliasCancel changes
-   pnpm 包管理器
-   axios 拦截器封装
-   模块化的架构
-   自带 hooks
    -   返回键监听
    -   基于`useInfiniteQuery`二次封装的无限列表请求 hooks，由于使用时接口都不一样，所以只能参考，具体还需根据自己的后台接口做代码调整
-   自带组件 - 无限列表滚动加载组件（下拉刷新需配合 `vant` 的下拉刷新组件使用）
    ...

## 安装

```bash
# clone
git clone https://github.com/yue1123/uni-app-vue3-template
# cd into project
cd uni-app-vue3-template
# install dependencies
pnpm install
# start
pnpm run dev:h5
```


注意: 目前uni-app vue3版本还是beta版,如果某次重新安装依赖后,导致应用打包白屏,就用uni-app的脚手架工具重新创建一个项目,然后把package.json中的uni-app相关依赖复制到当前项目来,然后重新安装依赖
