<template>
  <!-- https://nuxt.com/docs/guide/directory-structure/pages -->
  <NuxtLayout name="default-layout">
    <!-- Komponente benötigt kein import in script. Wird automatisch von nuxt importiert -->
    <header-example></header-example>
    <UCard id="data-table-container">
      <UTable id="data-table" :rows="store.tableData"/>
    </UCard>
  </NuxtLayout>
</template>

<script setup lang="js">
import {useWebsiteStore} from "~/stores/website.js";

const store = useWebsiteStore()

await callOnce(store.fetchData)

</script>

<style lang="css" scoped>

#data-table-container {
  margin-top: 32px;
}

#data-table {
  max-height: 500px;
}
</style>