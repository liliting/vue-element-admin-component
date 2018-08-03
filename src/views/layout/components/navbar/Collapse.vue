<template>
  <div class="collapse">
    <fa-icon class="icon" @click="toggleClick" :class="{'isCollapse':isActive}" :icon="'bars'"></fa-icon>
  </div>
</template>

<script>
export default {
  name: 'collapse',
  data () {
    return {
      'msg': 'hello'
    }
  },
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    toggleClick: {
      type: Function,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.icon{
  height: 2em;
  font-size: 1.5em;
  transition: transform .3s ease;
  cursor: pointer;
  &.isCollapse{
    transform: rotate(-90deg);
  }
}
</style>
