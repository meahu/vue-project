import Vue from 'vue'
import aComponents from './a.vue'

let aConstrucotor = Vue.extend(aComponents);



// export default function (text) {
//     let instance = new aConstrucotor({
//         data: {
//             content: text
//         }
//     })
//     instance.$mount()
//     document.body.appendChild(instance.$el);
//     return instance
// }

let instance = new aConstrucotor({
            data: {
                content: text
            }
        })
        


export default a = {
    install (Vue) {
        instance.$mount()
        document.body.appendChild(instance.$el);
        Vue.component('haha', hahaComponent)
    }
}