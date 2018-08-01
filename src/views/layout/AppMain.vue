<template>
  <div class="app-main">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'menu',
  data () {
    return {
      'msg': 'hello'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
