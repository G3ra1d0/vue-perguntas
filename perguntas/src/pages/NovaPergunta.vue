<template>
  <q-page padding>
    <div class="q-pa-md q-gutter-sm">
      <q-input
        outlined
        bg-color="white"
        v-model="titulo"
        label="Titulo"
        hint="Descreve o Titulo da sua Pergunta"
      />

      <Editor @texto="descricao = $event" />
      <q-input
        @keyup.enter="novaTag(tag)"
        outlined
        v-model="tag"
        label="Tags"
        hint="Coloque marcação na sua pergunta isso ajuda a outras pessoas encronta sua duvida"
        bg-color="white"
      >
        <template>
          <q-btn round flat icon="send" @click="novaTag(tag)" />
        </template>
      </q-input>

      <div class="q-pa-md row">
        <div class="q-gutter-xs " v-for="chip in tags" :key="chip">
          <q-chip
            @remove="removeChip(chip)"
            removable
            color="primary"
            text-color="white"
            :label="chip"
            :title="`Excluir ${chip}`"
          />
        </div>
      </div>

      <div class="row justify-center">
        <q-btn
          @click="salvar"
          class="col-12 col-sm-2 q-ma-lg"
          color="primary"
          label="Salvar"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import Editor from "../components/Editor.vue";
export default {
  // name: 'PageName',
  components: { Editor },
  data() {
    return {
      titulo: "",
      tag: "",
      tags: [],
      descricao: ""
    };
  },
  methods: {
    removeChip(e) {
      let indice = this.tags.indexOf(e);
      this.tags.splice(indice, 1);
    },
    novaTag(e) {
      this.tags.push(e);
      this.tag = "";
    },
    salvar() {
      this.$firebase
        .database()
        .ref("perguntas")
        .push({
          user: this.$store.getters["auth/getUserUid"],
          titulo: this.titulo,
          tags: this.tags,
          descricao: this.descricao
        });
    }
  }
};
</script>
