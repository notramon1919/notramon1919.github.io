<script setup>
import PresentacionComponent_desktop from '@/components/presentacionComponent.vue'
import NavBarComponent from '@/components/navBarComponent.vue'
import HistorialAcademicoComponent from '@/components/historialAcademicoComponent.vue'
import LenguajesComponent from '@/components/lenguajesComponent.vue'
import ExperienciaLaboral from '@/components/experienciaLaboral.vue'

</script>

<template>
  <!-- Primer Cuadrado Blanco (Frame) -->
  <PresentacionComponent_desktop/>

  <!-- Segundo Frame -->
  <NavBarComponent/>

  <!-- Tercer Frame -->
  <HistorialAcademicoComponent/>

  <!-- Cuarto Frame -->
  <ExperienciaLaboral/>

  <!-- Quinto Frame -->
  <LenguajesComponent/>
</template>
