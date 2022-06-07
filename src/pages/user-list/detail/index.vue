<template>
	<div>用户详情页面</div>
</template>

<script setup lang="ts">
	import { useBackPress } from 'hooks/useBackPress'
	useBackPress(() => {
		console.log('返回')
	})
</script>

<style lang="scss" scoped></style>
