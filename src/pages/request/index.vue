<template>
	<view class="page-container">
		<view v-if="isFetching">加载中...</view>
		<view v-else-if="isError">出错啦!!!</view>
		<view v-else>{{ data?.hitokoto }}</view>
		<button @click="() => refetch()">重新请求</button>
	</view>
</template>

<script setup lang="ts">
	import { useQuery } from 'vue-query'
	import { getRandomSentence } from 'api/index'

	const { isFetching, isError, data, refetch } = useQuery(
		['random-sentence'],
		async () => await getRandomSentence()
	)
</script>

<style scoped>
	.page-container {
		padding: 15px;
	}
	button {
		margin-top: 20px;
		display: inline-block;
	} 
</style>
