<script>
  import PresentacionComponent from '@/components/presentacionComponent.vue'
  import NavBarComponent from '@/components/navBarComponent.vue'
  import HistorialAcademicoComponent from '@/components/historialAcademicoComponent.vue'
  import { defineComponent } from 'vue'

  export default defineComponent({
    components: { PresentacionComponent, NavBarComponent, HistorialAcademicoComponent }
  })
</script>

<template>

  <!-- Spacers -->
  <br>
  <br>

  <!-- Primer Cuadrado Blanco (Frame) -->
  <PresentacionComponent/>

  <!-- Segundo Frame -->
  <NavBarComponent/>

  <!-- Tercer Frame -->
  <HistorialAcademicoComponent/>

</template>
