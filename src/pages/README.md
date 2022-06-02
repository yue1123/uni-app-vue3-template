## app 页面视图

### 路由与目录/文件命名规范:

* 文件路径应和路由地址一致

> 例如:
> `src/pages/index.vue` 对应着 `/pages/index/index`
> `src/pages/request/index.vue` 对应着 `/pages/index/request/index`
> `src/pages/user/index.vue` 对应着 `/pages/index/user/index`
> `src/pages/user/detail/index.vue` 对应着 `/pages/index/user/detail/index`

这样能够有一个清晰的路由层级关系

* 非复用页面组件(仅用来拆分逻辑的),就放在当前页面文件夹`components`下

> 例如:
> `src/pages/user/index.vue` 页面需要拆分用户列表项组件,就放在 `src/pages/user/components/UserListItem/index.vue`

* 文件/目录命名应该符合url命名规范,一般是短横线或者下划线连接单词