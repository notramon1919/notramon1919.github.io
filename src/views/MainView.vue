<script>
import PresentacionComponent from '@/components/presentacionComponent.vue'
import NavBarComponent from '@/components/navBarComponent.vue'
import HistorialAcademicoComponent from '@/components/historialAcademicoComponent.vue'
import ExperienciaLaboral from '@/components/experienciaLaboral.vue'
import CompetenciasComponent from '@/components/competenciasComponent.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: { CompetenciasComponent, ExperienciaLaboral, PresentacionComponent, NavBarComponent, HistorialAcademicoComponent }
})
</script>

<template>

  <!-- Spacers -->
  <br>
  <br>

  <!-- Primer Cuadrado Blanco (Frame) -->
  <PresentacionComponent />

  <!-- Segundo Frame -->
  <NavBarComponent />

  <!-- Tercer Frame -->
  <HistorialAcademicoComponent />

  <!-- Cuarto Frame -->
  <ExperienciaLaboral />

  <!-- Quinto frame -->
  <CompetenciasComponent />

</template>
