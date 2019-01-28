import Taro from '@tarojs/taro-h5';
import Nerv from "nervjs";
import '@tarojs/async-await';

export function getJSON(url, data) {
  Taro.showLoading();
  return Taro.request({ url: url, data: data, method: 'GET' }).then(result => {
    Taro.hideLoading();
    return result;
  });
}

export function postJSON(url, data) {
  Taro.showLoading();
  return Taro.request({ url: url, data: data, method: 'POST' }).then(result => {
    Taro.hideLoading();
    return result;
  });
}