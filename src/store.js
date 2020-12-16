import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({

    state:{
        porductoAction: 'home',
        productoTable:{
            codigo:'',
            nombre:'',
            precio:0,
            cantidad:0,
            seccion:''
        }
    },
    mutations:{
        changeProductoActionEditar(state, $event){
            state.porductoAction = "editar";
            state.productoTable.codigo = $event.target.parentElement.parentElement.children[0].textContent
            state.productoTable.nombre = $event.target.parentElement.parentElement.children[1].textContent
            state.productoTable.precio = $event.target.parentElement.parentElement.children[2].textContent
            state.productoTable.cantidad = $event.target.parentElement.parentElement.children[3].textContent
            state.productoTable.seccion = $event.target.parentElement.parentElement.children[4].textContent
            
        },
        changeProductoActionHome(state){
            state.porductoAction = 'home';
        },
        changeProductoActionAgregar(state){
            state.porductoAction = 'agregar';
        }
    }

})