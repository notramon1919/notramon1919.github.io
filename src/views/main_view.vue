<script setup>
// Desktop
import PresentacionComponent_desktop from '@/components/desktop_components/presentacionComponent_desktop.vue'
import NavBarComponent_desktop from '@/components/desktop_components/navBarComponent_desktop.vue'
import HistorialAcademicoComponent_desktop from '@/components/desktop_components/historialAcademicoComponent_desktop.vue'
import CompetenciasComponent_desktop from '@/components/desktop_components/competenciasComponent_desktop.vue'
import ExperienciaLaboral_desktop from '@/components/desktop_components/experienciaLaboral_desktop.vue'

// Phone
import ExperienciaLaboral_phone from '@/components/phone_components/experienciaLaboral_phone.vue'
import CompetenciasComponent_phone from '@/components/phone_components/competenciasComponent_phone.vue'
import HistorialAcademicoComponent_phone from '@/components/phone_components/historialAcademicoComponent_phone.vue'
import NavBarComponent_phone from '@/components/phone_components/navBarComponent_phone.vue'
import PresentacionComponent_phone from '@/components/phone_components/presentacionComponent_phone.vue'

const phoneSized = ['xs', 'sm', 'md']
</script>

<template>
  <!-- Primer Cuadrado Blanco (Frame) -->
  <PresentacionComponent_desktop v-if="!phoneSized.includes($vuetify.display.name)" />
  <PresentacionComponent_phone v-else />

  <!-- Segundo Frame -->
  <NavBarComponent_desktop v-if="!phoneSized.includes($vuetify.display.name)" />
  <NavBarComponent_phone v-else />

  <!-- Tercer Frame -->
  <HistorialAcademicoComponent_desktop v-if="!phoneSized.includes($vuetify.display.name)" />
  <HistorialAcademicoComponent_phone v-else />

  <!-- Cuarto Frame -->
  <ExperienciaLaboral_desktop v-if="!phoneSized.includes($vuetify.display.name)" />
  <ExperienciaLaboral_phone v-else />

  <!-- Quinto frame -->
  <CompetenciasComponent_desktop v-if="!phoneSized.includes($vuetify.display.name)" />
  <CompetenciasComponent_phone v-else />
</template>
