<script setup>
import { useDisplay } from 'vuetify'

const { mdAndDown } = useDisplay()

const rutas = [
  {
    icon: 'mdi-school-outline',
    ref: '#historial_academico',
    text: 'Historial Académico'
  },
  {
    icon: 'mdi-briefcase-outline',
    ref: '#experiencia_laboral',
    text: 'Experiencia Laboral'
  },
  {
    icon: 'mdi-account-star-outline',
    ref: '#lenguajes',
    text: 'Lenguajes'
  }
]
</script>

<template>
  <div class="frame" id="nav_bar">
    <v-row justify="center" align="center" :class="mdAndDown ? 'flex-column' : 'flex-row'">
      <v-btn
        v-for="(ruta, i) in rutas"
        :key="i"
        class="mx-4 my-2"
        :href="ruta.ref"
        :prepend-icon="ruta.icon"
      >
        {{ ruta.text }}
      </v-btn>

    </v-row>
  </div>
</template>
