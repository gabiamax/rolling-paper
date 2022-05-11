import Vue from 'vue';

export const toastError = (text) => {
  Vue.$toast.error(text);
};
