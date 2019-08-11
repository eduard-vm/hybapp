<template>
  <v-ons-page class="about">
    <v-ons-toolbar>
      <div class="left">
        <v-ons-toolbar-button @click="$router.go(-1)">
          <v-ons-icon size="18" icon="md-chevron-left" />
        </v-ons-toolbar-button>
      </div>
      <div class="center">Home Page</div>
    </v-ons-toolbar>
    <h2>This is an about page</h2>
  </v-ons-page>
</template>
