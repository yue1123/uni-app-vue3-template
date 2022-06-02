<template>
	<view class="content">
		<image class="logo" src="/static/logo.png" />
		<view class="text-area">
			<text class="title">{{ title }}</text>
		</view>
		<view class="example-links">
			<navigator url="/pages/request/index">网络请求</navigator>
			<navigator url="/pages/user-list/index">用户列表</navigator>
		</view>
		<view class="github">
			<a href="https://github.com/yue1123/uni-app-vue3-template"> Github</a>
		</view>
	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	const title = ref('Hello uni-app')
</script>

<style lang="less">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.example-links {
		display: flex;
		justify-content: space-around;
		padding: 10px;
		navigator {
			margin: 0 10px;
			color: #007aff;
		}
	}
	.github {
		margin-top: 50rpx;
		font-size: 36rpx;
		color: #8f8f94;
		position: fixed;
		bottom: 15px;
		left: 50%;
		transform: translateX(-50%);
	}
</style>
