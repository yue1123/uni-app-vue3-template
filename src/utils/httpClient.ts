import axios from 'axios'
import { Toast } from 'vant'

export const httpClient = axios.create({
	baseURL: import.meta.env.VITE_APP_BASE_URL,
	timeout: 12000
})

httpClient.interceptors.request.use(
	(config) => {
		// config.headers = {}
		return config
	},
	(error) => {
		return Promise.reject(error)
	}
)

httpClient.interceptors.response.use(
	(response) => {
		if (response.data.data && response.data.data.errorCode) {
			Toast(response.data.data.errorMsg || '出错了')
			return Promise.reject(response.data.data.errorMsg)
		}
		return response.data.data
	},
	(error) => {
		return Promise.reject(error)
	}
)
