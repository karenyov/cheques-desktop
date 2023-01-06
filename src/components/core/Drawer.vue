<template>
    <v-navigation-drawer
      id="core-navigation-drawer"
      v-model="drawer"
      :dark="barColor !== 'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)'"
      :expand-on-hover="expandOnHover"
      :right="$vuetify.rtl"
      :src="barImage"
      mobile-breakpoint="800"
      app
      width="260"
      v-bind="$attrs"
    >
      <template v-slot:img="props">
        <v-img
          :gradient="`to bottom, ${barColor}`"
          v-bind="props"
        />
      </template>
  
      <v-divider class="mb-1" />
  
      <v-list
        dense
        nav
      >
        <v-list-item>

          <v-list-item-content>
            <v-list-item-title
              class="display-1"
              v-text="profile.title"
            />
          </v-list-item-content>
        </v-list-item>
      </v-list>
  
      <v-divider class="mb-2" />
  
      <v-list
        expand
        nav
      >
        <!-- Style cascading bug  -->
        <!-- https://github.com/vuetifyjs/vuetify/pull/8574 -->
        <div />
  
        <template v-for="(item, i) in computedItems">
          <item-group
            v-if="item.children"
            :key="`group-${i}`"
            :item="item"
          >
            <!--  -->
          </item-group>
  
          <item-base
            v-else
            :key="`item-${i}`"
            :item="item"
          />
        </template>
  
        <!-- Style cascading bug  -->
        <!-- https://github.com/vuetifyjs/vuetify/pull/8574 -->
        <div />
      </v-list>

    </v-navigation-drawer>
  </template>
  
  <script>
    // Utilities
    import {
      mapState,
    } from 'vuex'
    export default {
      name: 'DashboardCoreDrawer',
      props: {
        expandOnHover: {
          type: Boolean,
          default: false,
        },
      },
      components: {
        ItemBase: () => import('../../components/base/ItemBase'),
        ItemGroup: () => import('../../components/base/ItemGroup'),
      },
      data: () => ({
        items: [
          {
            icon: 'mdi-view-dashboard',
            title: 'dashboard',
            to: '/',
          },
          {
            icon: 'mdi-account',
            title: 'Usuário',
            to: '/login',
          },
          {
            icon: 'mdi-clipboard-text',
            title: 'Registros',
            to: '/pages/registros', 
          }
        ],
      }),
      computed: {
        ...mapState(['barColor', 'barImage']),
        drawer: {
          get () {
            return this.$store.state.drawer
          },
          set (val) {
            this.$store.commit('SET_DRAWER', val)
          },
        },
        computedItems () {
          return this.items.map(this.mapItem)
        },
        profile () {
          return {
            avatar: true,
            title: 'Menu',
          }
        },
      },
      methods: {
        mapItem (item) {
          return {
            ...item,
            children: item.children ? item.children.map(this.mapItem) : undefined,
            title: item.title,
          }
        },
      },
    }
  </script>