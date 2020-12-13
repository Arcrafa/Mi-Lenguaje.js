<template>
  <v-app >
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

    <v-main >
      <v-row>
        <v-col
        class="mb-3"
        >
          <AceEditor
              :fontSize="14"
              :showPrintMargin="true"
              :showGutter="true"
              :highlightActiveLine="true"
              mode="js"
              :onChange="onChange"
              name="editor"
              height="550px"
              width="100%"
              :editorProps="{$blockScrolling: true}"


          />
        </v-col>
        <v-col>
            {{respuesta}}
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import {Ace as AceEditor} from 'vue2-brace-editor';
//var PEG = require("./javascript.js");
import {parse} from './javascript'
export default {
  name: 'App',

  components: {
    AceEditor,

  },

  data: () => ({
    respuesta:''
  }),
  methods: {
    onChange(newValue) {
      try {
        //console.log(JSON.stringify(JSON.parse(parse(newValue))))
        this.respuesta = parse(newValue)
      } catch (error) {
        console.error(error);
        this.respuesta=error
      }
      ;

    }
  }
};
</script>
