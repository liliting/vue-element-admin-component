<template>
  <div class="login-container">
    <search :search="config.search"></search>
    <btn-group :actions="config.actions"></btn-group>
    <list :list="config.list"></list>
  </div>
</template>

<script>
import Search from '@/components/Search'
import List from '@/components/List'
import BtnGroup from '@/components/BtnGroup'
import config from './config'
export default {
  name: 'example',
  components: {
    Search,
    List,
    BtnGroup
  },
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
