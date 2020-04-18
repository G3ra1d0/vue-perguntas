<template>
  <div>
    <q-header elevated class="bg-white text-grey-8 q-py-xs fixed">
      <template v-if="pesquisa">
        <q-input borderless v-model="search" class="q-ml-md" label="Search">
          <template v-slot:append>
            <q-icon
              name="clear"
              class="q-ma-md cursor-pointer"
              @click="offSearch"
            />
          </template>
        </q-input>
      </template>
      <template v-else>
        <q-toolbar class="text-primary">
          <q-btn
            flat
            round
            dense
            icon="menu"
            @click="leftDrawerOpen = !leftDrawerOpen"
          />
          <q-toolbar-title>
            <router-link to="/" class="text-primary">
              Toolbar
            </router-link>
          </q-toolbar-title>
          <template v-if="uid">
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar.png" />
            </q-avatar>
            <q-btn-dropdown flat color="primary" label="Geraldo">
              <q-list>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Ver Perfil</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup to="/perfil">
                  <q-item-section>
                    <q-item-label>Editar Perfil</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="sair">
                  <q-item-section>
                    <q-item-label>Sair</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
            <q-btn
              size="15px"
              color="primary"
              rounded
              label="Faça Uma Pergunta"
            />
          </template>
          <template v-else>
            <q-btn
              to="/login"
              size="15px"
              color="primary"
              rounded
              label="Entrar"
            />
          </template>
          <q-btn flat dense class="q-ml-md" icon="search" @click="onSearch" />
        </q-toolbar>
      </template>
    </q-header>

    <!-- <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
      :width="240"
    >
    </q-drawer> -->
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      pesquisa: false,
      leftDrawerOpen: false,
      search: "",
      uid: null,
    };
  },
  computed: {
    // uid() {
    //   return this.$store.getters["auth/getUserUid"];
    // },
  },
  methods: {
    onSearch() {
      this.pesquisa = true;
      setTimeout(() => {
        document.querySelector("header  input").focus();
      }, 10);
    },
    offSearch() {
      this.pesquisa = false;
      this.search = "";
    },
    async sair() {
      await this.$firebase.auth().signOut();
      this.$store.dispatch("auth/setUser", "");
      localStorage.removeItem("userUid");
      this.$router.push({ path: "/login" });
    },
  },
  mounted() {
    this.$firebase.auth().onAuthStateChanged((user) => {
      // user.uid
      this.uid = user ? user.uid : null;
      // this.$store.dispatch("auth/setUser", user);

      // if(uid){
      //   this.$router.push({ path: "/"})
      // }else{
      //   this.$router.push({ path: "/login"})
      // }
    });
  },
};
</script>

<style>
.fixed {
  position: fixed;
  right: 0;
  left: 0;
}

a {
  text-decoration: none;
}
</style>
