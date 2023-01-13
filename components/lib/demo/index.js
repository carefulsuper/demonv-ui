import mDemo from './src/mian'

mDemo.install = function (Vue) {
    Vue.component(mDemo.name,mDemo);
}
export default mDemo
