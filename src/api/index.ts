import { httpClient } from 'utils/httpClient'
export function getRandomSentence() {
	return httpClient({
		url: '?c=d&c=k&c=a&min_length=20&max_length=100',
		method: 'GET'
	})
}
