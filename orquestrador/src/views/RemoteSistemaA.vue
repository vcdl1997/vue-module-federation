<template>
	<div>
		<div :id="containerId"></div>
	</div>
</template>
  
<script>
  export default {
	name: 'RemoteSistemaA',
	data() {
		return {
			containerId: 'remote-sistema-a',
			remoteApp: null
		}
	},
	async mounted() {
		const module = await import('sistema_a/App')
		const { app, router } = module.default
  
		const { createApp } = await import('vue')

		this.remoteApp = createApp(app).use(router)

		module.default.router.push('/');

		this.remoteApp.mount(`#${this.containerId}`)
	},
	beforeUnmount() {
		if (this.remoteApp) {
			this.remoteApp.unmount()
		}
	}
  }
</script>
  