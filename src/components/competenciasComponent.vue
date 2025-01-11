<script setup>
const items = [
  {
    title: "Java",
    description: "Me mola java",
    icon: "mdi-language-java"
  },
  {
    title: "Vue.js",
    description: "Tambien me mola vue",
    icon: "mdi-vuejs"
  },
  {
    title: "Python",
    description: "Tambien me mola python",
    icon: "mdi-language-python"
  },
  {
    title: "HTML y CSS",
    description: "Esto no me mola tanto",
    icon: "mdi-language-html5"
  },
]
</script>

<template>
  <div class="frame">
    <v-row>
      <v-col v-for="(item, i) in items" :key="i">

        <v-card
          class="mx-auto "
          :prepend-icon="item.icon"
          width="400"
        >
          <template v-slot:title>
            <span class="font-weight-black">{{ item.title }}</span>
          </template>

          <v-card-text class="bg-surface-light pt-4">
            {{ item.description }}
          </v-card-text>

        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>

</style>
