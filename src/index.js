// es6 polyfill
import 'core-js/fn/array/find-index';

import Button from './components/button';
import locale from './locale';

const ele = {
  Button
};

const install = function (Vue, opts = {}) {
  locale.use(opts.locale);
  locale.i18n(opts.i18n);

  Object.keys(ele).forEach((key) => {
    Vue.component(key, ele[key]);
  });

  // Vue.prototype.$Loading = LoadingBar;
  // Vue.prototype.$Message = Message;
  // Vue.prototype.$Modal = Modal;
  // Vue.prototype.$Notice = Notice;
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = Object.assign(ele, {install}); // eslint-disable-line no-undef
