<template>
  <div class="list">
    <el-table :border="true" :data="dataList">
      <el-table-column
        v-for="(item, index) in list.fields"
        :key="index"
        :label="item.name"
        :type="item.type"
        :prop="item.field"
      ></el-table-column>
      <el-table-column
        v-if="list.actions && list.actions.length > 0"
        label="操作"
      >
        <template slot-scope="scope">
          <el-button-group>
            <el-button
              v-for="(btn, key) in list.actions"
              size="mini"
              :icon="btn.icon"
              v-on:click="btn.callback(scope)"
              :key="key"
              >{{ btn.name }}</el-button
            >
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'list',
  props: ['list', 'dataList'],
  data() {
    return {
      msg: '',
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
<style scoped>
.list {
  padding: 20px;
}
</style>
