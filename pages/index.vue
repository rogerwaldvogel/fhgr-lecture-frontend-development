<template>
  <!-- https://nuxt.com/docs/guide/directory-structure/pages -->
  <NuxtLayout name="default-layout">
    <UCard class="mt-10">
      <template #header>
        <div class="flex justify-between">
          <h1>Welcome to FHGR Frontend Development Lectures</h1>
          <ColorScheme>
            <USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']"/>
          </ColorScheme>
        </div>
      </template>
      <UButton icon="i-heroicons-book-open" to="https://ui.nuxt.com" target="_blank">Open Nuxt UI Documentation
      </UButton>
    </UCard>
    <UCard class="mt-10">
      <UTable id="data-table" :rows="tableData"/>
    </UCard>
  </NuxtLayout>
</template>

<script setup lang="ts">
const tableData = ref([]);
const client = useSupabaseClient();

await useAsyncData('data', async () => {
  const {data, error} = await client.from('data')
    .select('*')
    .limit(100);
  if (data) {
    tableData.value = data;
  } else {
    console.error('Fehler beim Abrufen der Daten:', error);
  }
});

</script>

<style lang="css" scoped>

#data-table {
  max-height: 500px;
}
</style>