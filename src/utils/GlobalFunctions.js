/**
 * 
 * @param {*} numero  numero a formatear
 * @param {*} decimales cuantos decimales devuelve
 * @param {*} separadorDecimal deparador de decimales
 * @param {*} separadorMiles separador de miles
 */
export function numberFormat(numero, decimales, separadorDecimal, separadorMiles) {
    var partes, array;

    if ( !isFinite(numero) || isNaN(numero = parseFloat(numero)) ) {
        return "";
    }
    if (typeof separadorDecimal==="undefined") {
        separadorDecimal = ",";
    }
    if (typeof separadorMiles==="undefined") {
        separadorMiles = "";
    }
    // Redondeamos
    if ( !isNaN(parseInt(decimales)) ) {
        if (decimales >= 0) {
            numero = numero.toFixed(decimales);
        } else {
            numero = (
                Math.round(numero / Math.pow(10, Math.abs(decimales))) * Math.pow(10, Math.abs(decimales))
            ).toFixed();
        }
    } else {
        numero = numero.toString();
    }
    // Damos formato
    partes = numero.split(".", 2);
    array = partes[0].split("");
    for (var i=array.length-3; i>0 && array[i-1]!=="-"; i-=3) {
        array.splice(i, 0, separadorMiles);
    }
    numero = array.join("");

    if (partes.length>1) {
        numero += separadorDecimal + partes[1];
    }

    return numero;
}

export function onlyNumber(textValidar){
    return textValidar.replace(/[^0-9]/g, '');
}

export function onlyText(textValidar){
    return textValidar.replace(/[^A-Za-zÑñ\s\u007FáéíóúüñÁÉÍÓÚÜÑ]+/, '');
}

export function onlyAlphanumeric(textValidar){
    return textValidar.replace(/[^a-zA-Z0-9]/g, '');
}

export function onlyAlphanumericAddress(textValidar){
    return textValidar.replace(/[^a-zA-Z0-9 .,]/g, '');
}

/**
 * 
 * @param {*} e $event - maskPercent($event)
 * @param {*} numero 
 */
export function maskPercent(e, numero) {
    const porcent = '%';
    numero = numero.replace(porcent, '');
    if (numero.length === 0) {
        numero = ''
    } else{
        if (e != undefined && (e.keyCode == 8 || e.key == 'Backspace')) {
            numero = numero.substring(0, numero.length - 1) + '%';
        } else {
            numero = numero + '%'
        }
    }
    return (numero == porcent ? numero.replace(porcent, ''):numero);
}

/**
 * 
 * @param {*} text 
 * Convierte texto a b64
 */
export function convertB64(text) {
    return btoa(text)
}

/**
 * 
 * @param {*} text 
 * Revierte cadena b64
 */
export function revertirB64(text) {
    return atob(text)
}

/**
 * 
 * @param {*} file 
 * convierte archivos a b64
 */
export function getBase64(file) {
  return new Promise ((resolve, reject) => {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
          resolve(reader.result);
      };
      reader.onerror = function (error) {
        reject(error);
      };
  });

}

/**
 * 
 * @param {*} uglyDate 
 * @param {*} language 
 * funcion que retorna una fecha en formato dd/mm/yyyy o mm/dd/yyyy dependiendo el lenguage es o en
 */
export function convertBeautifulDate(uglyDate, language){
    var date = new Date(uglyDate),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
    if (language === 'es') {
        return [day, mnth, date.getFullYear()].join("/");
    }
    if (language === 'en') {
        return [mnth, day, date.getFullYear()].join("/");
    }
}

/**
 * 
 * @param {*} e $event - maskOnlyNumbers($event)
 * @param {*} fecha 
 */
