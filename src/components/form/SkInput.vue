<template>
  <el-form-item :label="field.name" v-if="!field.primaryKey">
    <el-input v-model="field.value" :name="field.field"></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: 'SkInput',
  props: [ 'field' ],
  methods: {
    checkElementLegal () {
      return this.field.value.length > 0
    },
    getElementData () {
      var result = {}
      result[this.field.field] = this.field.value
      return result
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
