<template>
  <q-page>
    <section class="banner1">
      <h2>Precisa de Ajuda ?</h2>

      <p>
        Não deixe de perguntar! Sempre existe uma boa alma que esta disponivel
        para te ajudar!
      </p>

      <q-btn
        unelevated
        rounded
        class="q-pa-sm"
        style="font-size: 15px;background: #FF0080; "
        color="indigo"
        text-color="white"
        label="Faça uma Pergunta agora Mesmo!"
      />
    </section>

    <section class="banner2">
      <h3>Como esta a comunidade ?</h3>

      <div class="row justify-around">
        <div
          class="col-10 col-md-3 q-mb-xl q-pa-xl bg-primary text-center text-white"
        >
          <q-icon
            name="mdi-help-circle-outline"
            class="text-white"
            style="font-size: 4rem;"
          />
          <div class="text-h5">
            Foram feita + 1.500 perguntas na plataforma.
          </div>
        </div>

        <div
          class="col-10 col-md-3 q-mb-xl q-pa-xl bg-primary text-center text-white"
        >
          <q-icon
            name="mdi-thumb-up"
            class="text-white"
            style="font-size: 4rem;"
          />
          <div class="text-h5">Foram respondida + 1.000 perguntas.</div>
        </div>

        <div
          class="col-10 col-md-3 q-mb-xl q-pa-xl bg-primary text-center text-white"
        >
          <q-icon
            name="mdi-alert-circle"
            class="text-white"
            style="font-size: 4rem;"
          />
          <div class="text-h5">
            Existe + 500 perguntas em aberto precisando de sua ajuda.
          </div>
        </div>
      </div>
    </section>

  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  computed: {
    tamanho() {
      return window.innerHeight;
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100&display=swap");
html {
  width: 100%;
  height: 100%;
}
.banner1 {
  width: 100%;
  height: 100vh;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.banner1 h2 {
  font-family: "Roboto Mono", monospace;
}
.banner1 p {
  padding-left: 10px;
  font-size: 20px;
  font-family: "Roboto Mono", monospace;
  margin-bottom: 25px;
}

.banner2 h3 {
  text-align: center;
  font-family: "Roboto Mono", monospace;
}

</style>
