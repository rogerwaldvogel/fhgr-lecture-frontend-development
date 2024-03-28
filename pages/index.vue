<template>
  <!-- https://nuxt.com/docs/guide/directory-structure/pages -->
  <NuxtLayout name="default-layout">
    <!-- Komponente benötigt kein import in script. Wird automatisch von nuxt importiert -->
    <header-example></header-example>
    <UCard id="data-table-container">
      <UTable id="data-table" :rows="tableData"/>
    </UCard>
  </NuxtLayout>
</template>

<script setup lang="js">
const tableData = ref([]);
const client = useSupabaseClient();

await useAsyncData('data', async () => {
  const {data, error} = await client.from('data')
      .select('*')
      .limit(100);
  if (data) {
    tableData.value = data;
  } else {
    console.error('Error when fetching the data:', error);
  }
});

</script>

<style lang="css" scoped>

#data-table-container {
  margin-top: 32px;
}

#data-table {
  max-height: 500px;
}
</style>