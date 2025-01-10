<script setup>
import elonMusk from '@/assets/elon_musk.jpeg'

const items = [
  {
    color: 'red-lighten-2',
    icon: 'mdi-star',
    title: 'Grado Medio (SMX)',
    text: 'Este estuvo guapo',
    date: '2020/22',
    image: elonMusk
  },
  {
    color: 'purple-lighten-2',
    icon: 'mdi-book-variant',
    title: 'Grado Superior (DAM)',
    text: 'Este lo estuvo más',
    date: '2022/24',
    image: elonMusk
  },
  {
    color: 'green-lighten-1',
    icon: 'mdi-airballoon',
    title: 'Especialización (IA y Big Data)',
    text: 'Este está siendo flipante',
    date: '2024/25',
    image: elonMusk
  }
]
</script>

<template>

  <div id="frame">

    <!-- Timeline -->
    <v-timeline direction="horizontal">
      <!-- Bucle que saca todas las cards de items -->
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :dot-color="item.color"
        :icon="item.icon"
        fill-dot
      >
        <!-- La carta en sí -->
        <v-card class="mx-auto" max-width="340">

          <!-- Título de la carta -->
          <v-card-title :class="['text-h6', `bg-${item.color}`]">
            {{ item.title }}
          </v-card-title>

          <!-- Subtítulo de la carta -->
          <v-card-subtitle :class="['text-body', `bg-${item.color}`]">
            {{ item.date }}
          </v-card-subtitle>

          <!-- Imagen ajustada con v-img -->
          <v-img
            :src="item.image"
            height="100px"
            cover
            class="rounded-t"
          ></v-img>

          <!-- Texto de la carta -->
          <v-card-text class="bg-white text--primary">
            <p>
              {{ item.text }}
            </p>

            <!-- Botón de la carta -->
            <v-btn :color="item.color" variant="outlined">
              Más Info
            </v-btn>

          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>
