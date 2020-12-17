<template>
  <div class="card">
    <div class="card-header">      
      <h3><b-icon icon="search" class="mr-1"></b-icon>Buscar Productos</h3>
    </div>
    <div class="d-flex justify-content-end mr-4 mt-2">
      <img src="@/assets/agragar-icon.svg" width="40px" @click="changeProductoActionAgregar"/>
    </div>
    <div class="card-seccion">
      
      <form action="">
        <div class="input-group mt-3">
          <div class="input-group-prepend">
            <label class="input-group-text input-size" for="inputGroupSelect01">Buscar Por:</label>
          </div>
          <select class="custom-select input-size p-0" id="inputGroupSelect01">
            <option selected >Codigo</option>
            
          </select>
        </div>
        <div class="input-group mt-3 ">
          <input type="text" class="form-control input-size" aria-label="Recipient's username" aria-describedby="basic-addon2" v-model="codigo" >
          <div class="input-group-append">
            <button class="btn btn-outline-secondary btn-search btn-size" type="button" @click="buscarProductos(codigo)">Buscar</button>
          </div>
        </div>
      </form>
    </div>
    
    
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  
  name: "Card",
  data(){
    return{
      codigo: ''
    }
  },
  methods:{
    ...mapMutations(['changeProductoActionAgregar','buscarProductos'])
    
  }, 
  watch:{
    codigo:function(value) {
      this.buscarProductos(this.codigo)
    }
  }
  

  
};
</script>

<style scoped>
  .card{
    border: 1px solid #c8d5dd;
    margin: 15px 0;
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
  .card-seccion{
    padding: 20px 15%;
    
  }
  form{
    display: flex;
    justify-content:center ;
  }
  .btn-search{
    background: #fe6b47;
    border: 1px solid #fe6b47;
    color:#e0e0e0;
  }
  .input-group{
    padding: 0 20px;
    box-sizing: border-box;
  }
  .input-size{
    height: 25px;
  }
  .btn-size{
    height: 25px;
    padding: 0 15px;
  }
  option{
    font-size: 15px;
  }
  img{
    cursor: pointer;
  }
</style>