<script setup>
import stock_image from '@/assets/stock_image.jpg'

const items = [
  {
    color: 'red-lighten-2',
    icon: 'mdi-desktop-classic',
    title: 'Grado Medio (SMX)',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium excepturi ipsa nostrum possimus quis repellendus suscipit ullam velit?.',
    date: '2020/22',
    image: stock_image,
    masInfoURL: 'https://ceice.gva.es/es/web/formacion-profesional/publicador-ciclos/-/asset_publisher/FRACVC0hANWa/content/ciclo-formativo-sistemas-microinformatico-y-redes'
  },
  {
    color: 'purple-lighten-2',
    icon: 'mdi-code-parentheses',
    title: 'Grado Superior (DAM)',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium excepturi ipsa nostrum possimus quis repellendus suscipit ullam velit?.',
    date: '2022/24',
    image: stock_image,
    masInfoURL: 'https://ceice.gva.es/es/web/formacion-profesional/publicador-ciclos/-/asset_publisher/FRACVC0hANWa/content/ciclo-formativo-desarrollo-de-aplicaciones-multiplataforma'
  },
  {
    color: 'green-lighten-1',
    icon: 'mdi-head-snowflake',
    title: 'Especialización (IA y Big Data)',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium excepturi ipsa nostrum possimus quis repellendus suscipit ullam velit?.',
    date: '2024/25',
    image: stock_image,
    masInfoURL: 'https://ceice.gva.es/va/web/formacion-profesional/publicador-de-dossier-de-cursos/-/asset_publisher/R4uiU2vzyVnY/content/curs-d-especialitzacio-desenvolupament-de-videojocs-i-realitat-virtual?_com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_R4uiU2vzyVnY_assetEntryId=358170454&_com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_R4uiU2vzyVnY_redirect=https%3A%2F%2Fceice.gva.es%2Fes%2Fweb%2Fformacion-profesional%2Fpublicador-de-dossier-de-cursos%3Fp_p_id%3Dcom_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_R4uiU2vzyVnY%26p_p_lifecycle%3D0%26p_p_state%3Dnormal%26p_p_mode%3Dview%26_com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_R4uiU2vzyVnY_cur%3D0%26p_r_p_resetCur%3Dfalse%26_com_liferay_asset_publisher_web_portlet_AssetPublisherPortlet_INSTANCE_R4uiU2vzyVnY_assetEntryId%3D358170454'
  }
]
</script>

<template>

  <div class="historial_academico">

    <h1 id="historial_academico"> Historial Académico </h1>

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
        <v-card max-width="600">

          <!-- Título de la carta -->
          <v-card-title :class="['text-h6', `bg-${item.color}`]">
            {{ item.title }}
          </v-card-title>

          <!-- Subtítulo de la carta -->
          <v-card-subtitle :class="['text-body', `bg-${item.color}`]">
            {{ item.date }}
          </v-card-subtitle>

          <!-- Imagen -->
          <v-img
            :src="item.image"
            height="100px"
            cover
          ></v-img>

          <!-- Texto de la carta -->
          <v-card-text class="bg-white text--primary">
            <p>
              {{ item.text }}
            </p>

            <!-- Botón de la carta -->
            <v-btn :color="item.color"
                   variant="outlined"
                   style="margin-top: 10px"
                   :href="item.masInfoURL"
                   target="_blank">
              Más Info
            </v-btn>

          </v-card-text>

        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>
