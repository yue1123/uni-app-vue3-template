import axios from 'axios'

declare module 'axios' {
	export interface AxiosResponse<T = ResponseData | any> extends Promise<T> {
		/**
		 * 响应数据
		 * @type { T }
		 */
		data: T
	}
}
