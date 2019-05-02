import Vue from 'vue';
import { ObserveVisibility } from 'vue-observe-visibility';

if (process.browser) {
  Vue.directive('observe-visibility', ObserveVisibility);
}
