<template>
  <el-form-item :label="field.name" v-if="!field.primaryKey">
    <el-upload class="avator-upload" action="">
      <img v-if="imgUrl" :src="imgUrl" alt="img" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </el-form-item>
</template>

<script>
export default {
  name: 'SkInput',
  props: ['field'],
  data() {
    return {
      imgUrl: '',
    }
  },
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
