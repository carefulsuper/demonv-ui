import mDemo from './demo/src/mian.vue';
import mCard from './card/src/main'
import mPage from './page/src/mian.vue'

const components = {
    mDemo,
    mCard,
    mPage
};
const install =function (Vue) {
    if(install.installed) return;
    Object.keys(components).forEach(key=>{
        Vue.component(components[key].name,components[key])
    });
}

const API = {
    install,
};
export default API
