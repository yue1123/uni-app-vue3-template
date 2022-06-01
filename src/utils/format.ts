export function formatDate(value: string | number, pattern = '') {
	pattern = pattern.toLocaleLowerCase()
	var weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
	var date = new Date(value),
		//年
		y = date.getFullYear(),
		//月
		m = String(date.getMonth() + 1).padStart(2, '0'),
		m2 = String(date.getMonth() + 1),
		//日
		d = String(date.getDate()).padStart(2, '0'),
		d2 = String(date.getDate()),
		//星期
		e = String(weeks[date.getDay()]),
		//时
		hh = String(date.getHours()).padStart(2, '0'),
		//分
		mm = String(date.getMinutes()).padStart(2, '0'),
		//秒
		ss = String(date.getSeconds()).padStart(2, '0')
	switch (pattern) {
		case 'mmdd':
			return `${m2} 月 ${d2} 日 ${e}`
		case 'yyyymmdd hh:mm':
			return `${y}-${m}-${d} ${hh}:${mm}`
		case 'yyyymmdd':
			return `${y}${m}${d}`
		case 'yyyy-mm-dd':
			return `${y}-${m}-${d}`
		case 'yyyy年mm月dd':
			return `${y} 年 ${m} 月 ${d} 日`
		case 'yyyy-mm-dd 时分秒':
			return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
		case 'yyyy年mm月dd 时分秒':
			return `${y} 年 ${m} 月 ${d} 日 ${hh}:${mm}:${ss}`
		default:
			return `${y}/${m}/${d} ${hh}:${mm}:${ss}`
	}
}
