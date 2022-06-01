/// <reference types="vite/client" />

declare module '*.vue' {
	import { DefineComponent } from 'vue'
	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
	const component: DefineComponent<{}, {}, any>
	export default component
}

// 环境变量
interface ImportMetaEnv {
	// 请求基础路径
	readonly VITE_APP_BASE_URL: string
	/**
	 * 请求失败重试次数
	 */
	readonly VITE_APP_REQUEST_RETRY: number
	// 更多环境变量...
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}

// 接口响应数据
interface ResponseData<T = any> {
	/**
	 * 状态码
	 * @type { number }
	 */
	code: number

	/**
	 * 数据
	 * @type { T }
	 */
	data: T

	/**
	 * 请求是否成功
	 * @type { boolean }
	 */
	success: boolean
}

interface PageAbleData<T = any> {
	// 数据总数
	numberOfElements: number
	/**
	 * 分页的数据
	 */
	content: T[]
	/**
	 * 是否是空
	 */
	empty: boolean
	/**
	 * 当前页码
	 */
	number: number
	/**
	 * 是否是第一页
	 */
	first: boolean
	/**
	 * 是否是最后一页
	 */
	last: boolean
	/**
	 * 每一页数据的数量
	 */
	size: number
	/**
	 * 数据总共条数
	 */
	totalElements: number
	/**
	 * 总共的页数
	 */
	totalPages: number
}
