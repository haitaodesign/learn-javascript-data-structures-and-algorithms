const bcd = require('@mdn/browser-compat-data')

const array = bcd.javascript.builtins.Array

const title = 'Array'

const length = getArrayProp(array).length
const titleComponent = `<h1>${title}(${length})</h1>`

const tableThead = `<thead>
<tr>
  <th>属性名称</th>
  <th>mdn_url</th>
  <th>spec_url</th>
</tr>
</thead>`

function getArrayProp (data) {
  console.log('__compat', data.__compat)
  delete data.__compat
  const array = Object.keys(data)
  return array
}

function createLinkComponent (text, href) {
  return `<a target="__blank" href=${href}>${text}</a>`
}

function createBody (data) {
  let tbody = ''
  const ArrayKeys = getArrayProp(data)
  ArrayKeys.forEach((item, index) => {
    const { mdn_url: MDNURL, spec_url: SPECURL } = data[item].__compat
    const MDNLink = MDNURL ? createLinkComponent(MDNURL, MDNURL) : undefined
    const SPECLink = SPECURL ? createLinkComponent(SPECURL, SPECURL) : undefined
    tbody += `<tr>
        <th>${ArrayKeys[index]}</th>
        <th>${MDNLink || 'NO'}</th>
        <th>${SPECLink || 'NO'}</th>
    </tr>`
  })
  return tbody
}

const tableTbody = createBody(array)
const tableComponent = `<table border="1">
${tableThead}
${tableTbody}
</table>`

const template = `${titleComponent}${tableComponent}`

const body = document.getElementsByTagName('body')

window.onload = function () {
  console.log('template', template)
  body[0].innerHTML = template
}

console.log(array)
