
import vue from 'vue'

export function getUserInfo (data) {
  return $http.get('/api/table/list2', data)
}
