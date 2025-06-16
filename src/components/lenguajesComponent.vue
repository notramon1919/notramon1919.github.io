<script setup>
import { useDisplay } from 'vuetify'
const { mdAndDown } = useDisplay()

const items = [
  {
    title: 'Java',
    description: 'El lenguaje con el que empecé en el mundo de la programación. Del más sencillo "Hola Mundo" a los pilares de la programación orientada a objetos.' +
      'De programas de lo más lineales a creación de aplicaciones en Android Studio. También aprendí patrones de diseño como el Builder o un Singleton.',
    icon: 'mdi-language-java'
  },
  {
    title: 'Vue.js',
    description: 'Aprendí a usar librerias de componentes (como Naive-UI, Primevue y Vuetify) para hacer distintas aplicaciones web, bueno, esta pagina web esta hecha usando Vuetify. ',
    icon: 'mdi-vuejs'
  },
  {
    title: 'Python',
    description: 'Y aunque haya empezado a usarlo ahora, Python me lleva llamando la atención desde finales del Grado Medio. Conozco varios métodos para manipular, predecir y representar datos, tales como ' +
      'Matplotlib, Pandas, Numpy y Scikitlearn. Tambien he realizado proyectos usando Flask.',
    icon: 'mdi-language-python'
  }
]
</script>

<template>
  <div class="frame">

    <!-- Título de sección -->
    <h1 id="lenguajes"> Lenguajes </h1>

    <v-row>

      <!-- Iteración de todas los lenguajes -->
      <v-col v-for="(item, i) in items" :key="i">

        <!-- La carta en sí -->
        <v-card
          class="mx-auto d-flex flex-column hover-card transition-fast-in-fast-out"
          :prepend-icon="item.icon"
          :width="mdAndDown ? '300px' : '400px'"
          height="100%"
        >

          <!-- Título en slot -->
          <template v-slot:title>
            <span class="font-weight-black">{{ item.title }}</span>
          </template>

          <!-- Texto de la carta -->
          <v-card-text class="bg-surface-light d-flex flex-column justify-center fill-height">
            <br>{{ item.description }}
          </v-card-text>

        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.hover-card {
  transition: all 0.3s ease;
}

.hover-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
</style>
