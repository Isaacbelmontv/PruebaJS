import { Component } from '@angular/core';

import {Md5} from 'ts-md5/dist/md5';
// var fs = require('fs');
// var md5 = require('md5');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba';

  constructor() {
}

  HashAction(){
    /*arreglo a a z*/
    var abecedario = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "@", "."];

    /*arreglo resulado*/
    var resultado = [];

    let hash = '1ee7b2c95024bf2a3a5b645676875f72af97c725eca5ea2e7ae4a6b18dd9f608aaf180b66f6282f65168c30c1c5e54660aaa8fb0c5b4fa52c0d06ed55d02fcc95e35b5a6a854db008cb8a677dfff030b35306f43e19f6826a5df7937e71d228cb2917b47913c83618903a4e56482283634e4cf70388e9477677aa3013494ba1c3d116007775d60a0d5781d2e35d747b5dece2e0e3d79d272e40c8c66555f5525';
  if(hash != ''){
    console.log('hash', hash);
    let inputSinEspacio = hash.replace(/\s/g,'')
    console.log('inputSinEspacio', inputSinEspacio);
    /*separando por 32 */
    var arregloHashs = hash.match(/.{1,32}(.$)?/g);
    console.log('arregloHashs', arregloHashs);

    arregloHashs.forEach(function(element) {
      console.log(element);
    });


    console.log(Md5.hashStr(Md5.hashStr('om') + 'om' + Md5.hashStr('om')));

for (var a = 0; a < arregloHashs.length; a++) {
  for (var i = 0; i < abecedario.length; i++) {
    for (var j = 0; j < abecedario.length; j++) {
        // console.log(abecedario[i], abecedario[j]);
        console.log(Md5.hashStr(Md5.hashStr(abecedario[i]+abecedario[j]) + abecedario[i]+abecedario[j] + Md5.hashStr(abecedario[i]+abecedario[j])));

        if(Md5.hashStr(Md5.hashStr(abecedario[i]+abecedario[j]) + abecedario[i]+abecedario[j] + Md5.hashStr(abecedario[i]+abecedario[j])) == arregloHashs[a]){
          resultado.push(abecedario[i]+abecedario[j]);
        }
    }
  }
}

 var resultadoFinal = resultado.toString();
  console.log('resultado', resultadoFinal.replace(',', ''));
  }else{
    console.log('hash vacio', hash);

  }
  }

}
