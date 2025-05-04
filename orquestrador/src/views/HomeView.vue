<template>
	<div class="home">
		<div class="d-flex justify-content-evenly align-items-center">
			<router-link to="/sistema-a/" class="btn-large bg-color-red color-white bold">
				Sistema A
			</router-link>
			<router-link to="/sistema-b/" class="btn-large bg-color-blue color-white bold">
				Sistema B
			</router-link>
		</div>
	</div>
</template>

<style>
	.home{
		width: 100%;
	}

	.d-flex{
		display: flex;
	}

	.justify-content-evenly{
		justify-content: space-evenly;
	}

	.align-items-center{
		align-items: center;
	}

	.btn-large{
		width: 100px; 
		text-align: center; 
		padding: 1em;
		text-decoration: none;
	}

	.bg-color-red{
		background-color: red;
	}

	.bg-color-blue{
		background-color: blue;
	}

	.color-white{
		color: white;
	}

	.bold{
		font-weight: bold;
	}
	
</style>

<script>
	export default {
		name: 'HomeView',
	}
</script>
