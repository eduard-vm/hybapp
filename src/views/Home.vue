<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">Home Page</div>
      <div class="right">
        <v-ons-toolbar-button icon="ion-navicon, material: md-menu"></v-ons-toolbar-button>
      </div>
    </v-ons-toolbar>
    <div class="content">
      <h2>Header 1</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
        saepe sunt cupiditate eius rerum numquam nobis ducimus iusto ipsam repudiandae
        obcaecati, culpa rem natus nesciunt vero officiis qui sapiente soluta!
      </p>
      <v-ons-list>
        <v-ons-list-item v-for="(label, idx) of items" :key="idx">
          <div class="center">
            {{ label }}
          </div>
        </v-ons-list-item>
      </v-ons-list>
    </div>
  </v-ons-page>
</template>

<script>
export default {
  name: 'home',

  data() {
    return {
      items: [...Array(100)].map((_, i) => `label ${i + 1}`),
    };
  },
};
</script>

<style lang="scss">
  .content {
    padding: 20px;
    box-sizing: border-box;
  }
</style>
