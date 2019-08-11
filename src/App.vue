<template>
  <div id="app">
    <v-ons-splitter>
      <v-ons-splitter-side
        swipeable
        width="300px"
        collapse=""
        side="left"
        :open.sync="splitterSideOpen"
      >
        <div class="menu">
        </div>
      </v-ons-splitter-side>
      <v-ons-splitter-content>
        <router-view />
      </v-ons-splitter-content>
    </v-ons-splitter>
  </div>
</template>

<script>
export default {
  name: 'app',

  data() {
    return {
      splitterSideOpen: false,
    };
  },
};
</script>

<style lang="scss">
  .menu {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
</style>
