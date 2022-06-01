import { VueQueryPlugin, VueQueryPluginOptions } from 'vue-query'

const vueQueryPluginOptions: VueQueryPluginOptions = {
	queryClientConfig: {
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
				onError(error) {
					console.error('出错了', error)
				},
				retry: import.meta.env.VITE_APP_REQUEST_RETRY,
				retryDelay: 3000
			},
			mutations: {
				onMutate() {
					uni.showLoading({ title: '请稍后...' })
					// console.log('开始更新')
				},
				onError(err) {
					uni.hideLoading()
					// console.log('发送错误', err)
				},
				onSettled() {
					uni.hideLoading()
					// console.log('发送成功')
				},
				retry: import.meta.env.VITE_APP_REQUEST_RETRY,
				retryDelay: 3000
			}
		}
	}
}
export { VueQueryPlugin, vueQueryPluginOptions }
