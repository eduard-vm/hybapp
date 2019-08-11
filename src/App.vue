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
          <router-link class="menu-item" to="/">Home</router-link>
          <router-link class="menu-item" to="/about">About</router-link>
        </div>
      </v-ons-splitter-side>
      <v-ons-splitter-content>
        <transition :name="transitionName">
          <router-view />
        </transition>
      </v-ons-splitter-content>
    </v-ons-splitter>
  </div>
</template>

<script>
export default {
  name: 'app',

  provide() {
    const vm = this;
    return {
      openSplitterSide() {
        vm.splitterSideOpen = true;
      },
    };
  },

  data() {
    return {
      transitionName: 'slide-right',
      splitterSideOpen: false,
    };
  },

  watch: {
    $route(to, from) {
      this.splitterSideOpen = false;
      if (from) {
        const toDepth = to.path.split('/').length;
        const fromDepth = from.path.split('/').length;

        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
      }
    },
  },
};
</script>
<style scoped lang="scss">
  .slide-left-enter-active,
  .slide-left-leave-active,
  .slide-right-enter-active,
  .slide-right-leave-active {
    transition-duration: 0.5s;
    transition-property: height, opacity, transform;
    transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
    overflow: hidden;
    will-change: opacity, transform;
  }

  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    transform: translate(100%, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    transform: translate(-100%, 0);
  }
</style>

<style lang="scss">
  .menu {
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding: 30px 20px;
    box-sizing: border-box;
  }

  .menu-item {
    height: 44px;
    display: block;
    line-height: 32px;
    text-decoration: none;
    text-transform: uppercase;
    color: #454545;
  }
</style>
