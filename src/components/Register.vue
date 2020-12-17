<template>
  <div class="wraper">
    <div id="login">
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form id="login-form" v-on:submit.prevent="Registro">
                            <h3 class="text-center text-info">Registro</h3>
                            <div class="form-group-input">
                              <div class="form-group">
                                  <label for="username" class="text-info">Username:</label><br>
                                  <input type="text" name="username" id="username" class="form-control" v-model="username">
                              </div>
                              <div class="form-group">
                                  <label for="nombre" class="text-info">Nombre:</label><br>
                                  <input type="text" name="nombre" id="nombre" class="form-control" v-model="nombre">
                              </div>
                              <div class="form-group">
                                  <label for="apellido" class="text-info">Apellido:</label><br>
                                  <input type="text" name="apellido" id="apellido" class="form-control" v-model="apellido">
                              </div>
                              <div class="form-group">
                                  <label for="email" class="text-info">email:</label><br>
                                  <input type="email" name="email" id="email" class="form-control" v-model="email">
                              </div>
                              <div class="form-group">
                                  <label for="password" class="text-info">Password:</label><br>
                                  <input type="password" name="password" id="password" class="form-control" v-model="password">
                              </div>
                            </div>
                            <div class="form-group">
                                <div class="form-group-submit">
                                  <input type="submit" name="Ingresar" class="btn btn-info btn-md ingresar" value="Ingresar">
                                </div>
                            </div>
                          
                            <div id="register-link" class="text-left mt-1">
                                <router-link to="/" class="link-registrate">Iniciar Sesión</router-link>
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
export default {
  name: "Login",
  data() {
    return {
      username: '',
      nombre: '',
      apellido:'',
      email:'',
      password:''
      
    };
  },
  methods:{
    Registro(){
      const usuario = {
        "username": this.username,
        "nombre": this.nombre,
        "apellido": this.apellido,
        "email": this.email,
        "password": this.password

      }
      axios.post("https://proyecto-sgcp.herokuapp.com/usuario/nuevo",usuario)
      .then(data =>{
        localStorage.setItem("user",data.data.username)
        this.$router.push('dashboard')
      })

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wraper{
    margin: 0;
    padding: 0;
    background:#3c8dbc;
    height: 100vh;
    color:#3c8dbc;
  }
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
  .link-registrate{
    color:#3c8dbc;
  }
  .link-registrate:hover{
    color: #fe6b47;
  }

</style>
