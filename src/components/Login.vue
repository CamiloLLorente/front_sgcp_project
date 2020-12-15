<template>
  <div class="wraper">
    <div id="login">
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form id="login-form" class="form" v-on:submit.prevent="Login">
                            <h3 class="text-center text-info">Login</h3>
                            <div class="form-group-input">
                              <div class="form-group">
                                  <label for="username" class="text-info">Username:</label><br>
                                  <input type="text" name="username" id="username" class="form-control" v-model="username">
                              </div>
                              <div class="form-group">
                                  <label for="password" class="text-info">Password:</label><br>
                                  <input type="text" name="password" id="password" class="form-control" v-model="password">
                              </div>
                            </div>
                            <div class="form-group">
                                <div class="form-group-submit">
                                  <input type="submit" name="Ingresar" class="btn btn-info btn-md ingresar" value="Ingresar">
                                </div>
                            </div>
                          
                            <div id="register-link" class="text-left mt-1">
                                <router-link to="/register" class="link-registrate">Registrarse</router-link>
                            </div>
                            <div class="alert-danger p-2 text-center" v-if="msgError != ''">
                              {{msgError}}
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
  import LoginVue from './Login.vue';
  export default {
    name: "Login",
    data() {
      return {
        msg: "Welcome to Your Vue.js App",
        username:"",
        password: "",
        error: false,
        msgError:""
      }
    },
    methods:{
      Login(){
        const user={
          "username": this.username,
          "password": this.password
        }
        axios.post("http://127.0.0.1:8000/usuario/login", user)
        .then(data =>{
          const userData ={
            "username": data.data.username,
            "email" : data.data.email

          }
          localStorage.setItem("user",data.data.username)
          this.$router.push('dashboard')
        }).catch(error =>{

            if (error.response){

              this.msgError= error.response.data.detail

            }
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
    background-color: #17a2b8;
    height: 100vh;
  }
  #login-box {
    margin-top: 50px;
    /* max-width: 600px; */
    border: 1px solid #9C9C9C;
    padding:70px 20px;
    background-color: #EAEAEA;
  }
  #login-form {
    padding: 20px;
  }
  #register-link {
    margin-top: -85px;
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
    color:#17a2b8;
  }
  .link-registrate:hover{
    color: #fe6b47;
  }

</style>
