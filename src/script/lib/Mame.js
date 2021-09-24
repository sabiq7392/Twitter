import Dom from './_Dom.js';
import DomSuper from './_DomSuper.js';

const dom = new Dom();
const domSuper = new DomSuper(dom)

const $ = (element) => domSuper.$(element);

export { $ };