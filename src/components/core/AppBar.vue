<template>
    <v-app-bar
      id="app-bar"
      absolute
      app
      color="transparent"
      flat
      height="75"
    >

      <v-spacer />

      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-width="200"
        offset-x
      >
        <template v-slot:activator="{ attrs, on }">
          <v-btn
            class="ml-2"
            min-width="0"
            text
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </template>

        <v-list
          :tile="false"
          nav
        >
          <div>

            <v-list-item
              v-for="([title, icon], i) in items"
              :key="i"
              link
            >
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>

          </div>
        </v-list>

      </v-menu>
    </v-app-bar>
  </template>

<script>
import { mapState, mapMutations } from 'vuex'
import Vue from "vue";

export default Vue.extend({
  name: "DashboardCoreAppBar",
  components: {

  },
  data: () => ({
    items: [
      ['Sair', 'mdi-account-multiple-outline'],
      ['Configurações', 'mdi-cog-outline'],
    ]
  }),
});
</script>
