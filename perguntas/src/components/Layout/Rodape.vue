<template>
  <footer class="bg-primary text-white">
    <div class="row justify-around text-center">
      <div class="col-12 col-md-4 q-pa-lg q-ma-lg">
        <q-icon name="warning" class="text-red" style="font-size:5rem;" />
        <p>Nome da Empresa</p>
      </div>

      <div class="col-12 col-md-3 q-mt-lg">
        <h5>Sobre Nós</h5>
        <q-list  class="q-mb-lg">
          <q-btn flat label="Sobre nós"> </q-btn>
          <q-btn flat label="Carreira"> </q-btn>
          <q-btn flat label="Contato"> </q-btn>
          <q-btn flat label="Blog"> </q-btn>
        </q-list>
      </div>

      <div class="col-12 col-md-3 q-mt-lg">
        <h5>Ajuda</h5>
        <q-list class="q-mb-lg">
          <q-btn flat label="Ajuda"> </q-btn>
          <q-btn flat label="Regulamento"> </q-btn>
          <q-btn flat label="Anuncio"> </q-btn>
          <q-btn flat label="Politica de privacidade"> </q-btn>
        </q-list>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  // name: 'ComponentName',
  data() {
    return {};
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
footer {
  font-family: "Roboto Mono", monospace;
  color: white;
} 
</style>
