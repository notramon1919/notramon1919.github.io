<script setup>
  import elonMusk from '@/assets/elon_musk.jpeg'
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
          :src=elonMusk
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
            veritatis voluptates! Asperiores debitis, deleniti distinctio, ducimus fuga iusto omnis quibusdam quis quo
            reprehenderit, veniam voluptate.</p>
        </v-row>

      </v-col>

    </v-row>
  </div>
</template>
