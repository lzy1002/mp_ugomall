import {request} from "./request.js";

export function getGoodsList(cid, pagenum, pagesize) {
  return request({
    url: "/goods/search",
    data: {
      cid,
      pagenum,
      pagesize
    }
  })
}
