import httpService from './httpService'
import { getUrlParamsFromObj, _handleCancelRequest } from './utilService'

export const recordService = {
  query,
}

function query(filterBy, sort) {
  const key = 'record/query'
  const token = _handleCancelRequest(key)
  const { itemsPerPage, currPage } = filterBy
  delete filterBy.itemsPerPage
  delete filterBy.currPage
  const filterQuery = getUrlParamsFromObj({ ...filterBy, ...sort })

  return httpService.customRequest('get', `record?limit=${itemsPerPage}&skip=${currPage * itemsPerPage}&${filterQuery.substr(1)}`, null, { cancelToken: token })
  // return httpService.get(`record?limit=${itemsPerPage}&skip=${currPage * itemsPerPage}&${filterQuery.substr(1)}`)
}

