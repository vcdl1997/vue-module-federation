<template>
	<div class="home">
		<div class="d-flex justify-content-evenly align-items-center">
			<router-link to="/tela-b1/" class="btn-large bg-color-orange color-white bold">
				Tela B1
			</router-link>
			<router-link to="/tela-b2/" class="btn-large bg-color-pink color-white bold">
				Tela B2
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

	.bg-color-orange{
		background-color: orange;
	}

	.bg-color-pink{
		background-color: pink;
	}

	.color-white{
		color: white;
	}

	.bold{
		font-weight: bold;
	}
	
</style>

<script>
	console.log('Sistema B carregado!');
	export default {
		name: 'HomeView',
	}
</script>
