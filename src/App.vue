<template>
  <v-app>
    <dashboard-core-app-bar v-if="isAuth"/>
    <dashboard-core-drawer v-if="isAuth" />

    <v-main>
      <v-container fluid>
        <v-row class="fill-height">
          <v-col>
            <transition name="fade">
              <router-view></router-view>
            </transition>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <dashboard-core-footer />
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    DashboardCoreAppBar: () => import('./components/core/AppBar'),
    DashboardCoreDrawer: () => import('./components/core/Drawer'),
    DashboardCoreFooter: () => import('./components/core/Footer'),
  },
  data: () => ({
  }),
  computed : {
    isAuth() {
      return this.$store.state.isAuth;
    }
  }
};
</script>


