<template>
    <v-container
      id="dashboard"
      fluid
      tag="section"
    >
      <v-row>
        <v-col
          cols="12"
          sm="6"
          lg="3"
          v-for="(item, i) in items"
          :key="i"
        >
          <material-stats-card
            :color="item.color"
            :icon="item.icon"
            :title="item.title"
            :value="item.value"
            sub-icon="mdi-calendar"
            :sub-text="item.data"
          />
        </v-col>

      </v-row>
    </v-container>
  </template>
  
  <script>
    export default {
      name: 'DashboardDashboard',
      components: {
        MaterialStatsCard: () => import('../components/base/MaterialStatsCard'),
      },
      data: () => ({
        items: [
          {
            color: 'success',
            icon: 'mdi-credit-card-check-outline',
            title: 'Compensado',
            value: '245',
            data: '12/12/2020'
          },
          {
            color: 'error',
            icon: 'mdi-credit-card-remove-outline',
            title: 'Vencido',
            value: '75.521',
            data: '12/12/2020'
          },
          {
            color: 'orange',
            icon: 'mdi-credit-card-clock-outline',
            title: 'Em Aberto',
            value: '0',
            data: '12/12/2020'
          },
          {
            color: 'info',
            icon: 'mdi-credit-card-multiple-outline',
            title: 'Total',
            value: '0',
            data: '12/12/2020'
          },
        ],
      }),

    }
  </script>