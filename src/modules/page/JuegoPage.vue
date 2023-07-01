<template>
   
    <div v-if="puntaje<10 && intento!=0">
    <h1>Juego</h1>
    <label class="puntaje">Puntaje: {{ puntaje }}     Intentos: {{ intento }} </label>
    <Juego :contenido="array"></Juego>
    <button @click="cargarJuego()">JUGAR</button>
    </div>
    <div v-if="puntaje>=10 || intento==0">
        <div class="pierde" v-if="intento==0 && puntaje<10">
        <h1>Has utilizado tus 5 intentos</h1>
        <h2>El juego ha terminado intentalo nuevamente</h2>
        </div>

        <div class="gana" v-if="puntaje>=10">
        <h1>Puntaje {{ puntaje }}</h1>
        <h2>Felicitaciones has ganado un premio de $10.000,00</h2>
        </div>
       
        <button @click="reiniciar()">REINICIAR</button>
  
    </div>
    
</template>

<script>
import Juego from "../components/Juego.vue"
import fachadaConsumir from "../helpers/ClienteJuego"
export default {

    data(){
        return{
            array:[0,0,0],
            puntaje:0,
            intento:5

        }
        
    },
    components:{
        Juego
    },
    methods:{
        async cargarJuego(){
           const listaDatos=await fachadaConsumir()
            this.array=listaDatos
            this.puntuacion()
        },

        puntuacion(){
            this.intento--
            if(this.array[0].id==this.array[1].id && this.array[0].id==this.array[2].id ){
                this.puntaje+=5
            }
            else if(this.array[0].id==this.array[1].id|| this.array[0].id==this.array[2].id ||this.array[1].id==this.array[2].id){
                this.puntaje+=2
            }
        },
        reiniciar(){
            this.array=[0,0,0],
            this.puntaje=0,
            this.intento=5
        }
    }
}
</script>

<style>
.gana{
    color:blue;
    font-weight: bold;
}
.pierde{
    color:red;
    font-weight: bold;
}
.puntaje{
    margin-bottom: 5px;
}
button{
    background-color: black;
    color: white;
    height: 50px;
    width: 100px;
}

button:hover{
    background-color:rgb(140, 8, 8) ;
    color: black;
}
</style>