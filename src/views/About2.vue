<template>
  <div>
    <div class="caja"></div>
    <div class="caja1"></div>
  </div>
</template>

<style>
  /**
    keyframes
      -> 2 etapas (normal)
        @-prefijo-keyframes nombre {
          from {valor inicial}
          to {valor final}
        }

      -> multiples etapas (porcentajes)
        @-prefijo-keyframes nombre{
          0%{ valores }
          25%{ valores }
          75%{ valores }
          100%{ valores }
        }

      propiedades
        -> animation-name: nombre;
        -> animation-duration: 0s;
        -> animation-timing-function: (linear, ease, ease-in, ease-out, ease-in-out)
        -> animation-delay: 0s;
        -> animation-iteration-count: 1; (infinite)
        -> animation-direction: (normal, reverse, alternate, alternate-reverse);

      notacion acortada
        animation: nombre | duration | timing | delay | iteration | direction

        -> animation-play-state: (pause, running)
   */
  .caja {
    width: 100px;
    height: 100px;
    background-color: darkred;
    animation-name: cajaAlgo;
    animation-duration: 3s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: linear;
  }

/**
  @-webkit-keyframes cajaAlgo {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(200px);
      border-radius: 100%;
      background-color: aqua;
    }
  }
 */

  @keyframes cajaAlgo {
    0%{
        transform: translate(0px);
        background-color: aqua;
      }
    20%{
        transform: translate(0, 300px);
        background-color: violet;
      }

    40%{
        transform: translate(300px, 300px);
        background-color: white;
      }

    60%{
        transform: translate(300px, 0px);
        background-color: black;
      }

    80%{
      transform: translate(0px, 0px);
      background-color: red;
    }
  }

  .caja1 {
    width: 100px;
    height: 100px;
    background-color: brown;
  }

  @media(max-width: 600px){
    .caja1 {
      background-color: aqua;
    }
  }

  @media(min-width: 400px) and (max-width: 450px){
    .caja1 {
      background-color: blueviolet;
    }
  }

</style>