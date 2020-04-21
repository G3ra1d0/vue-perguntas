<template>
  <q-page padding>
    <main>
      <div class="row items-center justify-center">
        <div class="col-10 col-sm-4 q-ma-lg">
          <q-img ref="img" :src="photoURL" />
          <input
            ref="file"
            class="hidden"
            type="file"
            multiple="multiple"
            accept="image/*"
            @change="onFileChanged"
          />
          <q-btn
            class="full-width q-mt-lg"
            @click="onUpload"
            color="white"
            text-color="black"
            label="Muda foto de Perfil"
          />
        </div>
        <div class="col-12 col-sm-6">
          <q-input class="q-mb-lg" outlined v-model="nome" label="Nome" />
          <q-input class="q-mb-lg" outlined v-model="email" label="Email" />
          <q-input
            class="q-mb-lg"
            outlined
            v-model="trabalho"
            label="Trabalho"
          />
          <q-input class="q-mb-lg" outlined v-model="website" label="Website" />
          <q-input
            class="q-mb-lg"
            type="textarea"
            outlined
            v-model="bio"
            label="Bio"
          />
        </div>
        <q-btn
          @click="salvar"
          class="col-12 col-sm-2 q-ma-lg"
          color="primary"
          label="Salvar"
        />
      </div>
    </main>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data() {
    return {
      photoURL: "",
      nome: "",
      email: "",
      trabalho: "",
      website: "",
      bio: "",
      uid: "",
      user: "",
      file: ""
    };
  },

  methods: {
    onFileChanged(event) {
      // console.log(event);
      this.file = event.target.files[0];
      // console.log(this.$refs.img);

      var preview = this.$refs.img;
      var file = this.file;
      var reader = new FileReader();

      reader.onloadend = function() {
        preview.src = reader.result;
      };

      if (file) {
        reader.readAsDataURL(file);
      } else {
        preview.src = "";
      }
    },
    onUpload() {
      this.$refs.file.value = null;
      this.$refs.file.click();
    },
    async salvar() {
      await this.$axios.put(`users/${this.uid}.json`, {
        nome: this.nome,
        email: this.email,
        bio: this.bio,
        website: this.website,
        trabalho: this.trabalho,
        photoURL: this.$refs.img.src
      });

      // let photoPerfil = this.$refs.img.src;
      // let storage = this.$firebase.storage().ref();
      // await storage
      //   .child(`users/perfil/${this.uid}`)
      //   .putString(photoPerfil)
      //   .then(snapshot => {
      //     console.log(snapshot);
      //     console.log("Uploaded a blob or file!");
      //   });
    }
  },
  mounted() {
    let storeUser = this.$store.getters["auth/getUser"];
    console.log(storeUser);
    this.uid = storeUser.uid;
    this.email = storeUser.email;
    this.nome = storeUser.nome;
    this.bio = storeUser.bio;
    this.trabalho = storeUser.trabalho;
    this.website = storeUser.website;
    this.photoURL = storeUser.photoURL;
  }
};
</script>
