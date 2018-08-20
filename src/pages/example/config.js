const config = {
  search: {
    show: true,
    fields: [
      {
        type: 'datetime',
        field: 'time',
        name: '时间',
        dateType: 'daterange',
        format: 'yyyy-MM-dd'
      },
      {
        type: 'sk-input',
        field: 'id',
        name: 'ID'
      },
      {
        type: 'sk-input',
        field: 'phone',
        name: '手机号'
      },
      {
        type: 'sk-select',
        field: 'channel',
        name: '渠道',
        enum: [
          {
            'key': 100,
            'value': '官方'
          },
          {
            'key': 102,
            'value': '公众号'
          }
        ],
        requestData: true,
        requestUrl: 'channel/list'
      },
      {
        type: 'sk-select',
        field: 'integral',
        name: '积分',
        enum: [
          {
            'key': '0-1000',
            'value': '0-1000'
          },
          {
            'key': '1000-10000',
            'value': '1000-10000'
          }
        ]
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
        icon: 'el-icon-eye',
        callback: (rows) => {
          console.log(rows)
        }
      },
      {
        name: '删除',
        callback: (rows) => {
          console.log(rows)
        }
      },
      {
        name: '记录',
        callback: (rows) => {
          console.log(rows)
        }
      },
      {
        name: '兑换',
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
