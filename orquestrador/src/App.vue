<template>
  <div>
    <router-link to="/">
			Voltar
    </router-link>
    <router-link to="/sistema-a/#/tela-a1">
			Tela A1
    </router-link>
    <router-link to="/sistema-b/#/tela-b2">
			Tela B2
    </router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>