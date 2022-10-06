<template>
  <el-form-item :label="field.name">
    <el-date-picker
      :type="field.dateType"
      v-model:value="field.value"
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      :value-format="time_filter(field.datetime)"
    ></el-date-picker>
  </el-form-item>
</template>

<script>
export default {
  name: 'datetime',
  data() {
    return {
      // formData: initFormData( this.field.field, this.field.value )
    }
  },
  props: ['field'],
  methods: {
    time_filter: function (val) {
      return val
      // return timeFormat[val]
    },
    getElementData() {
      var result = {}
      result[this.field.field] = this.field.value
      return result
    },
  },
}
</script>
