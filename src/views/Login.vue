<template>
    <div class="container">
        <br><br><br>
        <h1>Iniciar Sesión</h1>
        <hr>
        <div class="">
            <div class="col">
                <label for="numero1">Usuario</label><br>
                <input class="form-control" type="text" v-model="form.user">
            </div>
            <div class="col">
                <br>
                <label for="numero2">Password</label><br>
                <input class="form-control" type="text" v-model="form.password">

            </div>
            <div class="col">
                <br><br>
                <button class="btn btn-outline-primary btn-block" @click="login()">Login</button><br>
            </div>
        </div>        
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Login',
    data: () => {
        return {
            form: {
                user: '',
                password: ''
            }
        }
    },
    methods: {
        login(){
            
            const urlService = 'http://localhost:8080/hi'
            axios({
                headers: {
                    "Content-Type": "application/json",
                    //'Authorization': 'Bearer ' + token,
                    //"Accept-Language": language
                },
                method: "get",
                url: urlService,
                //data: JSON.stringify(data)
                })
                .then(res => {
                    console.log('*_* res: ', res);
                })
                .catch(error => {
                    console.log('*_* error: ', error);
                });
        }
    }
}
</script>