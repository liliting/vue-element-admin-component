<template>
  <div class="login-container">
    dashboard
  </div>
</template>

<script>
import config from './config'
export default {
  name: 'example',
  created () {
    this.config = config
    console.log(config)
  },
  data () {
    return {
      config: null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
