<template>
  <el-form-item :label="field.name" v-if="!field.primaryKey">
    <el-input
      v-model="field.value"
      :placeholder="field.name"
      :name="field.field"
    ></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: 'SkInput',
  props: ['field'],
  methods: {
    checkElementLegal() {
      return this.field.value.length > 0
    },
    getElementData() {
      var result = {}
      result[this.field.field] = this.field.value
      return result
    },
  },
}
</script>
