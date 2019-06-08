import './styles/beginner-resources.less'
import './styles/common.css'
import './styles/curve-line.less'
import './styles/feature.less'
import './styles/fonts.css'
import './styles/header.less'
import './styles/horizontal-line.css'
import './styles/integrations.less'
import './styles/intro.less'
import './styles/layout.less'
import './styles/partners.less'
import './styles/pricing.less'
import {loginForm} from './components/login/Login'

const path_name = window.location.pathname;

if (path_name === "/login") {
    document.getElementsByTagName("body")[0].innerHTML = "";
    document.appendChild(loginForm())

}