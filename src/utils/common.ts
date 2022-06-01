// 某一天时间的时间戳区间
export function getDayTimestampRange(dateString: string): [number, number] {
	const dayTimes = 24 * 60 * 60 * 1000 - 1
	const date = new Date(dateString).toLocaleDateString()
	let start = new Date(date).getTime()
	let end = start + dayTimes

	return [start, end]
}

// 延迟的promise
export function timeOutPromise(delay: number = 500) {
	return new Promise((resolve) => {
		setTimeout(() => resolve(undefined), delay)
	})
}
