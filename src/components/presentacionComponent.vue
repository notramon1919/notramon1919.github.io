<script setup>
import stock_image from '@/assets/stock_image.jpg'

const items = [
  {
    icon: 'mdi-github',
    url: 'https://github.com/notramon1919'
  },
  {
    icon: 'mdi-linkedin',
    url: 'https://linkedin.com/in/ramón-martí-adsuara'
  }
]
</script>

<template>
  <div class="frame" id="presentacion">
    <v-row
      class="d-flex align-center justify-space-between"
      style="min-height: 20vh; padding: 0 10vw;"
    >
      <!-- Columna Imagen -->
      <v-col
        cols="5"
        class="d-flex justify-center"
      >
        <v-img
          :width="300"
          :height="400"
          cover
          rounded="xl"
          :src="stock_image"
        ></v-img>
      </v-col>

      <!-- Columna Texto -->
      <v-col
        cols="6"
        class="d-flex flex-column justify-center"
      >
        <!-- Titulo -->
        <v-row style="padding-bottom: 20px;">
          <h3 class="text-h3">Hola, soy Ramón!</h3>
        </v-row>

        <!-- Introducción -->
        <v-row>
          <p>Buenas! Soy Ramón Martí y hago esta página para que veais un poco lo que he aprendido estos últimos años
            aprendiendo informática (principalmente programación). Además de los sitios en los que he estado de
            prácticas.</p>
          <br>
          <p>Aquí tenéis mi Github para que podáis ver los proyectos personales y de clase. Y mi Linkedin, para que
            veáis qué he estado haciendo últimamente.</p>
        </v-row>

        <!-- Socials -->
        <v-row>
          <v-btn
            v-for="(item, i) in items"
            :key="i"
            :icon="item.icon"
            :href="item.url"
            style="margin: 20px 20px 0 0"
            target="_blank"
          ></v-btn>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
