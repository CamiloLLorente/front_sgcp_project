<template>
  <div class="wraper">
    <div id="login">
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form id="login-form" v-on:submit.prevent="ActualizaProductos">
                            <h3 class="text-center text-info">Actualizar Productos</h3>
                            <div class="form-group-input">
                              <div class="form-group">
                                  <label for="codigo" class="text-info">Codigo:</label><br>
                                  <input type="text" name="codigo" id="codigo" class="form-control" v-model="productoTable.codigo">
                              </div>
                              <div class="form-group">
                                  <label for="nombre" class="text-info">Nombre:</label><br>
                                  <input type="text" name="nombre" id="nombre" class="form-control" v-model="productoTable.nombre">
                              </div>
                              <div class="form-group">
                                  <label for="precio" class="text-info">Precio:</label><br>
                                  <input type="number" name="precio" id="precio" class="form-control" v-model="productoTable.precio">
                              </div>
                              <div class="form-group">
                                  <label for="cantidad" class="text-info">Cantidad:</label><br>
                                  <input type="number" name="cantidad" id="cantidad" class="form-control" v-model="productoTable.cantidad">
                              </div>
                              <div class="form-group">
                                  <label for="seccion" class="text-info">seccion:</label><br>
                                  <input type="seccion" name="text" id="seccion" class="form-control" v-model="productoTable.seccion">
                              </div>
                            </div>
                            <div class="form-group">
                                <div class="form-group-submit">
                                  <input type="submit" name="Actualizar" class="btn btn-info btn-md ingresar" value="Actualizar">
                                </div>
                            </div>
                          
                  
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios'
import { mapState, mapMutations } from 'vuex'

export default {
  name: "EditarProducto",
  data() {
    return {
      username: '',
      nombre: '',
      apellido:'',
      email:'',
      password:''
      
    };
  },
  computed:{
    ...mapState(['productoTable'])
  },
  methods:{
    ...mapMutations(['changeProductoActionHome']),
    ActualizaProductos(){
      axios.put(`https://proyecto-sgcp.herokuapp.com/producto/${this.productoTable.codigo}`, this.productoTable)
      .then(data =>{
        console.log(data.data)
        this.changeProductoActionHome()
        
      }).catch(error =>{

          if (error.response){

            console.log(error.response.data.detail)
          }
      })

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  #login-box {
    margin-top: 20px;
    /* max-width: 600px; */
    border: 1px solid #9C9C9C;
    background-color: #EAEAEA;
  }
  #login-form {
    padding: 20px;
  }
  #register-link {
    margin-top: -29px;
  }
  .form-group-input{
    margin-bottom: 30px;
  }
  .form-group-submit{
    display: flex;
    margin-top: 20px;
    justify-content: center;
  }
  .ingresar{
    background: #fe6b47;
    color:#e0e0e0;
    border: 1px solid #fe6b47;
  }
  .ingresar:hover{
    background: #d34d2c;
    border: 1px solid #fe6b47;
  }
 

</style>