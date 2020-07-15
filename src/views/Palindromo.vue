<template>
    <div class="container">
        <br><br><br>
        <h2>Palíndromo</h2>
        <hr>
        <div class="row">
            <div class="col-6">
                <label for="">Ingresa tu frase</label><br>
                <input class="form-control" type="text" v-model="var1">
            </div>
            <div class="col-6">
                <br>
                <button class="btn btn-outline-primary btn-block" @click="operacion">Iniciar</button>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <label for="">Ejemplos</label>
                <textarea class="form-control" cols="30" rows="11" v-model="ejemplos" readonly></textarea>
            </div>
            <div class="col-12">
                <label for="">Logs</label>
                <textarea class="form-control" cols="30" rows="20" v-model="log" readonly></textarea>
            </div>
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
                var1: 'Anita lava la tina',
                log: '',
                resultado: '',
                ejemplos: 'Anita lava la tina\nSometamos o matemos\nYo dono rosas, oro no doy\nIsaac no ronca asi\nLavan esa base naval\nNo traces en ese carton\nSera lodo o dolares\nEva usaba rimel y le miraba suave\nAmo la pacifica paloma\na ti te toco tetita\nAnita la gorda lagarta traga la droga latina'
            }
        },
        methods: {
            operacion(){
                this.log = '';
                this.resultado = 'Es palíndromo';
                var arrayFrase = this.var1.replace(/[ ,]/g, '').toLowerCase().split('');
                var contFinal = arrayFrase.length;
                for (let i = 0; i < arrayFrase.length; i++) {
                    this.log = this.log + (this.log.length==0?'':'\n') + 'Letra a comparar: ' + arrayFrase[i] + ' - ' + arrayFrase[contFinal-1];
                    if (arrayFrase[i] != arrayFrase[contFinal-1]) {
                        this.resultado = 'No es palíndromo';
                    }
                    contFinal--;
                }
            }
        },
    }
</script>