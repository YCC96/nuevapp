<template>
    <div class="container">
        <br><br><br>
        <div class="jumbotron">
            <h1>Conversor de unidades</h1>
            <hr class="my-4">
            <div class="row">
                <div class="col-5">
                    <input class="form-control" type="text" v-model="var1" @keyup="convertir1">
                    <select class="form-control" v-model="selectUM1" @change="convertir1">
                        <option v-for="(medida, index) in unidadesMedida" :key="'opt1' + index" :value="medida.id">{{medida.descripcion}} ({{medida.unidad}})</option>
                    </select>
                </div>
                <div class="col-2">
                    <div class="text-center">
                        <br>
                        <label for="">=</label>
                    </div>
                </div>
                <div class="col-5">
                    <input class="form-control" type="text" v-model="var2" @blur="convertir1">
                    <select class="form-control" v-model="selectUM2" @change="convertir1">
                        <option v-for="(medida, index) in unidadesMedida" :key="'opt2' + index" :value="medida.id">{{medida.descripcion}} ({{medida.unidad}})</option>
                    </select>
                </div>
            </div>        
        </div>

        <br>
        <br>
        <br>
        <div class="jumbotron">
            <h1>Conversor CSV to JSON</h1>
            <hr class="my-4">
            <div class="row">
                <div class="col">
                    <input class="form-control" type="file" name="" id="file">
                </div>
                <div class="col">
                    <button class="btn btn-outline-primary" @click="convertCsvToJson()">Convertir</button>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col">
                    <label for="">Ingresa los nodos</label>
                    <input class="form-control" type="text" v-model="headersCsvToJson">
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col">
                    <textarea class="form-control" v-model="dataCsvToJson" cols="30" rows="10"></textarea>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col">
                    <textarea class="form-control" v-model="dataCsv" cols="30" rows="10"></textarea>
                </div>
            </div>
        </div>
        <br>
        <br>
        <br>
        <div class="jumbotron">
            <h1>Conversor CSV to JSON pryect verbs english</h1>
            <hr class="my-4">
            <div class="row">
                <div class="col">
                    <input class="form-control" type="file" name="" id="file1">
                </div>
                <div class="col">
                    <button class="btn btn-outline-primary" @click="convertCsvToJson1()">Convertir</button>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col">
                    <label for="">Ingresa los nodos</label>
                    <input class="form-control" type="text" v-model="headersCsvToJson1">
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col">
                    <textarea class="form-control" v-model="dataCsvToJson1" cols="30" rows="10"></textarea>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col">
                    <textarea class="form-control" v-model="dataCsv1" cols="30" rows="10"></textarea>
                </div>
            </div>
        </div>
        <br>
    </div>
</template>

