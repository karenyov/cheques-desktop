<template>
  <v-container
    fluid
    tag="section"
  >
    <v-component
      heading="Registros Anual"
      subTitle="Registros de cheques por ano."
    />

    <material-card
      icon="mdi-clipboard-text"
      title="Cheques"
      class="px-5 py-3"
    >

    <div class="text-right" style="margin-top: -50px;">
      <v-btn
        class="mx-2"
        fab
        dark
        small
        color="success"
        :to="{ name: 'registros_cadastro'}"
      >
        <v-icon dark>
          mdi-plus
        </v-icon>
      </v-btn>
    </div>

    <v-card-text>

      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      >
      </v-text-field>
      
        <v-data-table
          :headers="headers"
          :items="items"
          :search="search"
          :sort-by="['banco']"
          multi-sort
        >
        <template v-slot:[`item.status`]="{ item }">
          <v-chip
            :color="getColor(item.status)"
            dark>
            {{ item.status }}
           </v-chip>
        </template>

        </v-data-table>
      </v-card-text>

      </material-card>

  </v-container>
</template>


<script>
  export default {
    name: 'RelatorioPage',
    components: {
      MaterialCard: () => import('../../components/base/MaterialCard'),
      VComponent: () => import('../../components/base/VComponent')
    },
    data: () => ({
      search: '',
      headers: [
          {
            text: 'Banco',
            value: 'banco',
          },
          {
            text: 'N Agência',
            value: 'agencia',
            align: 'right',
          },
          {
            text: 'Conta Corrente',
            value: 'conta_corrente',
            align: 'right',
          },
          {
            sortable: false,
            text: 'N Cheque',
            value: 'numero_cheque',
            align: 'right',
          },
          {
            sortable: false,
            text: 'Nome',
            value: 'nome',
            align: 'right',
          },
          {
            sortable: false,
            text: 'CNPJ/CPF',
            value: 'numero_documento',
            align: 'right',
          },
          {
            sortable: false,
            text: 'Telefone',
            value: 'telefone',
            align: 'right',
          },
          {
            sortable: false,
            text: 'Valor',
            value: 'valor',
            align: 'right',
          },
          {
            text: 'Vencimento',
            value: 'data_vencimento',
            align: 'right',
          },
          {
            text: 'Compensação',
            value: 'data_compensacao',
            align: 'right',
          },
          {
            sortable: false,
            text: 'Status',
            value: 'status',
            align: 'right',
          }
        ],
        items: [
          {
            banco: 'SANTANDER',
            agencia: '2845',
            conta_corrente: '0002656-5',
            numero_cheque: '2635',
            nome: 'Empresa X',
            numero_documento: '73.450.465/001-40',
            telefone: '62-2323-0000',
            valor: 'R$ 1.5000,00',
            data_vencimento: '10/12/2020',
            data_compensacao: '09/12/2020',
            status: 'Compensado' 
          },
          {
            banco: 'BANCO DO BRASIL',
            agencia: '2845',
            conta_corrente: '0002656-5',
            numero_cheque: '2635',
            nome: 'Empresa X',
            numero_documento: '73.450.465/001-40',
            telefone: '62-2323-0000',
            valor: 'R$ 1.5000,00',
            data_vencimento: '10/12/2020',
            data_compensacao: '09/12/2020',
            status: 'Em Aberto'
          },
          {
            banco: 'BANCO DO BRASIL',
            agencia: '2845',
            conta_corrente: '0002656-5',
            numero_cheque: '2635',
            nome: 'Empresa X',
            numero_documento: '73.450.465/001-40',
            telefone: '62-2323-0000',
            valor: 'R$ 1.5000,00',
            data_vencimento: '10/12/2020',
            data_compensacao: '09/12/2020',
            status: 'Vencido'
          },
          {
            banco: 'BANCO DO BRASIL',
            agencia: '2845',
            conta_corrente: '0002656-5',
            numero_cheque: '2635',
            nome: 'Empresa X',
            numero_documento: '73.450.465/001-40',
            telefone: '62-2323-0000',
            valor: 'R$ 1.5000,00',
            data_vencimento: '10/12/2020',
            data_compensacao: '09/12/2020',
            status: 'Compensado'
          },
          {
            banco: 'BANCO DO BRASIL',
            agencia: '2845',
            conta_corrente: '0002656-5',
            numero_cheque: '2635',
            nome: 'Empresa X',
            numero_documento: '73.450.465/001-40',
            telefone: '62-2323-0000',
            valor: 'R$ 1.5000,00',
            data_vencimento: '10/12/2020',
            data_compensacao: '09/12/2020',
            status: 'Vencido'
          },

        ],
    }),
    methods: {
      getColor (status) {
        if (status == 'Compensado') return 'success'
        else if (status == 'Vencido') return 'error'
        else if (status == 'Em Aberto') return 'orange'
        else return 'info'
      },
    },
  }
</script>