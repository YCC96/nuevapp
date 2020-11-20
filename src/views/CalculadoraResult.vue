<template>
    <div>
        <label for="resultado">Resultado</label><br>
        <input class="form-control" type="text" v-model="result" readonly>
        <input class="form-control" type="text" v-model="resultado" readonly>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        name: 'CalculadoraResult',
        computed: {
            ...mapState(['resultado']),
            result(){
                return this.$store.getters.getResultado
            }
        },
    }
</script>