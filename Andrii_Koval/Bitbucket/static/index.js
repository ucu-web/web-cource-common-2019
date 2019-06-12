import './styles/common.css'
import './styles/fonts.css'
import loginForm from './components/login/'
import renderBegRes from './components/beginner-resources'
import renderCurve from './components/curve'
import renderFeature from './components/feature'
import renderHeader from './components/header'
import renderIntegration from './components/integration'
import renderIntroduction from './components/introduction'
import renderPartners from './components/partners'
import renderPricing from './components/pricing'


const path_name = window.location.pathname;
const appBody = document.getElementsByTagName("body")[0];
appBody.appendChild(renderHeader());
appBody.appendChild(renderIntroduction());
appBody.appendChild(renderCurve());
renderFeature(appBody, "/featureData.json");
appBody.appendChild(renderBegRes());
appBody.appendChild(renderIntegration());
appBody.appendChild(renderPartners());
appBody.appendChild(renderPricing());

if (path_name === "/login") {
    appBody.innerHTML = "";
    appBody.appendChild(loginForm())
}