export function maskOnlyNumbers(e, fecha){
    if (fecha == '/' || fecha == '//' || fecha == '///' || fecha == '////' || fecha == '/////' || fecha == '//////' || fecha == '///////') {
        fecha = '';
    }
    var arrayFec = fecha.split('/');
    if (arrayFec.length == 1 || arrayFec.length == 2) {
        arrayFec[0] = arrayFec[0].replace(/[^0-9]/g, '') + '';
    }
    if (arrayFec.length == 2) {
        arrayFec[1] = arrayFec[1].replace(/[^0-9]/g, '') + '';
    }
    fecha = arrayFec.join('/');
    const fec = fecha;
    const lengh = fecha.length;
    if (lengh > 2 && fecha.search('/') == -1) {
        if (lengh > 7) {
            fecha = fec.substring(0, 2) + '/' + fec.substring(3, 7);
        } else {
            fecha = fec.substring(0, 2) + '/' + fec.substring(3, lengh);
        }
    } else {
        if (lengh > 7) {
            fecha = fecha.substring(0, 7);
        } else {
            if (e != undefined && (e.keyCode == 8 || e.key == 'Backspace')) {
                if (lengh == 2) {
                    fecha = fecha.substring(0, lengh -1);
                }
            } else{
                if (lengh == 2) {
                    fecha = fecha + '/';
                }
            }
        }
    }
    return fecha;
}

/**
 * 
 * @param {*} e $event - maskFecha($event, ...
 * @param {*} fecha 
 * @param {*} separador separador de fecha
 * @param {*} anosLimitValid limite de años valido
 */
export function maskFecha(e, fecha, separador, anosLimitValid){
    var respuesta = {
        fecha: null,
        banDate: null,
        tipoError: null
    };
    fecha = fecha.substring(0,7);
    if (fecha == separador || fecha == separador + separador || fecha == separador + separador + separador || fecha == separador + separador + separador + separador || fecha == separador + separador + separador + separador + separador || fecha == separador + separador + separador + separador + separador + separador || fecha == separador + separador + separador + separador + separador + separador + separador) {
        fecha = '';
    }
    var arrayFec = (fecha.length>3&&fecha.length<8?fecha.split(separador, 2):fecha.split());
    if (arrayFec.length == 1 || arrayFec.length == 2) {
        arrayFec[0] = arrayFec[0].replace(/[^0-9]/g, '') + '';
        if (arrayFec[0] === '00') {
            arrayFec[0] = '01';
        }
        if (arrayFec[0] > 1 && arrayFec[0] < 10) {
            arrayFec[0] = arrayFec[0].replace('0', '');
            arrayFec[0] = '0' + arrayFec[0];
        }
        if (+arrayFec[0] > 12) {
            arrayFec[0] = '12';
        }
    }
    if (arrayFec.length == 2) {
        arrayFec[1] = arrayFec[1].replace(/[^0-9]/g, '') + '';
    }
    fecha = (fecha.length==3?arrayFec.join(separador) + separador:arrayFec.join(separador));
    const fec = fecha;
    const lengh = fecha.length;
    if (lengh > 2 && fecha.search(separador) == -1) {
        fecha = fec.substring(0, 2) + separador + fec.substring(3, lengh);
    } else {
        if (e != undefined && (e.keyCode == 8 || e.key == 'Backspace')) {
            if (lengh == 2) {
                fecha = fecha.substring(0, lengh -1);
            }
        } else{
            if (lengh == 2) {
                fecha = fecha + separador;
            }
        }
    }

    /**
     * tipoError
     * 2: fecha expirada
     * 1: año invalido
     * 0: valido
     */
    /*
        banDate = false; - Fecha valida
        banDate = true; - Fecha invalida
    */

    if (lengh === 7) {
        var mes = fec.substring(0, 2);
        var ano = fec.substring(3, 7);

        var date = new Date();
        var mesActual = date.getMonth() + 1;
        var anoActual = date.getFullYear();
        if (ano > anoActual + 10) {
            respuesta.banDate = true;
            respuesta.tipoError = 'Año invalido';//1;
        } else {
            if (ano > anoActual && ano <= anoActual + anosLimitValid && mes > 0 && mes < 13) {
                respuesta.banDate = false;
                respuesta.tipoError = 'Fecha valida';//0;
            } else{
                if (ano == anoActual && mes >= mesActual && mes <= 12) {
                    respuesta.banDate = false;
                    respuesta.tipoError = 'Fecha valida';//0;
                } else {
                    if (mes == '00' || mes > 12) {
                        respuesta.banDate = true;
                        respuesta.tipoError = 'Mes invalido';//2;
                    } else {
                        respuesta.banDate = true;
                        respuesta.tipoError = 'Fecha expirada';//2;
                    }
                }
            }
        }
    } else {
        respuesta.tipoError = 'Fecha invalida';
        respuesta.banDate = true;
    }


    respuesta.fecha = fecha;
    return respuesta;
}