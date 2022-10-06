<template class="sidebarItem-container">
  <router-link
    v-if="!item.hidden && item.children && item.children.length <= 1"
    :to="item.path"
    class="item-link"
  >
    <el-menu-item :index="item.path + '/' + item.children[0].path">
      <fa-icon :icon="item.meta.icon"></fa-icon>
      <template v-slot:title>
        <span>{{ item.children[0].meta.title }}</span>
      </template>
    </el-menu-item>
  </router-link>

  <el-submenu v-else-if="!item.hidden" :index="item.name + '/' + item.path">
    <template v-slot:title>
      <fa-icon :icon="item.meta.icon"></fa-icon>
      <template v-slot:title>
        <span>{{ item.meta.title }}</span>
      </template>
    </template>
    <template v-for="child in item.children">
      <sidebar-item
        v-if="child.children && child.children.length > 0"
        :item="child"
        :base-path="child.path"
      ></sidebar-item>
      <router-link v-else class="item-links" :to="item.path + '/' + child.path">
        <el-menu-item :index="item.path + '/' + child.path">
          <template v-slot:title>
            <span>{{ child.meta.title }}</span>
          </template>
        </el-menu-item>
      </router-link>
    </template>
  </el-submenu>
</template>

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
