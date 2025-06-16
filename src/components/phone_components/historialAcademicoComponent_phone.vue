<script setup>
import grado_medio from '@/assets/historial_academico/grado_medio.jpeg'
import grado_superior from '@/assets/historial_academico/grado_superior.jpeg'
import grado_especializacion from '@/assets/historial_academico/grado_especializacion.jpg'

const items = [
  {
    color: 'red-lighten-2',
    icon: 'mdi-desktop-classic',
    title: 'Grado Medio (SMX)',
    text: 'Donde aprendí que la informática es mucho más que Excel y Scratch que era a lo que estaba acostumbrado. Si tuviera que destacar algo sería las redes locales y las configuraciones de servidores.',
    date: '2020/22',
    image: grado_medio,
    masInfoURL: 'https://ceice.gva.es/es/web/formacion-profesional/publicador-ciclos/-/asset_publisher/FRACVC0hANWa/content/ciclo-formativo-sistemas-microinformatico-y-redes'
  },
  {
    color: 'purple-lighten-2',
    icon: 'mdi-code-parentheses',
    title: 'Grado Superior (DAM)',
    text: 'Bases de datos relacionales, desarrollo de aplicaciones en Android, lenguajes de marcado y trabajo en equipo. Aquí es donde aprendí todo lo que se de Java y Vue.',
    date: '2022/24',
    image: grado_superior,
    masInfoURL: 'https://ceice.gva.es/es/web/formacion-profesional/publicador-ciclos/-/asset_publisher/FRACVC0hANWa/content/ciclo-formativo-desarrollo-de-aplicaciones-multiplataforma'
  },
  {
    color: 'green-lighten-1',
    icon: 'mdi-head-snowflake',
    title: 'Especialización (IA y Big Data)',
    text: 'La especialización es el mayor desafío al que me he enfrentado. La manipulación de datos a gran escala y la creación de modelos capaces de realizar predicciones es solo una ' +
      'pequeña parte de lo que está siendo este año. Y es que, aunque conozca bien a casi todos los profesores, no dan tregua 🥲.',
    date: '2024/25',
    image: grado_especializacion,
    masInfoURL: 'https://ceice.gva.es/es/web/formacion-profesional/publicador-de-dossier-de-cursos/-/asset_publisher/R4uiU2vzyVnY/content/curs-d-especialitzaci%C3%B3-desenvolupament-de-videojocs-i-realitat-virtual-duplica-1'
  }
]
</script>

<template>

  <div id="historial_academico">

    <h1> Historial Académico </h1>

    <!-- Timeline -->
    <v-timeline side="end">

      <!-- Bucle que saca todas las cards de items -->
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :dot-color="item.color"
        fill-dot
      >
        <v-card max-width="230px">
          <v-card-title :class="[`bg-${item.color}`]">
            <v-icon
              :icon="item.icon"
              size="large"
            ></v-icon>
            <h6 class="font-weight-bold">
              {{item.title}}
            </h6>
          </v-card-title>
          <v-card-text style="padding: 10px">
            {{item.text}}
          </v-card-text>

          <!-- Botón de la carta -->
          <v-btn :color="item.color"
                 variant="outlined"
                 style="margin: 10px"
                 :href="item.masInfoURL"
                 target="_blank">
            Más Info
          </v-btn>

        </v-card>
      </v-timeline-item>
    </v-timeline>

  </div>
</template>
