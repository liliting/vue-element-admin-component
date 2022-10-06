<template>
  <div class="login-container">
    <search :search="config.search"></search>
    <btn-group :actions="config.actions"></btn-group>
    <list :list="config.list" :dataList="tableData"></list>
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
    BtnGroup,
  },
  created() {
    this.config = config
    console.log(config)
  },
  data() {
    return {
      config: null,
      tableData: [
        {
          userId: '20323213',
          phone: '23213213213',
          channel: '100',
        },
        {
          userId: '20323213',
          phone: '23213213213',
          channel: '102',
        },
        {
          userId: '20323213',
          phone: '23213213213',
          channel: '200',
        },
      ],
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
