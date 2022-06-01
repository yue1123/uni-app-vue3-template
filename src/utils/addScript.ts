export function addScript(
	src: string,
	id: string
): Promise<void> {
	return new Promise((resolve, reject) => {
		if (document.getElementById(id)) {
			// 脚本加载后再次调用直接返回
			return resolve()
		}
		const scriptElement = document.createElement('script')
		scriptElement.src = `${src}&callback=jsonpCallBack`
		scriptElement.async = true
		document.head.appendChild(scriptElement)
		scriptElement.onload = () => {
			// 同时重复的调用该方法多次,异步结束时,已经有一个script先于此次调用,就移除
			if (document.getElementById(id)) {
				scriptElement.remove()
				return resolve()
			}
			scriptElement.id = id
			resolve()
		}
		scriptElement.onerror = reject
	})
}
