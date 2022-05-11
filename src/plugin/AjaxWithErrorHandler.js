/* eslint-disable no-param-reassign */
import Vue from 'vue';

async function ajaxWithErrorHandler({ func, params = '', errorMessage = '서버 오류입니다.' }) {
  try {
    const response = await func(params);
    return response;
  } catch (error) {
    const {
      data: { message },
    } = error.response;
    Vue.$toast.error(message ?? errorMessage);
    return null;
  }
}

function install(Vue) {
  if (!Vue.prototype.$ajaxWithErrorHandler) {
    Vue.prototype.$ajaxWithErrorHandler = ajaxWithErrorHandler;
  }
}

export default { install };
