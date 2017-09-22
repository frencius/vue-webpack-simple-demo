<template>
	<div id="header">
		<header>
			<h1>
				{{ title }}
			</h1>
		</header>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				title: "HEADER"
			}
		}
	}
</script>

<style scoped>
header {
	background: lightgreen;
	padding: 10px;
}
h1 {
	color: #222;
	text-align: center;		
}

.el-row {
	margin-bottom: 20px;
	&:last-child {
		margin-bottom: 0;
	}
}
.el-col {
	border-radius: 4px;
}
.bg-purple-dark {
	background: #99a9bf;
}
.bg-purple {
	background: #d3dce6;
}
.bg-purple-light {
	background: #e5e9f2;
}
.grid-content {
	border-radius: 4px;
	min-height: 36px;
}
.row-bg {
	padding: 10px 0;
	background-color: #f9fafc;
}
</style>