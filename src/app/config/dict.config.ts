export const WorkflowStatus = [
  {
    code: 'APPEND',
    name: '准备'
  },
  {
    code: 'ACTIVE',
    name: '启用'
  },
  {
    code: 'SUSPEND',
    name: '停用'
  },
  {
    code: 'DELETED',
    name: '废除'
  }
]

export const ValueType = [
  {
    code: '0',
    name: '字符串'
  },
  {
    code: '1',
    name: '非字符串'
  }
]

export const ParamType = [
  {
    code: '0',
    name: '内置参数'
  },
  {
    code: '1',
    name: '用户参数'
  }
]

export const AlgoType = [
  {
    code: 'speed',
    name: '增量'
  },
  {
    code: 'batch',
    name: '批量'
  },
  {
    code: 'other',
    name: '其他'
  }
]

export const AlgoTag = [
  {
    code: 'classify',
    name: '分类'
  },
  {
    code: 'clustering',
    name: '聚类'
  },
  {
    code: 'recommend',
    name: '推荐'
  }
]

export const DevLang = [
  {
    code: 'python',
    name: 'Python'
  },
  {
    code: 'java',
    name: 'Java'
  }
]

export const WfHistoryStatus = [
  {
    code: 'prepare',
    name: '待运行'
  },
  {
    code: 'running',
    name: '运行中'
  },
  {
    code: 'successed',
    name: '成功'
  },
  {
    code: 'failed',
    name: '失败'
  }
]

export const YesNoStatus = [
  {
    code: true,
    name: '是'
  },
  {
    code: false,
    name: '否'
  }
]
