<template>
    <div class="container">
        <br><br><br>
        <h2>Misterio del 495 (3 dígitos) || 6174 (4 dígitos)</h2>
        <hr>
        <div class="row">
            <div class="col-6">
                <label for="">Ingresa tu número</label><br>
                <input class="form-control" type="text" v-model="var1" maxlength="4">
            </div>
            <div class="col-6">
                <br>
                <button class="btn btn-outline-primary btn-block" :disabled="var1.length<3||var1.length>5" @click="operacion">Iniciar</button>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <label for="">Logs</label>
                <textarea class="form-control" name="" id="" cols="30" rows="10" v-model="resultado.log" readonly></textarea>
            </div>
            <br>
            <div class="col-12">
                <label for="">Resultado</label><br>
                <input class="form-control" type="text" v-model="resultado.suma" readonly>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Misterio6174',
        data() {
            return {
                var1: '1121',
                log: '',
                contEmergencia: 0,
                resultado: {
                    log: '',
                    suma: 0
                }
            }
        },
        methods: {
            operacion(){
                this.resultado.log = '';
                this.resultado.suma = 0;
                this.magia(this.var1, this.var1.length);
            },
            magia(var1, long){
                this.contEmergencia++;
                var1 = var1 + '';
                var array1 = var1.split('');
                var bandera = true;

                //contar caracteres iguales ninguno debe ser 4 veces iguales
                var arrayCont = [];
                for (let i = 0; i < long; i++) {
                    arrayCont.push(0);
                    for (let j = 0; j < long; j++) {
                        if (array1[i] == array1[j]) {
                            arrayCont[i] ++;
                        }
                    }

                    if (arrayCont[i] == long) {
                        this.resultado.log = 'Número invalido: El número ingresado no debe ser 4 veces igual.'
                        bandera = false;
                    }
                }

                if (bandera && this.contEmergencia<100) {
                    let mayor = this.orderListForMenorMayor(array1, 'mayorAMenor');
                    let menor = this.orderListForMenorMayor(array1, 'menorAMayor');

                    this.resultado.suma = (mayor.length<long?+(mayor+'0'):mayor) - menor;
                    this.resultado.log = this.resultado.log + (this.resultado.log.length==0?'':'\n') + (mayor.length<long?+(mayor+'0'):mayor) + ' - ' + (menor.length<long?('0'+menor):menor) + ' = ' + this.resultado.suma;
                    
                    if (this.resultado.suma != 6174 && this.resultado.suma != 495) {
                        this.magia(this.resultado.suma, long);
                    }
                }


            },
            orderListForMenorMayor(listaOrdenar, operador){
                var temporal = null;
                for (var i = 0;i < listaOrdenar.length; i++){
                    for (var j = 0; j< listaOrdenar.length-1; j++){
                    if (listaOrdenar[j] < listaOrdenar[j+1] && operador === 'mayorAMenor'){
                        temporal = listaOrdenar[j];
                        listaOrdenar[j] = listaOrdenar[j+1];
                        listaOrdenar[j+1] = temporal;
                    }
                    if (listaOrdenar[j] > listaOrdenar[j+1] && operador === 'menorAMayor'){
                        temporal = listaOrdenar[j];
                        listaOrdenar[j] = listaOrdenar[j+1];
                        listaOrdenar[j+1] = temporal;
                    }
                    }
                }
                return listaOrdenar.join('');
                /** mmetodo anterior pero sort no esta soportado para firefox
                 var listaOrdenada = [];
                listaOrdenada = listaOrdenar.sort(function(a, b){
                    if (a.price < b.price && operador === 'menorAMayor') {
                    return -1;
                    }
                    if (a.price > b.price && operador === 'mayorAMenor') {
                    return -1;
                    }
                });
                resolve(listaOrdenada);
                */
                //});
            },
        },
    }
</script>