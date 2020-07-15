<template>
    <div class="container">
        <br><br><br>
        <h2>Serie de Fibonacci</h2>
        <hr>
        <div class="row">
            <div class="col-6">
                <label for="">Longitud</label><br>
                <input class="form-control" type="text" v-model="longitud">
            </div>
            <div class="col-6">
                <br>
                <button class="btn btn-outline-primary btn-block" :disabled="longitud<3" @click="operacion">Iniciar</button>
            </div>
        </div>
        <div class="row">
            <br>
            <div class="col-12">
                <label for="">Resultado</label><br>
                <input class="form-control" type="text" v-model="resultado" readonly>
            </div>
        </div>
        <br><br><br>
    </div>
</template>

<script>
    export default {
        name: 'Palindromo',
        data() {
            return {
                longitud: '3',
                resultado: ''
            }
        },
        methods: {
            operacion(){
                var long = this.longitud - 2;
                var arrayFibo = [0, 1];
                
                for (let i = 0; i < long; i++) {
                    arrayFibo.push(arrayFibo[i] + arrayFibo[i+1]);
                }
                this.resultado = arrayFibo.join(', ');
            }
        },
    }
</script>