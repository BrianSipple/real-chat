import Ember from 'ember';

const {
  Component,
} = Ember;

export default Component.extend({

  tagName: 'svg',

  attributeBindings: [
    'id',
    'version',
    'viewBox',
    'xmlns',
    'xmlnsXlink:xmlns:xlink',   // special syntax for namespaced attributes (https://github.com/emberjs/ember.js/pull/10186#discussion_r22911832)
    'x',
    'y',
    'width',
    'height',
    'stroke',
    'stroke-width',
    'fill',
    'preserveAspectRatio',
    'style'
  ],

  iconURL: null,


  // Default attributes
  version: '1.1',
  width: '1em',
  height: '1em',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  'stroke-width': '0.125em'
});
