<template>
	<slot></slot>
	<Loading
		class="padding"
		v-if="!props.isNetworkError && props.isLoading"
		vertical
		:color="colors.mainColor"
	/>
	<Loading
		class="padding"
		v-else-if="!isPullDownLoading && props.isFetching"
		vertical
		:color="colors.mainColor"
	/>
	<Empty
		v-else-if="props.isNetworkError"
		image="data:image/png;base64,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"
		description="网络错误"
	/>
	<Empty v-else-if="props.isError" :image="loadErrorIcon" description="加载失败">
		<Button round plain type="primary" class="bottom-button" @click="() => emit('reload')"
			>重新加载</Button
		>
	</Empty>
	<Empty v-else-if="props.isEmpty" :image="emptyIcon" description="暂无更多" />
	<div class="no-more padding text-center" v-else-if="!props.hasMore">
		<div>我是有底线的</div>
	</div>
</template>

<script setup lang="ts">
	import { Loading, Empty, Button } from 'vant'
	import { colors, emptyIcon, loadErrorIcon } from 'constants/index'
	import { defineProps, withDefaults, defineEmits } from 'vue'
	interface IProps {
		hasMore?: boolean
		isError?: boolean
		isEmpty?: boolean
		isLoading?: boolean
		isFetching?: boolean
		isNetworkError?: boolean
		isPullDownLoading?: boolean
	}
	const emit = defineEmits(['reload'])
	const props = withDefaults(defineProps<IProps>(), {
		isLoading: true,
		isFetching: true,
		hasMore: false,
		isEmpty: false,
		isError: false,
		isNetworkError: false,
		isPullDownLoading: false
	})
</script>

<style lang="scss" scoped>
	.padding {
		padding: 15px 0;
	}
	.no-more {
		font-size: 14px;
		color: #d9d9d9;
		div {
			position: relative;
			display: inline-block;
			&::after,
			&::before {
				content: '';
				display: inline-block;
				position: absolute;
				top: 49%;
				width: 10vw;
				height: 1px;
				background: currentColor;
			}
			&::before {
				left: 105%;
			}
			&::after {
				right: 105%;
			}
		}
	}
</style>
