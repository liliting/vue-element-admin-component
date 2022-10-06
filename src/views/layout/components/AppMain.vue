<template>
  <div class="app-main">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'appMain',
  data() {
    return {
      msg: 'hello',
    }
  },
}
</script>
