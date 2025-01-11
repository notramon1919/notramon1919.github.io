<script setup>
import { ref } from 'vue'
import stock_image from '@/assets/stock_image.jpg'

const items = ref([
  {
    image: stock_image,
    title: 'STN Cerámicas',
    subtitle: 'Subtítulo 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium excepturi ipsa nostrum possimus quis repellendus suscipit ullam velit? Aperiam architecto commodi debitis earum in inventore minus porro quaerat, quibusdam recusandae.',
    mostrar: false
  },
  {
    image: stock_image,
    title: 'Blumaq S.A.',
    subtitle: 'Subtítulo 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium excepturi ipsa nostrum possimus quis repellendus suscipit ullam velit? Aperiam architecto commodi debitis earum in inventore minus porro quaerat, quibusdam recusandae.',
    mostrar: false
  },
  {
    image: stock_image,
    title: 'IN.GRA.M',
    subtitle: 'Subtítulo 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium excepturi ipsa nostrum possimus quis repellendus suscipit ullam velit? Aperiam architecto commodi debitis earum in inventore minus porro quaerat, quibusdam recusandae.',
    mostrar: false
  }
])

const toggleExpand = (index) => {
  items.value[index].mostrar = !items.value[index].mostrar
}
</script>

<template>
  <div class="frame">
    <v-row>

      <!-- Iteración de tarjetas -->
      <v-col v-for="(item, i) in items" :key="i">

        <!-- La tarjeta en sí -->
        <v-card max-width="344">

          <!-- Imagen -->
          <v-img
            :src="item.image"
            height="200px"
            cover></v-img>

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
