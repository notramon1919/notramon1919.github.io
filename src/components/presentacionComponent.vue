<script setup>
import yo from '@/assets/presentacion_images/yo.jpg'
import { useDisplay } from 'vuetify'

const { mdAndDown } = useDisplay()

const items = [
  {
    icon: 'mdi-github',
    url: 'https://github.com/notramon1919'
  },
  {
    icon: 'mdi-linkedin',
    url: 'https://linkedin.com/in/ramón-martí-adsuara'
  },
  {
    icon: 'mdi-email',
    url: 'mailto:rmartiadsuara@gmail.com'
  }
]
</script>

<template>
  <div class="frame" id="presentacion">
    <v-row
      :class="mdAndDown ? 'flex-column' : 'flex-row'"
      class="d-flex align-center"
      style="min-height: 40vh; padding: 0 5vw;"
    >
      <!-- Imagen -->
      <v-col
        :cols="12"
        :md="5"
        class="d-flex justify-center mb-4"
      >
        <v-img
          :width="mdAndDown ? '100%' : 300"
          :height="mdAndDown ? 'auto' : 500"
          max-width="400"
          aspect-ratio="2/3"
          cover
          rounded="xl"
          :src="yo"
        ></v-img>
      </v-col>

      <!-- Texto -->
      <v-col
        :cols="12"
        :md="7"
        class="d-flex flex-column justify-center"
      >
        <v-row class="pb-4">
          <h3 class="text-h4 text-md-h3 text-center text-md-left">Hola, soy Ramón!</h3>
        </v-row>

        <v-row>
          <p>
            Buenas! Soy Ramón Martí y hago esta página para que veáis un poco lo que he aprendido estos últimos años
            aprendiendo informática (principalmente programación). Además de los sitios en los que he estado de
            prácticas.
          </p>
          <br />
          <p>
            Aquí tenéis mi Github para que podáis ver los proyectos personales y de clase. Y mi Linkedin, para que
            veáis qué he estado haciendo últimamente.
          </p>
        </v-row>

        <!-- Botones sociales -->
        <v-row class="mt-10 mb-10 justify-center justify-md-start">
          <v-btn
            v-for="(item, i) in items"
            :key="i"
            :icon="item.icon"
            :href="item.url"
            target="_blank"
            class="me-3"
          ></v-btn>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