<script>
    import * as globalFunctions from '../utils/GlobalFunctions';

    export default {
      name:'Conversor',
      data() {
          return {
            globalFunctions: globalFunctions,
            dataCsvToJson: '',
            headersCsvToJson: 'id,espanol,ingles,presente,persona3,pasado,participio,formaIng,type',
            dataCsv: '',
            dataCsvToJson1: '',
            headersCsvToJson1: 'id,espanol,presente,persona3,pasado,futuro,participio,formaIng,type',
            dataCsv1: '',
            selectUM1: '',
            selectUM2: '',
            var1: '',
            var2: '',
            unidadesMedida: [
                {
                    id: 0,
                    unidad: 'in',
                    descripcion: 'pulgadas'
                },
                {
                    id: 1,
                    unidad: 'ft',
                    descripcion: 'pies'
                },
                {
                    id: 2,
                    unidad: 'yd',
                    descripcion: 'yardas'
                },
                {
                    id: 3,
                    unidad: 'mm',
                    descripcion: 'milímetros'
                },
                {
                    id: 4,
                    unidad: 'cm',
                    descripcion: 'centímetros'
                },
                {
                    id: 5,
                    unidad: 'dm',
                    descripcion: 'decímetros'
                },
                {
                    id: 6,
                    unidad: 'km',
                    descripcion: 'kilómetro'
                },
                {
                    id: 7,
                    unidad: 'm',
                    descripcion: 'metro'
                },
                {
                    id: 8,
                    unidad: 'mi',
                    descripcion: 'milla'
                },
                {
                    id: 9,
                    unidad: '--',
                    descripcion: 'rods'
                },
                {
                    id: 10,
                    unidad: '--',
                    descripcion: 'furlongs'
                }
            ],
            equivalencias: [
                {
                    id: 7,
                    value: 1,
                    equiv: [
                        {
                            id: 0,
                            value: '39.37'
                        },
                        {
                            id: 1,
                            value: '3.28083'
                        },
                        {
                            id: 2,
                            value: '1.09361'
                        },
                        {
                            id: 3,
                            value: '1000'
                        },
                        {
                            id: 4,
                            value: '100'
                        },
                        {
                            id: 5,
                            value: '10'
                        },
                        {
                            id: 6,
                            value: '0.001'
                        }
                    ]

                },
                {
                    id: 4,
                    value: 1,
                    equiv: [
                        {
                            id: 0,
                            value: '0.3937'
                        },
                        {
                            id: 1,
                            value: '0.0328083'
                        },
                        {
                            id: 3,
                            value: '10'
                        },
                        {
                            id: 7,
                            value: '0.01'
                        }
                    ]

                },
                {
                    id: 5,
                    value: 1,
                    equiv: [
                        {
                            id: 5,
                            value: '1'
                        },
                        {
                            id: 0,
                            value: '3.937008'
                        }
                    ]

                },
                {
                    id: 3,
                    value: 1,
                    equiv: [
                        {
                            id: 0,
                            value: '0.03937'
                        },
                        {
                            id: 7,
                            value: '0.001'
                        },
                        {
                            id: 4,
                            value: '0.1'
                        }
                    ]

                },
                {
                    id: 6,
                    value: 1,
                    equiv: [
                        {
                            id: 1,
                            value: '3280.83'
                        },
                        {
                            id: 2,
                            value: '1093.61'
                        },
                        {
                            id: 8,
                            value: '0.62137'
                        },
                        {
                            id: 7,
                            value: '1000'
                        }
                    ]

                },
                {
                    id: 0,
                    value: 1,
                    equiv: [
                        {
                            id: 0,
                            value: '1'
                        },
                        {
                            id: 1,
                            value: '0.833'
                        },
                        {
                            id: 2,
                            value: '0.022777'
                        },
                        {
                            id: 4,
                            value: '2.54'
                        },
                        {
                            id: 3,
                            value: '25.4'
                        },
                        {
                            id: 5,
                            value: '0.254'
                        },
                        {
                            id: 6,
                            value: '0.0000254'
                        }
                    ]

                },
                {
                    id: 1,
                    value: 1,
                    equiv: [
                        {
                            id: 0,
                            value: '12'
                        },
                        {
                            id: 2,
                            value: '0.33333'
                        },
                        {
                            id: 7,
                            value: '0.3048'
                        },
                        {
                            id: 4,
                            value: '30.48'
                        }
                    ]

                },
                {
                    id: 2,
                    value: 1,
                    equiv: [
                        {
                            id: 0,
                            value: '36'
                        },
                        {
                            id: 1,
                            value: '3'
                        },
                        {
                            id: 8,
                            value: '0.9144'
                        },
                        {
                            id: 4,
                            value: '91.44'
                        }
                    ]

                },
                {
                    id: 8,
                    value: 1,
                    equiv: [
                        {
                            id: 1,
                            value: '5280'
                        },
                        {
                            id: 2,
                            value: '1760'
                        },
                        {
                            id: 9,
                            value: '320'
                        },
                        {
                            id: 10,
                            value: '8'
                        },
                        {
                            id: 7,
                            value: '1609.35'
                        },
                        {
                            id: 6,
                            value: '1.60935'
                        }
                    ]

                }
            ],
            unidadesPeso: [
                {
                    id: 1,
                    unidad: '',
                    descripcion: ''
                },
                {
                    unidad: '',
                    descripcion: ''
                },
                {
                    unidad: '',
                    descripcion: ''
                },
                {
                    unidad: '',
                    descripcion: ''
                },
                {
                    unidad: '',
                    descripcion: ''
                },
                {
                    unidad: '',
                    descripcion: ''
                },
            ]
          }
      },
      created(){
          this.var1 = 1;
          this.selectUM1 = 7
          this.var2 = 100;
          this.selectUM2 = 4;
      },
      methods: {
        convertir1(){
        console.log('*_*: ', this.selectUM1, this.selectUM2, this.equivalencias);
            
        try {
            var a = this.equivalencias.filter(equiv => {
                let l = equiv.id + '';
                return l.includes(this.selectUM1);
            });

            var aa = a[0].equiv.filter(equiv => {
                let l = equiv.id + '';
                return l.includes(this.selectUM2);
            });

            this.var2 = this.var1 * +aa[0].value;
        
        } catch (error) {
            console.log('*_* error: ', error);
            this.var2 = '-----';
            //this.selectUM2 = '-';
        }
        
        },
        convertCsvToJson(){
            var files = document.getElementById('file')
            var file = files.files[0];
            console.log('*_*: ', file);
            this.readFile(file).then(data => {
                //let listHeaders = ['id','espanol','ingles','presente', 'persona3', 'pasado', 'participio', 'infinitivo', 'tipo'];headersCsvToJson
                this.dataCsv = data;
                let listHeaders = this.headersCsvToJson.split(',');
                this.dataCsvToJson = JSON.stringify(this.globalFunctions.csvToJson(data, listHeaders), undefined, 4);
                console.log('*_* read: ', data, this.dataCsvToJson);
            });

        },
        convertCsvToJson1(){
            var files = document.getElementById('file1')
            var file = files.files[0];
            console.log('*_*: ', file);
            this.readFile(file).then(data => {
                //let listHeaders = ['id','espanol','ingles','presente', 'persona3', 'pasado', 'participio', 'infinitivo', 'tipo'];headersCsvToJson
                this.dataCsv1 = data;
                let listHeaders = this.headersCsvToJson1.split(',');
                this.dataCsvToJson1 = JSON.stringify(this.globalFunctions.csvToJson(data, listHeaders), undefined, 4);
                console.log('*_* read: ', data, this.dataCsvToJson1);
            });

        },
        readFile(file) {
            return new Promise ((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = function() {
                    resolve(reader.result);
                }
                reader.readAsText(file);
            });
        }
      },
    }
</script>

<style>
    
</style>