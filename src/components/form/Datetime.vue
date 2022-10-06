<template>
  <el-form-item :label="field.name">
    <el-date-picker
      :type="field.dateType"
      v-model="field.value"
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      :value-format="field.datetime | time"
    ></el-date-picker>
  </el-form-item>
</template>
<script>
// import { initFormData, timeFormat } from '@/utils/loader'
export default {
  name: 'datetime',
  data() {
    return {
      // formData: initFormData( this.field.field, this.field.value )
    }
  },
  props: ['field'],
  filters: {
    time: function (val) {
      return val
      // return timeFormat[val]
    },
  },
  methods: {
    getElementData() {
      var result = {}
      result[this.field.field] = this.field.value
      return result
    },
  },
}
</script>
