import { httpClient } from 'utils/httpClient'
import { RandomSentence } from 'types/apiResponseData'
export function getRandomSentence() {
	return httpClient.get<RandomSentence>('?c=d&c=k&c=a&min_length=20&max_length=100')
}
