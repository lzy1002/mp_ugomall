import {request} from "./request.js";

export function getToken(option) {
  return request({
    url: "/users/wxlogin",
    method: "post",
    data: option
  })
}
