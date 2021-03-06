import createCompounder from './.internal/createCompounder.js'

/**
 * 转换 `string`, 转换为以空格分割的小写字符串
 *
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the lower cased string.
 * @see camelCase, kebabCase, snakeCase, startCase, upperCase, upperFirst
 * @example
 *
 * lowerCase('--Foo-Bar--')
 * // => 'foo bar'
 *
 * lowerCase('fooBar')
 * // => 'foo bar'
 *
 * lowerCase('__FOO_BAR__')
 * // => 'foo bar'
 */
const lowerCase = createCompounder((result, word, index) =>
  result + (index ? ' ' : '') + word.toLowerCase()
)

export default lowerCase
