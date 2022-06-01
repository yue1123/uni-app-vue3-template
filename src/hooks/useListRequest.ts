import { ref } from 'vue'
import { AxiosResponse } from 'axios'
import { useInfiniteQuery } from 'vue-query'

import { REQUEST_MIN_LOADING_TIME } from 'constants/index'
import { onReachBottom } from '@dcloudio/uni-app'
import { timeOutPromise } from 'utils/index'
interface ListRequestOptions<T> {
	key: Array<string | number>
	delay?: number
	request: (page: number) => Promise<AxiosResponse<PageAbleData<T>>>
	onSuccess?: Function
}

export function useListRequest<T = any>(options: ListRequestOptions<T>) {
	const { key, delay, request, onSuccess } = options
	const isPullDownLoading = ref(false)
	const isNetworkError = ref(false)
	const isEmpty = ref(false)
	const queryRes = useInfiniteQuery(
		key,
		// @ts-ignore
		async (page) => {
			const [_, data] = await Promise.all([
				timeOutPromise(delay || REQUEST_MIN_LOADING_TIME),
				request(page.pageParam)
			])
			// 空数据
			isEmpty.value = data.first && data.numberOfElements === 0
			return data
		},
		{
			getNextPageParam: (data: PageAbleData<T>) => {
				return data.last ? undefined : data.number + 2
			},
			onSuccess(data) {
				onSuccess && onSuccess(data)
			},
			onError(err: Error) {
				isNetworkError.value =
					err.message === 'Network Error' ? true : false
				// 加载失败关闭下拉刷新的状态
				isPullDownLoading.value = false
			}
		}
	)
	// 重置请求从第一页开始
	const refetchFirst = () => {
		queryRes.refetch.value({ refetchPage: (_, index) => index === 0 })
	}
	// 触底加载下一页
	onReachBottom(() => {
    console.log('底部');
    queryRes.fetchNextPage.value()
  })
	return {
		isEmpty,
		...queryRes,
		refetchFirst,
		isNetworkError,
		isPullDownLoading
	}
}