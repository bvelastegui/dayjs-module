import dayjs from 'dayjs'

<%= options.locales.map(l => `import 'dayjs/locale/${l}'`).join('\n') %>

<%= options.plugins.map(l => `dayjs.extend(require('dayjs/plugin/${l}'))`).join('\n') %>

<% if (options.defaultLocale) { %>
dayjs.locale('<%= options.defaultLocale %>')
<% } %>

export default (context, inject) => {
  context.$dayjs = dayjs
  inject('dayjs', dayjs)
}
