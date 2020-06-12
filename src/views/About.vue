<template>
  <div>
<!--
-->

  <div class="div">fghjk</div>
  <form action="">
    <input type="text" placeholder="algo">
    <input type="text" placeholder="algo">
    <button>enviar</button>
  </form>
    
  <img class="img1" alt="Vue logo" src="../assets/logo.png">
  <img class="img2" alt="Vue logo" src="../assets/spiner.png">
  <img class="img" alt="Vue logo" src="../assets/hi.jpeg">
  <img class="img3" alt="Vue logo" src="../assets/hi.jpg">
  <img class="img4" alt="Vue logo" src="../assets/spiner.png">
  </div>
</template>

<style>
/**
   @import url('../assets/style/normalize.css');

 input[type] {
   width: 100%;
 }

 input[type="text"] {
   width: 10px;
 }

 p[class="verde"] {
   background-color: lightcoral;
 }

 p[class~="parrafo"]{
   background-color: aqua;
 }

 li[lang|="es"]{
   background-color: orange;
 }

 p + p {
   background-color: blue;
 }

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 font style
    font-style: italic;
    normal italic oblique

  font variant
    font-variant: small-caps;
    normal small-caps

  font weight
    font-weight: bold;
    normal bold bolder lighter

  font size
    font-size: 24px;

  line height
    line-height: 24px;
    normal px em ex rem cm pc pt

  font family
    font-family: arial;
    arial helvetica verdana georgia cambria times

  text align
    text-align: justify;
    left right center justify

  text decoration
    text-decoration: nome;
    nome normal overline underline line-through

  text transform
    text-transform: uppercase;
    uppercase lowercase capitalize

  text indent (tabulacion)
    text-indent: 24px;

  letter spacing (espaciado entre letras)
    letter-spacing: 24px;

  word spacing (espaciado entre palabras)
    word-spacing: 24px;

  sombras
    text shadow
      text-shadow: 3px 4px 7px blue;
      offset-x offset-y blur-radius color

    box shadow
      box-shadow: 3px 2px 1px 7px red;
      offset-x offset-y blur-radius spread-radius color inset(sombra hacia adentro del borde)

  display
    block inline inline-block none table table-row table-cell

  float
    float: none;
    none left right

  clear (romper float y continuar con los estilos)
    clear: both;
    left reight both

  position
    position: static;
    static relative absolute fixed

    top: 24px;
    bottom: 24px;
    left: 24px;
    right: 24px;

  z-indez: 24px;

  opacity: .2;
  0 - 1 

  visibility
    visibility: hidden;
    visible hidden

  overflow controla el comportamiento de los contenidos que no caben en su elemento contenedor
    overflow: visible;
    overflow-x: visible;
    overflow-y: visible;
    visible hidden scroll

  eventos del mouse
    pointer-events: auto; (desactivar eventos)
    auto none

    cursor: pointer;
    help pointer text copy move no-drop wait progress

  user select (usar selector para cada navegador) seleccionar texto
    user-select: auto;
    none auto
    -webkit -ms -moz

  pseudo elementos(Se añaden a los selectores y nos permiten añadir estilos a una parte concreta de los elementos html)
    selector::first-line (Selecciona la primera linea del parrafo)

    selector::first-letter (selecciona la primera linea de un parrafo)

    selector::before (selecciona la parte anterior del elemento)
    .parrafo::before {
      content: "hello";
    }

    selector::after (selecciona la parte posterior del elemento)
    .parrafo::after {
      content: " Goodbye";
    }

    selector::selection (selecciona el texto que ha seleccionado el usuario)
    .parrafo::selection {
      color:white;
      background-color: black;
    }

  pseudo clases de enlace (se añaden a los selectores y nos permiten añadir estilos segun el estado de los elementos html)
    selector:link (enlaces que no han sido visitados (solo color))
      a:link {
        color: red;
      }

    selector:visited (enlaces que han sido visitados (solo color))
      a:visited {
        color: black;
      }

  pseudo clases de hijos y elementos del mismo tipo
    hijos
      selector:first-child (selecciona el primer elemento hijo de un elemento)
        ul li:first-child {
          background-color: red;
          color: white;
        }

      selector:last-child (selecciona el ultimo elemento hijo de un elemento)
        ul li:last-child {
          background-color: aqua;
          color: white;
        }

    tipos
      selector:first-of-type (selecciona el primer elemento del mismo tipo)
        .div:first-of-type {
          background-color: brown;
          color: white;
        }

      selector:last-of-type (selecciona el ultimo elemento del mismo tipo)
      .div:last-of-type {
        background-color: blue;
        color: white;
      }

  Pseudo clases para estado de elementos de un formulario
    selector:enabled (cuando el elemento se encuentra habilitado)
      input[type="text"]:enabled {
        color: green;
      }

    selector:disabled (cuando el elemento se encuento deshabilitado)
      input[type="text"]:disabled {
        color: blue;
      }

    selector:checked (cuando el elemento se encuentra marcado)
      input[type="checkbox"]:checked + label {
        color: green;
        font-size: 30px;
      }

  Pseudo clases de rango
    selector:in-range (cuando el elemento se encuentre en el rango)
      input[type="number"]:in-range {
        background-color: blueviolet;
      }

    selector:out-of-range (cuando el elemento se encuentra fuera del rango)
      input[type="number"]:out-of-range {
        border: 1px solid red;
      }

    Pseudo clases de validacion de formularios
      selector:required (cuando el input es requerido)
        input:required {
          background-color: red;
        }

      selector:valid (cuando el formato del input es valido)
        input:valid {
          background-color: blue;
        }

      selector:invalid (cuando el formato del input es invalido)
        input:invalid {
          background-color: aquamarine;
        }
    pseudo clases nth-child y nth-last-chikd
      selector:nth-child()
        table tbody tr:nth-child(even) {
          background-color: aqua;
        }

      selector:nth-last-child()
        table tbody tr:nth-child(odd) {
          background-color: blueviolet;
        }

      selector:nth-of-type()
        div:nth-of-type(even) {
          background-color: blueviolet;
        }

      selector:nth-last-of-type()
      div:nth-last-of-type(even) {
        background-color: brown;
      }

      valores
      event -> pares
      odd   -> nones
      an+b  -> podemos definir un numero n cantidad de veces

      selector:hover (cuando el cursor esta encima del elemento)
        .div:hover {
          background-color: aqua;
          width: 250px;
          height: 250px;
          border-radius: 100%;
        }

      selector:active (cuando un boton se permanece el clic)
        button:active {
          background-color: blue;
        }

      selector:focus (cuando un elemento tiene el foco)
        input:focus {
          border: 2px solid violet;
        }

    transiciones
      transition-property 
      transition-duration (duracion en las que durara la transicion)
      transition-timing-function (Especifica la curva cúbica bézier que se usa para definir como se computan los valores intermedios para las propiedades)


      valores
      linear
      ease
      ease-in
      ease-out
      ease-in-out

      transition-delay (define el tiempo de espera entre el momento en qeu se cambia una propiedad y el inicio de la transicion)
        div {
          margin: 50px auto;
          width: 300px;
          height: 300px;
          background-color: blueviolet;
          ///
          transition-property: all;
          transition-duration: 2s;
          transition-timing-function: linear;
          transition-delay: 2s;
          ///
          transition: all 2s ease-in 2s;
        }

    transformaciones
      2d
        transform:rotate()

      3d
        transform: rotateX()
        transform: rotateY()
        transform: rotateZ()
        deg -> grados
        turn -> giros 1-0
        grad -> gradianes
        rad -> radianes

      transform-origin: x y
        palabras clave -> right left top bottom center
        unidades de medida -> px em rem

      transform:traslate(X, Y)
      transform:traslateX()
      transform:traslateY()
      transform:traslateZ()

      unidades de medida -> px em rem % pc pt

      transform-origin: x y
        palabras clave -> right left top bottom center
        unidades de medida -> px em rem

      transform:scale(X, Y) -> en ambos sentidos un solo valor
        transform:scaleX(X)
        transform:scaleY(Y)

        transform:skew(X, Y)
        transform:skewX(X)
        transform:skewY(Y)

        deg -> grados

        si se utiliza la transformacion skew en un angulo de 90 grados no se vera el elemento


    transformaciones multiples



~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

 /**
    .caja {
      background-color: rebeccapurple;
      width: 500px;
      height: 500px;
      border-radius: 100%;
      border: 1px solid black;
      /***
      background: -webkit-linear-gradient(left, #000000 50%, #3498db 80%);
      background: -webkit-radial-gradient(left, #000000 10%, #3498db 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b3dced', endColorstr='#bce0ee', GradientType=1 );
       background: rgba(179,220,237,1);
  background: -moz-linear-gradient(left, rgba(179,220,237,1) 0%, rgba(41,184,229,1) 50%, rgba(188,224,238,1) 100%);
  background: -webkit-gradient(left top, right top, color-stop(0%, rgba(179,220,237,1)), color-stop(50%, rgba(41,184,229,1)), color-stop(100%, rgba(188,224,238,1)));
  background: -ms-linear-gradient(left, rgba(179,220,237,1) 0%, rgba(41,184,229,1) 50%, rgba(188,224,238,1) 100%);
  background: -webkit-linear-gradient(left, rgba(179,220,237,1) 0%, rgba(41,184,229,1) 50%, rgba(188,224,238,1) 100%);
  background: -o-linear-gradient(left, rgba(179,220,237,1) 0%, rgba(41,184,229,1) 50%, rgba(188,224,238,1) 100%);
      
  background: linear-gradient(to right, rgba(179,220,237,1) 0%, rgba(41,184,229,1) 50%, rgba(188,224,238,1) 100%);
  
    }
  */

  .div {
    width: 300px;
    height: 300px;
    background-color: blueviolet;
    margin: 50px auto;
    transition-property: all;
    transition-duration: 2s;
    transition-timing-function: ease;
    transition-delay: 2s;
    /**
     transition: all 2s ease;
     */

  }

  .div:hover {
    background-color: white;
  }

  form {
    width: 300px;
    height: 100px;
    margin: 0 auto;
  }

  input {
    width: 100%;
  }

  input:focus {
    outline: none;
    border: 2px solid tomato;
  }


/**********************************************************/

  .img {
    width: 400px;
    height: 400px;
    margin: 0 auto;
    display: block;
    transition: all 3s ease-out;
  }

  .img:hover {
    /**
    transform: rotate(360deg);
     */
    transform: rotate(6rad);
    transform-origin: bottom;
  }

  .img1 {
    width: 400px;
    height: 400px;
    margin: 0 auto;
    display: block;
    transition: all 1s ease-out;
  }

  .img1:hover {
    transform: translateY(1000px);
    transform-origin: 45px 10px;
  }
  
  .img2 {
    width: 400px;
    height: 400px;
    margin: 0 auto;
    display: block;
    transition: all 1s ease-out;
  }

  .img2:hover {
    transform: scale(0.1, 0.1);
  }

  .img3 {
    width: 400px;
    height: 400px;
    margin: 0 auto;
    display: block;
    transition: all 1s ease-out;
  }

  .img3:hover {
    transform: skew(45deg, 45deg);
  }

  .img4 {
    width: 400px;
    height: 400px;
    margin: 0 auto;
    display: block;
    transition: all 1s ease-out;
  }

  .img4:hover {
    transform: skew(5deg, 5deg) scale(0.5) rotate(280deg) translate(80px, 80px);
  }

</style>