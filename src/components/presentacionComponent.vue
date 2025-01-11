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

    <v-row justify="center" align="center">

      <!-- Columna 1 -->
      <v-col>
        <v-img
          :width="300"
          :height="400"
          cover
          rounded="xl"
          :src=stock_image
        ></v-img>
      </v-col>

      <!-- Columna 2 -->
      <v-col class="text-left">

        <!-- Titulo -->
        <v-row style="padding-bottom: 20px;">
          <h3 class="text-h3"> Hola, soy Ramón! </h3>
        </v-row>

        <!-- Introduccion -->
        <v-row>
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam beatae minus molestias officia placeat
            veritatis voluptates! Asperiores debitis, deleniti distinctio, ducimus fuga iusto omnis quibusdam quis quo
            reprehenderit, veniam voluptate.</p>

          <br>

          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam beatae minus molestias officia placeat
            veritatis voluptates!</p>

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
