const config = {
  search: {
    show: true,
    fields: [
      {
        type: 'sk-input',
        field: 'id',
        name: '用户ID'
      },
      {
        type: 'sk-input',
        field: 'phone',
        name: '手机号'
      },
      {
        type: 'sk-select',
        field: 'integral',
        name: '状态',
        enum: [
          {
            'key': '0',
            'value': '不可用'
          },
          {
            'key': '1',
            'value': '可用'
          }
        ]
      },
      {
        type: 'datetime',
        field: 'time',
        name: '时间',
        dateType: 'daterange',
        format: 'yyyy-MM-dd'
      }
    ]
  },
  actions: [
    {
      type: 'primary',
      name: '添加',
      // icon: 'el-icon-edit',
      callback: () => {
        console.log(this)
        console.log('it is callback')
      }
    },
    {
      type: 'warning',
      name: '删除',
      icon: 'el-icon-delete',
      callback: () => {
        console.log(this)
        console.log('it is 删除 callback')
      }
    }
  ],
  list: {
    actions: [
      {
        name: '查看',
        icon: 'el-icon-info',
        callback: (rows) => {
          console.log(rows)
        }
      },
      {
        name: '删除',
        icon: 'el-icon-delete',
        callback: (rows) => {
          console.log(rows)
        }
      },
      {
        name: '记录',
        icon: 'el-icon-tickets',
        callback: (rows) => {
          console.log(rows)
        }
      }
    ],
    fields: [
      {
        name: '选择',
        field: 'userId',
        type: 'selection'
      },
      {
        name: '用户ID',
        type: 'int',
        field: 'userId',
        primaryKey: true
      },
      {
        name: '手机号',
        type: 'int',
        field: 'phone'
      }
    ]
  }
}

export default config
