<template>
    <div class="container">
        <hr>
        <h1>Ejemplos de funciones globales</h1>

        <hr>
        <hr>

        <h2>UPPERCASE</h2>
        <div class="row">
            <div class="col-4">
                <label for="">Con style</label><br>
                <input class="form-control upperCase" type="text" placeholder="Uppercase">
            </div>
            <div class="col-4">
                <label for="">Con v-directive</label><br>
                <input class="form-control" type="text" placeholder="Uppercase" v-model="vUpper" v-uppercase>
            </div>
            <div class="col-4">
                <label for="">Con JS</label><br>
                <input class="form-control" type="text" placeholder="Uppercase" v-model="vUpperJS" @input="upperCase">
            </div>
        </div>

        <hr>
        <hr>

        <h2>lowercase</h2>
        <div class="row">
            <div class="col-4">
                <label for="">Con style</label><br>
                <input class="form-control lowerCase" type="text" placeholder="Lowercase">
            </div>
            <div class="col-4">
                <label for="">Con v-directive</label><br>
                <input class="form-control" type="text" placeholder="Lowercase" v-model="vLower" v-lowercase>
            </div>
            <div class="col-4">
                <label for="">Con JS</label><br>
                <input class="form-control" type="text" placeholder="Lowercase" v-model="vLowerJS" @input="lowerCase">
            </div>
        </div>

        <hr>
        <hr>

        <h2>SIMBOLOS</h2>
        <div class="row">
            <div class="col-4">
                <label for="">Con JS %</label><br>
                <input class="form-control" type="text" placeholder="%" v-model="var1" @keyup="maskPercent($event)">
            </div>
            <div class="col-4">
                <label for="">Con JS $</label><br>
                <input class="form-control" type="text" placeholder="$" v-model="var2" @keyup="maskDollars()">
            </div>
            <div class="col-4">
                <label for="">Con JS Mask $</label><br>
                <input class="form-control" type="text" placeholder="$" v-model="var2Mask" readonly>
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <label for="">Con JS / solo numeros</label><br>
                <input class="form-control" type="text" placeholder="##/####" v-model="varFecha" @keyup="maskOnlyNumbers($event)">
            </div>
            <div class="col-4">
                <label for="">Con JS / fecha expiración TC o Token</label><br>
                <input class="form-control" type="text" placeholder="MM/YYYY" v-model="varFecha1" @keyup="maskFecha($event)">
            </div>
            <div class="col-4">
                <label for="">Resultado fecha expiración TC o Token</label><br>
                <input class="form-control" type="text" v-model="resultVarFecha1" readonly>
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <label for="">Mask phone number</label><br>
                <input class="form-control" type="text" v-model="varMaskPhone" name="maskPhone" data-format="(***) ***-****" data-mask="(###) ###-####">
            </div>
            <div class="col-4">
                <label for="">Mask date</label><br>
                <!--
                <input class="form-control" type="text" v-model="varMaskDate" name="maskDate" data-format-d="**/****" data-mask-d="##/####">
                    -->
            </div>
            <div class="col-4">
                <label for="">bbbb</label><br>
                <input class="form-control" type="text">
            </div>
        </div>

        <hr>
        <hr>

        <h2>Validations</h2>
        <h3>v-directive</h3>
        <div class="row">
            <div class="col-4">
                <label for="">Números</label><br>
                <input class="form-control" type="text" placeholder="Números" v-model="onlyNumbers" v-onlyNumbers>
            </div>
            <div class="col-4">
                <label for="">Texto</label><br>
                <input class="form-control" type="text" placeholder="Letras" v-model="onlyText" v-onlyText>
            </div>
            <div class="col-4">
                <label for="">Alphanumeric</label><br>
                <input class="form-control" type="text" placeholder="Alphanumeric" v-model="onlyAlphanumeric" v-alphanumeric>
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <label for="">Alphanumeric Address</label><br>
                <input class="form-control" type="text" placeholder="Números" v-model="onlyAlphanumericAddres" v-alphanumericAddress>
            </div>
            <div class="col-4">
                <label for="">Email</label><br>
                <input class="form-control" type="text" placeholder="Email" v-model="email" v-email>
            </div>
            <div class="col-4">
                <label for=""></label><br>
                <input class="form-control" type="text" placeholder="">
            </div>
        </div>

        <hr>

        <h3>JS</h3>
        <div class="row">
            <div class="col-4">
                <label for="">Números</label><br>
                <input class="form-control" type="text" placeholder="Números" v-model="onlyNumbersJS" @keyup="onlyNumberJS">
            </div>
            <div class="col-4">
                <label for="">Texto</label><br>
                <input class="form-control" type="text" placeholder="Letras" v-model="onlyTextJS">
            </div>
            <div class="col-4">
                <label for="">Alphanumeric</label><br>
                <input class="form-control" type="text" placeholder="Alphanumeric" v-model="onlyAlphanumericJS" @keyup="onlyAlphanumericJSF">
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <label for="">Números</label><br>
                <input class="form-control" type="text" placeholder="Números" v-model="onlyAlphanumericAdressJS" @keyup="onlyAlphanumericAdressJSF">
            </div>
            <div class="col-4">
                <label for="">Sin espacios al inicio</label><br>
                <input class="form-control" type="text" v-model="withoutSpaceInit">
            </div>
            <div class="col-4">
                <label for="">Sin espacios al inicio y al final</label><br>
                <input class="form-control" type="text" v-model="withoutSpaceIF">
            </div>
        </div>
        <hr>
        <hr>

        <h3>Ejercicios</h3>
        <h4>MOD %</h4>
        <div class="row">
            <div class="col-4">
                <label for="">Número 1</label><br>
                <input class="form-control" type="number" placeholder="Número 1" v-model="numero1" @keyup="operacion1">
            </div>
            <div class="col-4">
                <label for="">Número 2</label><br>
                <input class="form-control" type="number" placeholder="Número 2" v-model="numero2"  @keyup="operacion1">
            </div>
            <div class="col-4">
                <label for="">Resultado</label><br>
                <input class="form-control" type="text" placeholder="Resultado" v-model="resultado1" readonly>
            </div>
        </div>
        <hr>
        <h4>Par o impar con MOD %</h4>
        <div class="row">
            <div class="col-4">
                <label for="">Número evaluar</label><br>
                <input class="form-control" type="number" placeholder="Número" v-model="numero3" @keyup="operacion2">
            </div>
            <div class="col-4">
                <label for="">Resultado</label><br>
                <input class="form-control" type="text" placeholder="Resultado" v-model="resultado2" readonly>
            </div>
            <div class="col-4">
            </div>
        </div>

        <br><br>
        <hr>
        <hr>

        <h3>B64</h3>
        <h4>Covertir</h4>
        <div class="row">
            <div class="col-12">
                <label for="">Texto</label><br>
                <input class="form-control" type="text" placeholder="Texto" v-model="textConvert" @keyup="covertB64">
            </div>
        </div><br>
        <div class="row">
            <div class="col-12">
                <textarea class="form-control" v-model="resultConvertb64" cols="30" rows="2" readonly></textarea>
            </div>
        </div>

        <hr>

        <h4>Revertir</h4>
        <div class="row">
            <div class="col-12">
                <label for="">B64</label><br>
                <input class="form-control" type="text" placeholder="Texto" v-model="textRevert" @keyup="revertB64">
            </div>
        </div><br>
        <div class="row">
            <div class="col-12">
                <textarea class="form-control" v-model="resultRevertb64" cols="30" rows="2" readonly></textarea>
            </div>
        </div>

        <br><br>
        <hr>

        <h4>Imagen</h4><br>
        <div class="row">
            <div class="col-6">
                <input type="file" id="file1" accept=".png, .jpeg, .docx, .doc, .pdf">
            </div>
            <div class="col-6">
                <button class="btn btn-outline-primary btn-block" @click="imagenB64">Convertir</button>
            </div>
        </div><br>
        <div class="row">
            <div class="col-12">
                <textarea class="form-control" v-model="resultFile1" cols="30" rows="10" ></textarea>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <img v-if="banban" style="width:100%" :src="resultFile1" alt="">
                <embed v-if="banban" style="width:100%; height:500px" :src="resultFile1" type="">
            </div>
        </div>

        <br><br>
        <hr>
        <hr>

        <h4>Crypto SecureLS</h4><br>
        <div class="row">
            <div class="col-12">
                <label for="">Texto convertir</label>
                <input class="form-control" type="text" v-model="textConverSecureLs">
            </div>
        </div><br>
        <div class="row">
            <div class="col-6">
                <button class="btn btn-outline-success btn-lg btn-block" @click="securels">SecureLS</button>
            </div>
            <div class="col-6">
                <button class="btn btn-outline-secondary btn-lg btn-block" @click="clean">Limpiar</button>
            </div>
        </div><br>
        <div class="row">
            <div class="col-12">
                <label for="">des</label><br>
                <textarea class="form-control" v-model="resultSecure1" cols="30" rows="2" readonly></textarea>
            </div>
        </div><br>

        <div class="row">
            <div class="col-12">
                <label for="">aes</label><br>
                <textarea class="form-control" v-model="resultSecure2" cols="30" rows="2" readonly></textarea>
            </div>
        </div><br>

        <div class="row">
            <div class="col-12">
                <label for="">rc4</label><br>
                <textarea class="form-control" v-model="resultSecure3" cols="30" rows="2" readonly></textarea>
            </div>
        </div><br>

        <div class="row">
            <div class="col-12">
                <label for="">des</label><br>
                <textarea class="form-control" v-model="resultSecure4" cols="30" rows="2" readonly></textarea>
            </div>
        </div><br>

        <div class="row">
            <div class="col-12">
                <label for="">b64</label><br>
                <textarea class="form-control" v-model="resultSecure5" cols="30" rows="2" readonly></textarea>
            </div>
        </div><br>

        <br><br>
        <hr>
        <hr>

        <h3>Fechas</h3>
        <h4>Vue2-Datepicker</h4><br>
        <div class="row">
            <div class="col-6">
                <label for="">{{(formatFecha==formatES?'ES':'EN')}}</label><br>
                <Datepicker style="width:100%" v-model="datePicker1" :format="formatFecha"></Datepicker><!--:lang="lang"-->
            </div>
            <div class="col-6">
                <label for=""></label><br>
                <button class="btn btn-outline-warning btn-block" @click="camFormatDP">Cambia formato</button>
            </div>
        </div><br>
        <div class="row">
            <div class="col-12">
                <button class="btn btn-outline-danger btn-block" @click="beautiDate">Beautiful date</button>
            </div>
        </div><br>
        <div class="row">
            <div class="col-6">
                <label for="">Ugly date</label><br>
                <input class="form-control" type="text" v-model="datePicker1" readonly>
            </div>
            <div class="col-6">
                <label for="">Beautiful date</label><br>
                <input class="form-control" type="text" v-model="beautifulDate" readonly>
            </div>
        </div>
        <br><br>

        <h4>Input html5</h4>
        <div class="row">
            <div class="col-12">
                <input class="form-control" data-date-format="DD-YYYY-MM" type="date">
            </div>
        </div>

        <br><br>
        <hr>
        <hr>
    </div>
