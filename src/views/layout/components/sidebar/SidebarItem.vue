<!-- <template>-->
<template class="sidebarItem-container" v-if="!item.hidden && item.children">
  <router-link
    v-if="!item.hidden && item.children && item.children.length <= 1"
    :to="item.path"
    :key="item.name + '-' + item.children[0].name"
    class="item-link"
  >
    <el-menu-item :index="item.path + '/' + item.children[0].path">
      <fa-icon :icon="item.meta.icon"></fa-icon>
      <span slot="title">{{ item.children[0].meta.title }}</span>
    </el-menu-item>
  </router-link>

  <el-submenu v-else-if="!item.hidden" :index="item.name + '/' + item.path">
    <template slot="title">
      <fa-icon :icon="item.meta.icon"></fa-icon>
      <span slot="title">{{ item.meta.title }}</span>
    </template>
    <template v-for="child in item.children">
      <sidebar-item
        v-if="child.children && child.children.length > 0"
        :item="child"
        :key="child.path"
        :base-path="child.path"
      ></sidebar-item>
      <router-link
        v-else
        class="item-links"
        :to="item.path + '/' + child.path"
        :key="child.name"
      >
        <el-menu-item :index="item.path + '/' + child.path">
          <span slot="title">{{ child.meta.title }}</span>
        </el-menu-item>
      </router-link>
    </template>
  </el-submenu>
</template>
<!--  </template> -->

<script>
export default {
  name: 'sidebarItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
    basePath: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      msg: '',
    }
  },
}
</script>

<style lang="scss" scoped>
.item-links,
.item-link {
  text-decoration: none;
  display: block;
}
svg {
  padding-right: 25px;
}
</style>
