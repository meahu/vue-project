import { reponseData } from '../utils.js'
var Mock = require('mockjs')

var data = Mock.mock({
  'list|1-10': [{
    'id|+1': 1
  }]
})

Mock.mock('http://127.0.0.1:3000/api/table/list2?a=1&b=2', 'get', reponseData(data))