</template>

<script>
    import * as globalFunctions from '../utils/GlobalFunctions';
    import SecureLS from 'secure-ls';
    import Datepicker from 'vue2-datepicker';
    import 'vue2-datepicker/index.css';
    import maskFuntion from '../js/Mask';

    export default {
        name: 'GlobalFunctions',
        components: {
            Datepicker
        },
        data() {
            return {
                varFecha: '',
                varFecha1: '',
                resultVarFecha1: '',
                beautifulDate: '',
                formatFecha: 'DD/MM/YYYY',
                formatES: 'DD/MM/YYYY',
                formatEN: 'MM/DD/YYYY',
                lang: {
                    formatLocale: {
                        //MMMM
                        months: ['aaa', 'eee', 'iii', 'ooo', 'uuuu', 'sdfghj', 'nbvcx', 'qqqq', 'fgb', 'October', 'November', 'December'],
                        firstDayOfWeek: 1,
                    },
                    monthBeforeYear: false,
                },
                datePicker1: '',
                datePicker2: '',
                banban: false,
                ls: new SecureLS({encodingType: 'aes'}),
                textConverSecureLs: '',
                resultSecure1: '',
                resultSecure2: '',
                resultSecure3: '',
                resultSecure4: '',
                resultSecure5: '',
                resultFile1: '',
                textConvert: '',
                resultConvertb64: '',
                textRevert: '',
                resultRevertb64: '',
                globalFunctions: globalFunctions,
                vUpper:'',
                vUpperJS:'',
                vLower:'',
                vLowerJS:'',
                var1: '',
                var2: '',
                var2Mask: '',
                onlyNumbers: '',
                onlyNumbersJS: '',
                onlyText: '',
                onlyTextJS: '',
                onlyAlphanumeric: '',
                onlyAlphanumericJS: '',
                onlyAlphanumericAddres: '',
                onlyAlphanumericAdressJS:'',
                email: '',
                numero1: 0,
                numero2: 0,
                resultado1: 0,
                numero3: 0,          
                resultado2: '',
                withoutSpaceInit: '',
                withoutSpaceIF: '',
                varMaskPhone: '',
                varMaskDate: '',
            }
        },
        mounted(){
            this.initMask();
        },
        methods: {
            initMask(){
                const mask = document.querySelectorAll('[data-mask]');
                console.log('*_* maask: ', mask);
                maskFuntion(mask, 'data-format', 'data-mask');
            },
            maskOnlyNumbers(e){
                this.varFecha = this.globalFunctions.maskOnlyNumbers(e, this.varFecha, '/');
            },
            maskFecha(e){
                var resp = this.globalFunctions.maskFecha(e, this.varFecha1, '/', 10);
                this.varFecha1 = resp.fecha;
                this.resultVarFecha1 = resp.tipoError + ' : ' + resp.banDate;
            },
            beautiDate(){
                this.beautifulDate = this.globalFunctions.convertBeautifulDate(this.datePicker1, (this.formatFecha==this.formatES?'es':'en'));
            },
            camFormatDP(){
                this.formatFecha = (this.formatFecha==this.formatES?this.formatEN:this.formatES);
            },
            securels(){
                var ls1 = new SecureLS({encodingType: 'des', encryptionSecret: 'my-secret-key-1'});
                var ls2 = new SecureLS({encodingType: 'aes', encryptionSecret: 'my-secret-key-2'});
                var ls3 = new SecureLS({encodingType: 'rc4', isCompression: false});
                var ls4 = new SecureLS({encodingType: 'des', isCompression: false, encryptionSecret: 'my-secret-key'});
                var ls5 = new SecureLS({isCompression: false});

                ls1.set('hola1', {data: this.textConverSecureLs});
                ls2.set('hola2', {data: this.textConverSecureLs});
                ls3.set('hola3', {data: this.textConverSecureLs});
                ls4.set('hola4', {data: this.textConverSecureLs});
                ls5.set('hola5', {data: this.textConverSecureLs});

                this.resultSecure1 = ls1.getDataFromLocalStorage('hola1');
                this.resultSecure2 = ls2.getDataFromLocalStorage('hola2');
                this.resultSecure3 = ls3.getDataFromLocalStorage('hola3');
                this.resultSecure4 = ls4.getDataFromLocalStorage('hola4');
                this.resultSecure5 = ls5.getDataFromLocalStorage('hola5');

                /**
                 * 
                this.resultSecure1 = ls1.get('hola1').data;
                this.resultSecure2 = ls2.get('hola2').data;
                this.resultSecure3 = ls3.get('hola3').data;
                this.resultSecure4 = ls4.get('hola4').data;
                this.resultSecure5 = ls5.get('hola5').data;
                 */
            },
            clean(){
                //this.ls.removeAll();
                this.ls.clear();

                this.resultSecure1 = '';
                this.resultSecure2 = '';
                this.resultSecure3 = '';
                this.resultSecure4 = '';
                this.resultSecure5 = '';

            },
            imagenB64() {
                this.banban = false;
                var image1 = document.getElementById('file1');
                this.globalFunctions.getBase64(image1.files[0]).then( response => {
                    this.resultFile1 = response;
                    setTimeout(() => {
                        this.banban = true;
                    }, 1);
                });
            },
            covertB64(){
                this.resultConvertb64 = this.globalFunctions.convertB64(this.textConvert);
            },
            revertB64(){
                this.resultRevertb64 = this.globalFunctions.revertirB64(this.textRevert);
            },
            upperCase(){
                this.vUpperJS = this.vUpperJS.toUpperCase();
            },
            lowerCase(){
                this.vLowerJS = this.vLowerJS.toLowerCase();
            },
            maskPercentt(e) {
                this.var1 = this.var1.replace('%','');
                if (this.var1.length === 0) {
                    this.var1 = ''
                } else{
                    if (e != undefined && (e.keyCode == 8 || e.key == 'Backspace')) {
                        this.var1 = this.var1.substring(0, this.var1.length - 1) + '%';
                    } else {
                        this.var1 = this.var1 + '%'
                    }
                }
            },
            maskPercent(e) {
                this.var1 = this.globalFunctions.maskPercent(e, this.var1);
            },
            maskDollars(){
                this.var2 = this.var2.replace('$ ','');
                if (this.var2.length === 0) {
                    this.var2 = '';
                } else {
                    this.var2 = '$ ' + this.var2;
                }
            },
            onlyNumberJS(){
                this.onlyNumbersJS = this.globalFunctions.onlyNumber(this.onlyNumbersJS);
            },
            onlyAlphanumericJSF(){
                this.onlyAlphanumericJS = this.globalFunctions.onlyAlphanumeric(this.onlyAlphanumericJS);
            },
            onlyAlphanumericAdressJSF(){
                this.onlyAlphanumericAdressJS = this.globalFunctions.onlyAlphanumericAddress(this.onlyAlphanumericAdressJS);
            },
            operacion1(){
                this.resultado1 = +this.numero1 % +this.numero2;
            },
            operacion2(){
                this.resultado2 = (this.numero3.length==0?'':+this.numero3 % 2 == 0?'Número Par':'Número Impar');
            }
        },
        watch: {
            var2(){
                this.var2Mask = '';
                this.var2Mask = '$ ' + this.globalFunctions.numberFormat(this.var2.replace('$ ', ''), 2, '.', ',');
            },
            withoutSpaceInit(){
                this.withoutSpaceInit = this.globalFunctions.withoutSpaceI(this.withoutSpaceInit);
            },
            onlyTextJS(){
                this.onlyTextJS = this.globalFunctions.onlyText(this.onlyTextJS);
            },
            withoutSpaceIF(){
                // realizan lo mismo
                //this.withoutSpaceIF = this.withoutSpaceIF.trim();
                this.withoutSpaceIF = this.globalFunctions.withoutSpaceIF(this.withoutSpaceIF);
            }
        }
    }
</script>

<style>
    .upperCase {
        text-transform: uppercase;
    }

    .lowerCase {
        text-transform: lowercase;
    }
</style>