<template>
  <v-app style="background-color: #E0F7FA">
    <v-app-bar
        app
        color="primary"
        dark
    >
      <div class="d-flex align-center">
        <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://cdn.unimagdalena.edu.co/images/escudo/bg_dark/default.png"
            transition="scale-transition"
            width="40"
        />


      </div>

      <v-spacer></v-spacer>

      <h1>Mi Lenguaje.js</h1>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main class="container">
      <br>
      <v-row>

        <v-col

            cols="7"

        >
          <v-card
              class="pa-6"
              elevation="2"
          >
            <h1>Codigo De Entrada</h1>
            <AceEditor
                :fontSize="14"
                :showPrintMargin="true"
                :showGutter="true"
                :highlightActiveLine="true"
                mode="js"
                :onChange="onChange"
                name="editor"
                height="500px"
                width="100%"
                :editorProps="{$blockScrolling: true}"


            />
          </v-card>
        </v-col>
        <v-divider
            class="mx-4"
            vertical
            cols="1"

        ></v-divider>
        <v-col

        >
          <v-card
              class="pa-6 pr-0"
              elevation="2"
          >
            <h1>Descripcion de salida</h1>
            <pre v-if="error==''" style="  overflow: scroll; height: 500px; max-width: 398px;">
            {{ respuesta }}
          </pre>
            <span v-if="error!=''"> <code>{{ error }}</code></span>
          </v-card>
        </v-col>

      </v-row>
      <v-divider
          class="my-4"

      ></v-divider>
      <v-row>
        <v-col>
          <v-card
              elevation="2"
              class="pa-15"
              cols="4"
          >
            <h2>Codigo de ejemplo</h2>
            <br>
            <code>
          <pre >
        /* reconoce comentarios clasicos como los de java c++ y javascript el lexer solo los ignora*/

        //declaracion de variables palabra reservada dato
        dato nombre="paquito"

        imprimir("hola "+nombre);


        //reconoce sintaxis de declaracion de array
        dato notas = [80, 90, 70,100,120,10];


        // el ";" para finalizar las lineas es opcional
        dato suma=0


        para( x=0 ;x < notas.len; x++){
            //reconoce todos los operadores
            suma+=notas[x]
        }


        </pre>
            </code>
          </v-card>
        </v-col>
      </v-row>
    </v-main>

    <template>
      <v-footer
          class="primary white--text "
          color="primary"
          cols="12"
          padless
      >
        <v-card
            flat
            tile
            class="primary white--text "
            color="primary"
            cols="12"
        >




          <v-divider></v-divider>

          <v-card-text class="white--text text-center" cols="12">
            <pre>                                                                                                                                                                                     </pre> {{ new Date().getFullYear() }} — <strong>ARC</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </template>
  </v-app>
</template>

<script>
import {Ace as AceEditor} from 'vue2-brace-editor';
//var PEG = require("./javascript.js");
import {parse} from './milenguaje'

export default {
  name: 'App',

  components: {
    AceEditor,

  },

  data: () => ({
    respuesta: '',
    error: '',

  }),
  methods: {
    onChange(newValue) {
      try {
        //console.log(JSON.stringify(JSON.parse(parse(newValue))))
        this.respuesta = parse(newValue)
        this.error = ''
      } catch (error) {
        //console.error(error);
        this.error = error != "" ? error : "Error de sintaxis no reconocido"
        this.respuesta = ''

      }
      ;

    }
  }
};
</script>
