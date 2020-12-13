<template>
  <v-app>
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

    <v-main>
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
          <pre>
            {{ respuesta }}
          </pre>


        </v-col>
      </v-row>
      <v-row>
        <h3>palabras reservadas que el lenguaje entiendo y funcionan</h3>

        <pre>

BreakToken      = "romper"       
CaseToken       = "caso"        
CatchToken      = "captura"       
ClassToken      = "clase"       
ConstToken      = "constante"       
ContinueToken   = "continuar"    
DebuggerToken   = "depurador"    
DefaultToken    = "defecto"     
DeleteToken     = "eliminar"      
DoToken         = "hacer"          
ElseToken       = "sino"        
EnumToken       = "enumerado"        
ExportToken     = "exportar"      
ExtendsToken    = "extender"     
FalseToken      = "falso"       
FinallyToken    = "finalmente"     
ForToken        = "para"         
FunctionToken   = "funcion"    
GetToken        = "obtener"         
IfToken         = "si"          
ImportToken     = "importar"      
InstanceofToken = "instaciade"  
InToken         = "en"          
NewToken        = "nuevo"         
NullToken       = "nulo"        
ReturnToken     = "retornar"      
SetToken        = "set"         
SuperToken      = "super"       
SwitchToken     = "ss"      
ThisToken       = "este"        
ThrowToken      = "lanzar"       
TrueToken       = "verdadero"        
TryToken        = "tratar"         
TypeofToken     = "tipode"      
VarToken        = "dato"         
VoidToken       = "vacio"        
WhileToken      = "mientras"       
WithToken       = "con"        

        </pre>
      </v-row>
    </v-main>
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
    respuesta: ''
  }),
  methods: {
    onChange(newValue) {
      try {
        //console.log(JSON.stringify(JSON.parse(parse(newValue))))
        this.respuesta = parse(newValue)
      } catch (error) {
        //console.error(error);
        this.respuesta = error
      }
      ;

    }
  }
};
</script>
