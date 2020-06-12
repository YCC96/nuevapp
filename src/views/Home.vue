<template>
  <div class="agrupar">
    <header class="cabecera">
      <h1>Mi blog</h1>
    </header>

    <nav class="menu">
      <ul>
        <li>Principal</li>
        <li>Ayuda</li>
        <li>Contacto</li>
      </ul>
    </nav>

    <section class="seccion">
      <article class="articulo">
        <hgroup>
          <h1>Titulo del primer articulo</h1>
          <h2>Subtitulo del primer articulo</h2>
        </hgroup>
        <time datetime="12-10-2018">Publicado 12-10-2018</time>
          <img alt="Vue logo" src="../assets/logo.png">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            <small>Magnam laboriosam ipsa</small> soluta 
            <span>nihil hic quas</span> possimus error facere perspiciatis voluptatum nobis tenetur reiciendis,
            <cite>suscipit dolorum</cite> velit provident laudantium quibusdam!</p>
          <footer>
            <p>Comentarios (0)</p>
          </footer>
          <address>
            <a href="http://google.com">Visita Google</a>
          </address>
      </article>

      <article>
        <hgroup>
          <h1>Titulo del segundo articulo</h1>
          <h2>Subtitulo del segundo articulo</h2>
        </hgroup>
        <time datetime="12-11-2018">Publicado 12-11-2018</time>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, hic tempora praesentium dignissimos
          iste magnam. Suscipit numquam ipsam amet esse, voluptate maxime molestias dignissimos aperiam est explicabo
          ab libero laudantium.</p>
          <footer>
            <p>Comentario (1)</p>
          </footer>
      </article>
    </section>

    <aside class="columna">
      <blockquote cite="http://fb.com">
        Mensaje 1
      </blockquote>
      <blockquote cite="http://fb.com">
        Mensaje 2
      </blockquote>
    </aside>

    <footer class="pie">
      Derechos reservados 2010-2018
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {

  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  header, section, footer, aside, nav, article, hgroup {
    display: block;
  }

  .nav {
    background: gray;
    border: 1px solid black;
  }

  .agrupar {
    text-align: center;
    width: 80%;
    background: #bdc3c7;
    margin: 15px auto;
  }

  .cabecera {
    background: #2c3e50;
    color: whitesmoke;
    padding: 20px;
  }

  .cabecera h1 {
    text-align: left;
  }

  .menu {
    background: #34495e;
    color: white;
    padding: 5px 15px;
    text-align: left;
  }

  .menu li {
    list-style: none;
    padding: 5px;
    font: bold 15px;
    display: inline-block;
  }

  .seccion {
    margin: 20px;
    width: 70%;
    float: left;
  }

  article {
    background: #3498db;
    border: 1px solid #999;
    padding: 20px;
    margin-bottom: 15px;
  }

  time {
    color: #999;
  }

  article footer {
    text-align: right;
    margin-top: 20px;
  }

  .columna {
    margin: 20px;
    float: left ;
    width: 23%;
  }

  .columna blockquote {
    border: 1px solid black;
    padding: 40px;
    background: #2c3e50;
    color: white;
    margin-bottom: 20px;
  }

  .pie {
    clear: both;
    padding: 20px;
    background: #2c3e50;
    color: white;
  }

  img {
    width: 80px;
    display: block;
    margin: 20px auto;
  }
</style>
