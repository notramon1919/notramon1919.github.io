<script setup>
import grado_medio from '@/assets/historial_academico/grado_medio.jpeg'
import grado_superior from '@/assets/historial_academico/grado_superior.jpeg'
import grado_especializacion from '@/assets/historial_academico/grado_especializacion.jpg'
import { useDisplay } from 'vuetify'

const { mdAndDown } = useDisplay()

const items = [
  {
    color: 'red-lighten-2',
    icon: 'mdi-desktop-classic',
    title: 'Grado Medio (SMX)',
    text: 'Donde aprendí que la informática es mucho más que Excel y Scratch que era a lo que estaba acostumbrado. Si tuviera que destacar algo sería las redes locales y las configuraciones de servidores.',
    date: '2020/22',
    image: grado_medio,
    masInfoURL: 'https://ceice.gva.es/es/web/formacion-profesional/publicador-de-cicles/-/asset_publisher/M0SqOt5YOf05/content/ciclo-formativo-sistemas-microinformatico-y-redes'
  },
  {
    color: 'purple-lighten-2',
    icon: 'mdi-code-parentheses',
    title: 'Grado Superior (DAM)',
    text: 'Bases de datos relacionales, desarrollo de aplicaciones en Android, lenguajes de marcado y trabajo en equipo. Aquí es donde aprendí todo lo que se de Java y Vue.',
    date: '2022/24',
    image: grado_superior,
    masInfoURL: 'https://ceice.gva.es/es/web/formacion-profesional/publicador-de-cicles/-/asset_publisher/M0SqOt5YOf05/content/ciclo-formativo-desarrollo-de-aplicaciones-multiplataforma'
  },
  {
    color: 'green-lighten-1',
    icon: 'mdi-head-snowflake',
    title: 'Especialización (IA y Big Data)',
    text: 'La especialización es el mayor desafío al que me he enfrentado. La manipulación de datos a gran escala y la creación de modelos capaces de realizar predicciones es solo una ' +
      'pequeña parte de lo que he dado en este curso.',
    date: '2024/25',
    image: grado_especializacion,
    masInfoURL: 'https://ceice.gva.es/es/web/formacion-profesional/publicador-de-cursos-especialitzacio/-/asset_publisher/MRg14dkTb9DQ/content/inteligencia-artificial-y-big-data'
  }
]
</script>

<template>
  <div class="frame" style="overflow-x: hidden;">

    <h1 id="historial_academico"> Historial Académico </h1>

    <!-- Timeline -->
    <v-timeline
      :direction="mdAndDown ? 'vertical' : 'horizontal'"
      :density="mdAndDown ? 'compact' : 'default'"
    >
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :dot-color="item.color"
        :icon="item.icon"
      >
        <v-card
          :elevation="mdAndDown ? 1 : 4"
        >
          <v-card-title :class="['text-h6', `bg-${item.color}`, mdAndDown ? 'text-center' : '']">
            {{ item.title }}
          </v-card-title>

          <v-card-subtitle :class="['bg-' + item.color, mdAndDown ? 'text-center' : '']">
            {{ item.date }}
          </v-card-subtitle>

          <v-img
            :src="item.image"
            :height="mdAndDown ? '100px' : '150px'"
            cover
            style="max-width: 100%;"
          ></v-img>

          <v-card-text class="bg-white text--primary" style="word-wrap: break-word;">
            <p>{{ item.text }}</p>
            <v-btn
              :color="item.color"
              variant="outlined"
              :href="item.masInfoURL"
              target="_blank"
              class="mt-2"
              block
            >
              Más Info
            </v-btn>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>

  </div>
</template>
