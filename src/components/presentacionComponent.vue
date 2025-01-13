<script setup>
import profile_photo from '@/assets/yo.jpg'

const items = [
  {
    icon: 'mdi-github',
    url: 'https://github.com/notramon1919',
  },
  {
    icon: 'mdi-linkedin',
    url: 'https://linkedin.com/in/ramón-martí-adsuara',
  },
  {
    icon: 'mdi-account-file-text',
    url: 'https://drive.google.com/file/d/1OqO2tIO6Msf27IYRhuBglEG7wuW3uacL/view?usp=sharing',
  },
]
</script>

<template>
  <div class="main_frame" id="presentacion">
    <v-row justify="center" align="center">

      <!-- Columna 1 -->
      <v-col>
        <v-img :width="300" :height="400" cover rounded="xl" :src="profile_photo"></v-img>
      </v-col>

      <!-- Columna 2 -->
      <v-col class="text-left">
        <!-- Titulo -->
        <v-row style="padding-bottom: 20px">
          <h3 class="text-h3">Hola, soy Ramón!</h3>
        </v-row>

        <!-- Introduccion -->
        <v-row>
          <p>
            Buenas! Soy Ramón Martí y hago esta página para que veais un poco lo que he aprendido
            estos ultimos años aprendiendo informática (principalmente programación). Además de los
            sitios en los que he estado de prácticas.
          </p>
          <br />
          <p>
            Aquí teneis mi Github para que podais ver los proyectos personales y de clase. Y mi
            Linkedin, para que veais que he estado haciendo ultimamente.
          </p>
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
