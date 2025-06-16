<script setup>
const items = [
  {
    title: 'Java',
    description: 'El lenguaje con el que empecé en el mundillo de la programación. Del más sencillo "Hola Mundo" a los pilares de la programación orientada a objetos.' +
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
      'Matplotlib, Pandas, Numpy y Scikitlearn',
    icon: 'mdi-language-python'
  }
]
</script>

<template>
  <div class="frame">

    <!-- Título de sección -->
    <h1 id="competencias"> Competencias </h1>

    <v-row>

      <!-- Iteración de todas las competencias -->
      <v-col v-for="(item, i) in items" :key="i">

        <!-- La carta en sí -->
        <v-card
          class="mx-auto "
          :prepend-icon="item.icon"
          width="400"
        >

          <!-- Título en slot -->
          <template v-slot:title>
            <span class="font-weight-black">{{ item.title }}</span>
          </template>

          <!-- Texto de la carta -->
          <v-card-text class="bg-surface-light pt-4">
            {{ item.description }}
          </v-card-text>

        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
