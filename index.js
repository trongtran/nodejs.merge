/**
* The helper function used to merge two objects into one object.
*
* @param {Object} target - The first object
* @param {Object} src - The second object (or array)
*
* @return {Object} New object that merged 2 objects in one.
* @author Trong Tran
*/
module.exports = function merge (target, src) {
  var array = Array.isArray(src);
  var dst = array && [] || {};

  // Process if src is an Array
  if (array) {
    target = target || [];
    dst = dst.concat(target);

    src.forEach(function(e, i) {
      if (typeof e === 'object') {
        dst[i] = merge(target[i], e);

      } else {
        if (target.indexOf(e) === -1) {
          dst.push(e);
        }
      }
    });
  
  // Process if src is an Object        
  } else {
    if (target && typeof target === 'object') {
      Object.keys(target).forEach(function (key) {
        dst[key] = target[key];
      });
    }

    Object.keys(src).forEach(function (key) {
      if (typeof src[key] !== 'object' || !src[key]) {
        dst[key] = src[key];
      }

      else {
        if (!target[key]) {
          dst[key] = src[key];
        } else {
          dst[key] = merge(target[key], src[key]);
        }
      }
    });
  }

  // Return value
  return dst;
}
