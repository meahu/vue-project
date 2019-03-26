var Mock = require('mockjs');
import {reponseData} from '../utils.js'

var data = Mock.mock({
    'list|1-10': [{
        'id|+1': 1
    }]
})


Mock.mock('http://127.0.0.1:3000/table/list', 'get', reponseData(JSON.stringify(data)));