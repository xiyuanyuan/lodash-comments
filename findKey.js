/**
 * 这个方法就像 `find`，除了它返回第一个元素的键 `predicate` 返回 `true` 代替元素本身
 *
 * @since 1.1.0
 * @category Object
 * @param {Object} object The object to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {string|undefined} Returns the key of the matched element,
 *  else `undefined`.
 * @see find, findIndex, findLast, findLastIndex, findLastKey
 * @example
 *
 * const users = {
 *   'barney':  { 'age': 36, 'active': true },
 *   'fred':    { 'age': 40, 'active': false },
 *   'pebbles': { 'age': 1,  'active': true }
 * }
 *
 * findKey(users, ({ age }) => age < 40)
 * // => 'barney' (iteration order is not guaranteed)
 */
function findKey(object, predicate) {
  let result
  if (object == null) {
    return result
  }
  Object.keys(object).some((key) => {
    const value = object[key]
    if (predicate(value, key, object)) {
      result = value
      return true
    }
  })
  return result
}

export default findKey
