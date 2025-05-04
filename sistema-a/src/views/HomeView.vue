<template>
	<div class="home">
		<div class="d-flex justify-content-evenly align-items-center">
			<router-link to="/tela-a1/" class="btn-large bg-color-green color-white bold">
				Tela A1
			</router-link>
			<router-link to="/tela-a2/" class="btn-large bg-color-yellow color-white bold">
				Tela A2
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

	.bg-color-green{
		background-color: green;
	}

	.bg-color-yellow{
		background-color: yellow;
	}

	.color-white{
		color: white;
	}

	.bold{
		font-weight: bold;
	}
	
</style>

<script>
	console.log('Sistema A carregado!');
	export default {
		name: 'HomeView',
	}
</script>
