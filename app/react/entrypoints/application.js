const componentRequireContext = require.context('../components/router')
const ReactRailsUJS = require('react_ujs')
ReactRailsUJS.useContext(componentRequireContext)