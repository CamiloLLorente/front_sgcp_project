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
  import { mapMutations, mapState } from 'vuex'
  import axios from 'axios'
  export default {
    
  name: "CardTable",
  data(){
    return{
      listaProductos : [],
      montado: false
    }
  },
  computed:{
    ...mapState(['codigoBuscado','porductoAction'])
  },
  methods:{
    ...mapMutations(['changeProductoActionEditar','changeProductoActionNuevo']),
    eliminarProducto(envet){
      const codigo = event.target.parentElement.parentElement.children[0].textContent
      axios.delete(`https://proyecto-sgcp.herokuapp.com/producto/${codigo}`)
      this.changeProductoActionNuevo()
      this.obtenerProductos()
      
    },
    obtenerProductos(){
      axios.get("https://proyecto-sgcp.herokuapp.com/productos")
      .then(data =>{
        this.listaProductos = []
        this.listaProductos = data.data
        console.log(data.data)
      })
    },
    obtenerProducto(value){

      axios.get(`https://proyecto-sgcp.herokuapp.com/producto/${value}`)
        .then(data =>{
          this.listaProductos = []
          this.listaProductos.push(data.data)
          console.log(data.data)
        }).catch(error =>{

            if (error.response){

              console.log(error.response.data.detail)

            }
        })
    }
    
  },

  mounted(){
    this.obtenerProducto("hhh")
    this.obtenerProductos()
    console.log("se monto el componente")
    
  },
  watch:{


    codigoBuscado:function(value) {
      if(value == ""){
        this.obtenerProductos()
      }else{
        this.obtenerProducto(value)
      }
    }
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
  img{
    cursor: pointer;
  }

  
</style>