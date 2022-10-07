<template>
  <el-form-item :label="field.name" v-if="!field.primaryKey">
    <el-upload class="avator-upload" action="">
      <img v-if="imgUrl" :src="imgUrl" alt="img" class="avatar" />
      <el-icon class="avatar-uploader-icon"><el-icon-plus /></el-icon>
    </el-upload>
  </el-form-item>
</template>

<script>
import { Plus as ElIconPlus } from '@element-plus/icons'
export default {
  components: {
    ElIconPlus,
  },
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
