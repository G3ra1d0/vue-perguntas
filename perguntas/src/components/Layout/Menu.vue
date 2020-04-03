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
            Toolbar
          </q-toolbar-title>

          <q-btn size="15px" color="primary" rounded label="Entrar" />
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
      search: ""
    };
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
    }
  }
};
</script>

<style >
.fixed {
  position: fixed;
  right: 0;
  left: 0;
}
</style>
