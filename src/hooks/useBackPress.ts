import { onUnmounted } from 'vue'
export function useBackPress(cal: (e: PopStateEvent) => any): void {
	window.addEventListener('popstate', cal, false)
	onUnmounted(() => {
		requestAnimationFrame(() => window.removeEventListener('popstate', cal))
	})
}
