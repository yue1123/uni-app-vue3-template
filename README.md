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
npm run dev:h5
```

ps：vite 虽快，但奇奇怪怪的问题还是挺多的，不建议在大型项目中使用，遇到问题，会让你崩溃的
