<script setup>
import { ref } from 'vue'
import stn from '@/assets/empresas/stn.png'
import blumaq from '@/assets/empresas/blumaq.png'
import intram from '@/assets/empresas/intram.png'
import inituji from '@/assets/empresas/inituji.png'
import { useDisplay } from 'vuetify'

const { mdAndDown } = useDisplay()

const items = ref([
  {
    image: stn,
    title: 'STN Cerámicas',
    subtitle: 'Nules - 2 Meses',
    description: 'En mis primeras prácticas fui técnico de sistemas. Me permitió aprender los pasos a seguir cuando ocurren problemas. Aunque no hice nada de programación, ' +
      'me llevé una buena experiencia con un equipo maravilloso.',
    mostrar: false
  },
  {
    image: blumaq,
    title: 'Blumaq S.A.',
    subtitle: 'La Vall d\'Uixó - 2 Meses',
    description: 'Trabajé con SAP creando transacciones para posteriormente pasarlos a producción. Fue un gran desafio al no haber usado ABAP, el lenguaje del ERP, anteriormente.',
    mostrar: false
  },
  {
    image: intram,
    title: 'IN.TRA.M',
    subtitle: 'Praga - 2 Meses',
    description: 'Participé en un programa de FP en el extranjero. Entre otras actividades, diseñé una página web con Wordpress para un producto de la empresa.',
    mostrar: false
  },
  {
    image: inituji,
    title: 'INIT - UJI',
    subtitle: 'Castellón de la Plana - 2 Meses',
    description: 'Trabajé junto a otros alumnos expertos en Inteligencia Digital. Desarrollé una solución que usaba una arquitectura RAG y hice junto a un compañero una página web que la servía con Flask.',
    mostrar: false
  }
])

const toggleExpand = (index) => {
  items.value[index].mostrar = !items.value[index].mostrar
}
</script>

<template>
  <div class="frame">
    <h1 id="experiencia_laboral"> Experiencia Laboral </h1>

    <v-row :align="mdAndDown ? 'stretch' : 'start'" :justify="mdAndDown ? 'center' : 'start'">
      <!-- Iteración de tarjetas -->
      <v-col
        v-for="(item, i) in items"
        :key="i"
        :cols="mdAndDown ? 12 : 3"
      >
        <!-- La tarjeta en sí -->
        <v-card :max-width="mdAndDown ? '100%' : '100%'" class="mx-auto my-4">
          <!-- Imagen -->
          <v-img
            :src="item.image"
            height="200px"
            width="100%"
            cover
          ></v-img>

          <!-- Título y subtítulo -->
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-subtitle>{{ item.subtitle }}</v-card-subtitle>

          <!-- Botón para expandir -->
          <v-card-actions>
            <v-btn color="black" @click="toggleExpand(i)">
              {{ item.mostrar ? 'Mostrar Menos' : 'Saber Más' }}
            </v-btn>
          </v-card-actions>

          <!-- Contenido expandible -->
          <v-fade-transition>
            <v-card-text v-if="item.mostrar">
              {{ item.description }}
            </v-card-text>
          </v-fade-transition>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
