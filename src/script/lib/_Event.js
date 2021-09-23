// import Mame from './_Absctract.js';

// class DOM extends Mame {
//     $(element) { 
//         const query = element[0];
//         return {
//             onClick(listener, options) {
//                 query.addEventListener('click', listener, options);
//             }
//         }
//     }

//     $query(element) {
//         const query = element;
//         return {
//             hover() {
//                 return {
//                     on(listener, options) {
//                         query.addEventListener("mouseover", listener, options);
//                         return this;
//                     },

//                     off(listener, options){
//                         query.addEventListener("mouseout", listener, options);
//                         return this;
//                     }
//                 }
//             },  

//             focus() {
//                 return {
//                     on(listener, options) {
//                         query.addEventListener("focus", listener, options);
//                         return this;
//                     },

//                     off(listener, options) {
//                         query.addEventListener("blur", listener, options);
//                         return this;
//                     }
//                 }
//             },

//             animationEnd(listener, options) {
//                 query.addEventListener("animationend", listener, options);
//                 return this;
//             },

//             onKeyUp(listener, options) {
//                 query.addEventListener("keyup", listener, options);
//                 return this;
//             },

//             onSubmit(listener, options) {
//                 query.addEventListener("submit", listener, options);
//                 return this;
//             },
//         }
//     }
// }

// export default Event;