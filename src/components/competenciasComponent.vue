<script setup>
const items = [
  {
    title: "Java",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium excepturi ipsa nostrum possimus quis repellendus suscipit ullam velit?.",
    icon: "mdi-language-java"
  },
  {
    title: "Vue.js",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium excepturi ipsa nostrum possimus quis repellendus suscipit ullam velit?.",
    icon: "mdi-vuejs"
  },
  {
    title: "Python",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium excepturi ipsa nostrum possimus quis repellendus suscipit ullam velit?.",
    icon: "mdi-language-python"
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
