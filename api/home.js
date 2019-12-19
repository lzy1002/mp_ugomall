import {request} from "./request.js";

export function getSwiperList() {
  return request({
    url: "/home/swiperdata"
  });
}

export function getCateList() {
  return request({
    url: "/home/catitems"
  });
}

export function getFloorList() {
  return request({
    url: "/home/floordata"
  });
}
