const version = 'v3'

export const dashboardController = {
  getWorkflowSummary: {
    service: 'algo',
    controller: 'workflow',
    action: 'summary',
    method: 'GET'
  },
  getWfHistorySummary: {
    service: 'algo',
    controller: 'wfhistory',
    action: 'summary',
    method: 'GET'
  },
  getAlgoSummary: {
    service: 'algos',
    version: 'v3',
    controller: 'summary',
    method: 'GET'
  },
  getAlgoHistorySummary: {
    service: 'algo',
    controller: 'history',
    action: 'summary',
    method: 'GET'
  },
  getModelSummary: {
    service: 'modelrepo',
    version: 'v2',
    controller: 'summary',
    method: 'GET'
  }
}
