<template>
  <div class="card">
    <div class="card-header">
      
      <h3><b-icon icon="search" class="mr-1"></b-icon>Productos</h3>
    </div>
    <div class="card-seccion">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Codigo</th>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Sección</th>
            <th scope="col">Editar</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="producto in listaProductos" :key="producto.codigo">
            <th scope="row">{{producto.codigo}}</th>
            <td>{{producto.nombre}}</td>
            <td>{{producto.precio}}</td>
            <td>{{producto.cantidad}}</td>
            <td>{{producto.seccion}}</td>
            <td>
              
                <!-- <img src="@/assets/editar-icon.svg" width="40px" @click="changeProductoActionEditar($event)"/> -->
                <img src="@/assets/editar-icon.svg" width="40px" @click="changeProductoActionEditar($event)"/>
              
            </td>
            <td>
              
                <img src="@/assets/eliminar-icon.svg" width="40px" @click="eliminarProducto($event)" />
            
            </td>
            
          </tr>

        </tbody>
      </table>
    </div>
    
    
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import axios from 'axios'
  export default {
    
  name: "CardTable",
  data(){
    return{
      listaProductos : []
    }
  },
  methods:{
    ...mapMutations(['changeProductoActionEditar']),
    eliminarProducto(envet){
      console.log(envet.target)
    }
    
  },
  mounted(){

    axios.get("http://127.0.0.1:8000/productos")
    .then(data =>{
      this.listaProductos = data.data
    })
    
  }


  
};
</script>

<style scoped>
  .card{
    border: 1px solid #c8d5dd;
    -webkit-box-shadow: 0px 2px 2px 1px rgba(0,0,0,0.035);
    -moz-box-shadow: 0px 2px 2px 1px rgba(0,0,0,0.035);
    box-shadow: 0px 2px 2px 1px rgba(0,0,0,0.035);
  
  }
  .card-header{
    background:#3c8dbc;
    padding: 3px;
    
  }
  h3{
    font-size:1rem;
    margin: 0;
    color:whitesmoke;
    margin-left:5px ;
  }
  

  
</style>