<template>
    <div class="container">
        <br><br><br>
        <h1>Calculadora con VUEX</h1>
        <hr>
        <div class="row">
            <div class="col-4">
                <label for="numero1">Número 1</label><br>
                <input class="form-control" type="number" v-model="numero1">
                <br><br>
                <label for="numero2">Número 2</label><br>
                <input class="form-control" type="number" v-model="numero2">
            </div>
            <div class="col-4">
                <br>
                <button class="btn btn-outline-primary btn-block" @click="operacion(1)">Suma</button><br>
                <button class="btn btn-outline-primary btn-block" @click="operacion(2)">Resta</button><br>
                <button class="btn btn-outline-primary btn-block" @click="operacion(3)">Multiplicación</button><br>
                <button class="btn btn-outline-primary btn-block" @click="operacion(4)">División</button><br>
            </div>
            <div class="col-4">
                <CalculadoraResult></CalculadoraResult>
            </div>
        </div>        
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    import CalculadoraResult from './CalculadoraResult.vue';

    export default {
        name: 'Calculadora',
        components: {
            CalculadoraResult
        },
        data: () => {
            return {
                numero1: 6,
                numero2: 5,
                result: 0
            }
        },
        methods: {
            ...mapMutations(['setResultado']),
            operacion(op){
                switch (op) {
                    case 1:
                        this.result = +this.numero1 + +this.numero2;
                        break;
                    case 2:
                        this.result = +this.numero1 - +this.numero2;
                        break;
                    case 3:
                        this.result = +this.numero1 * +this.numero2;
                        break;
                    case 4:
                        this.result = +this.numero1 / +this.numero2;
                        break;
                }
                //this.setResultado(this.result);
                this.$store.commit('setResultado', this.result);
            }
        },
    }
</script>