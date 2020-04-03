<template>
  <q-layout class="bg-grey-1">
    <Menu />

    <q-page-container>
      <router-view />
    </q-page-container>

    <Rodape />
  </q-layout>
</template>

<script>
import Menu from "../components/Layout/Menu.vue";
import Rodape from "../components/Layout/Rodape.vue";
export default {
  name: "Home",
  components: { Menu, Rodape },
  data() {
    return {
      links1: [
        { icon: "home", text: "Home" },
        { icon: "whatshot", text: "Trending" },
        { icon: "subscriptions", text: "Subscriptions" }
      ],
      links2: [
        { icon: "folder", text: "Library" },
        { icon: "restore", text: "History" },
        { icon: "watch_later", text: "Watch later" },
        { icon: "thumb_up_alt", text: "Liked videos" }
      ],
      links3: [
        { icon: fabYoutube, text: "YouTube Premium" },
        { icon: "local_movies", text: "Movies & Shows" },
        { icon: "videogame_asset", text: "Gaming" },
        { icon: "live_tv", text: "Live" }
      ],
      links4: [
        { icon: "settings", text: "Settings" },
        { icon: "flag", text: "Report history" },
        { icon: "help", text: "Help" },
        { icon: "feedback", text: "Send feedback" }
      ],
      buttons1: [
        { text: "About" },
        { text: "Press" },
        { text: "Copyright" },
        { text: "Contact us" },
        { text: "Creators" },
        { text: "Advertise" },
        { text: "Developers" }
      ],
      buttons2: [
        { text: "Terms" },
        { text: "Privacy" },
        { text: "Policy & Safety" },
        { text: "Test new features" }
      ]
    };
  },
  created() {
    this.fabYoutube = fabYoutube;
  }
};
</script>

<style></style>
