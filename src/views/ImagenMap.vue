<template>
    <div class="container">
        <br><br><br>
        <h2>Imagen with map</h2>
        <hr>
        <div class="row">
            <img style="width:1000px" src="../assets/image/image1.gif" alt="Planetas" usemap="#planetmap">

            <map name="planetmap">
                <!--
                    <area shape="rect" coords="0,0,82,126" href="" alt="sun" target="_blank">
                -->
                <area shape="circle" coords="800,150,200" href="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5e5fce075bafe8711d08b2d5/nombres-luna_1.jpg" alt="sun" target="_blank">
                <area shape="circle" coords="150,400,150" href="https://estaticos.muyinteresante.es/uploads/images/article/5af2d88d5bafe8900b0aba5d/sol_0.jpg" alt="sun" target="_blank">
            </map>
        </div>
        <br><br><br>
        <!--
            https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5e5fce075bafe8711d08b2d5/nombres-luna_1.jpg
        -->
    </div>
</template>

<script>
    export default {
        name: 'ImagenMap',
        data() {
            return {
            }
        },
        methods: {
            
        },
    }
</script>