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

    <!-- Imagen Central -->
    <v-row>
      <v-img width="60px" height="250px" cover rounded="xl" :src="profile_photo" style="margin-bottom: 4%"></v-img>
    </v-row>

    <v-row>

      <v-col>
        <!-- Título -->
        <v-row style="padding-bottom: 4%">
          <h3 class="text-h3">Hola, soy Ramón!</h3>
        </v-row>

        <!-- Introducción -->
        <v-row>
          <p>
            Buenas! Soy Ramón Martí y hago esta página para que veáis un poco lo que he aprendido
            estos últimos años aprendiendo informática (principalmente programación). Además de los
            sitios en los que he estado de prácticas.
          </p>
          <br />
          <p>
            Aquí tenéis mi Github para que podáis ver los proyectos personales y de clase. Y mi
            LinkedIn, para que veáis qué he estado haciendo últimamente.
          </p>
        </v-row>

        <!-- Redes sociales -->
        <v-row>
          <v-btn
            v-for="(item, i) in items"
            :key="i"
            :icon="item.icon"
            :href="item.url"
            style="margin: 5% 4% 0 0"
            target="_blank"
          ></v-btn>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
