import {request} from "./request.js";

export function getSearchData(query) {
  return request({
    url: "/goods/qsearch",
    data: {
      query
    }
  })
}
