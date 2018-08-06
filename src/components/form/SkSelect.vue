<template>
  <el-form-item :label="field.name">
    <el-select v-model="field.value" :name="field.field">
      <el-option v-for="(item,key) in field.enum" :key="'option_'+key" :label="item.value" :value="item.key"></el-option>
    </el-select>
  </el-form-item>
</template>

<script>
// import { initFormData } from '@/utils/loader';
export default {
  name: 'SkSelect',
  data () {
    return {
      // formData: initFormData(this.field.field, this.field.value)
    }
  },
  props: ['field'],
  mounted: function () {
    // console.log( this.formData )
  },
  methods: {
    checkElementLegal () {
      // return this.formData[this.field.field] != ''
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
