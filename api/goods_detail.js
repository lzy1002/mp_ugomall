import {request} from "./request.js";

export function getGoodsDetailData(goodsId) {
  return request({
    url: "/goods/detail",
    data: {
      goods_id: goodsId
    }
  })
}
