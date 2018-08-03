<template>
  <div class="app-main">
    app-main
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'appMain',
  data () {
    return {
      'msg': 'hello'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
