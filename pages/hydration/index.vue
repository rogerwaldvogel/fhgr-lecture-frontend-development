<template>
  <!-- https://nuxt.com/docs/guide/directory-structure/pages -->
  <NuxtLayout name="default-layout">
    Hydration Missmatch Beispiele <br>
    Aktuelle Zeit: {{ new Date().toISOString() }} <br><br>

    <p>
      <p>Hydration Missmatch p element</p>
    </p>

    <pre><code>
&lt;p&gt;
    &lt;p&gt;Hydration Missmatch&lt;/p&gt;
&lt;/p&gt;

Wird vom Browser so umgewandelt

&lt;p&gt;&lt;/p&gt;
&lt;p&gt;Hydration Missmatch&lt;/p&gt;
&lt;p&gt;&lt;/p&gt;
    </code></pre>

    <client-only>
      Wird nur im Browser gerendert und führt zu keine Hydration Mismatch
    </client-only>
  </NuxtLayout>
</template>

<script setup lang="js">

</script>

<style lang="css" scoped>
pre {
  background-color: #f4f4f4;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
