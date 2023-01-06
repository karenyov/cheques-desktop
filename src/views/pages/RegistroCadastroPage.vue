<template>
    <v-container
      id="user-profile"
      fluid
      tag="section"
    >
      <v-row justify="center">
        <v-col
          cols="12"
          md="12"
        >
          <material-card>
            <template v-slot:heading>
              <div class="display-2 font-weight-light">
                Cadastro
              </div>
  
              <div class="subtitle-1 font-weight-light">
                Formulário de cadastro de registros.
              </div>
            </template>
  
              <v-form ref="form" v-model="valid">
                <v-container class="py-0">
                  <v-row>
                    <v-col
                      cols="12"
                      md="4"
                    >
                      <v-select
                          :items="banks"
                          item-value="id"
                          item-text="short_name"
                          label="Selecione o Banco"
                          solo>
                      </v-select>
                    </v-col>
    
                    <v-col
                      cols="12"
                      md="4"
                    >
                        <v-text-field
                          class="purple-input"
                          label="N Agência"
                          v-mask="['###', '###-#', '###-##']"
                          v-model="n_agencia"
                          :rules="n_agenciaRules"
                          required
                        />
                    </v-col>
    
                    <v-col
                      cols="12"
                      md="4"
                    >
                      <v-text-field
                        label="Conta Corrente"
                        class="purple-input"
                        v-mask="['###-#', '####-#', '#####-#', '######-#']"
                      />
                    </v-col>
    
                    <v-col
                      cols="12"
                      md="6"
                    >
                      <v-text-field
                        label="Nome"
                        class="purple-input"
                      />
                    </v-col>
    
                    <v-col
                      cols="12"
                      md="6"
                    >
                      
                      <v-text-field
                          label="CNPJ/CPF"
                          class="purple-input"
                          v-mask="['###.###.###-##', '##.###.###/####-##']"
                        />                
                    </v-col>
    
                    <v-col cols="12">
                      <v-text-field
                        label="Telefone"
                        class="purple-input"
                        v-mask="['+55 (##) #####-####']"
                      />
                    </v-col>
    
                    <v-col
                      cols="12"
                      md="4"
                    >
                      <v-text-field 
                        label="0,00"
                        class="purple-input"
                        v-money="money"/>

                    </v-col>
    
                    <v-col
                      cols="12"
                      md="4"
                    >
                      <v-text-field
                        label="Data Vencimento"
                        class="purple-input"
                        type="date"
                      />
                    </v-col>
    
                    <v-col
                      cols="12"
                      md="4"
                    >
                      <v-text-field
                        class="purple-input"
                        label="Data Compensação"
                        type="date"
                      />
                    </v-col>
    
                    <v-col cols="12">
                      <v-textarea
                        class="purple-input"
                        label="Observação"
                        value=""
                      />
                    </v-col>
    
                    <v-col
                      cols="12"
                      class="text-right"
                    >
                      <v-btn
                        color="success"
                        class="mr-4"
                       :disabled="!valid"
                       @click="onSubmit"
                      >
                        Salvar
                      </v-btn>

                      <v-btn @click="clear">
                        Limpar
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
          </material-card>
        </v-col>

      </v-row>
    </v-container>
  </template>
  
<script>
    import { BankService } from '@/services/BankService';

    import {VMoney} from 'v-money';
    import {mask} from 'vue-the-mask';

    export default {
      name: 'RegistroCadastroPage',
      components: {
        MaterialCard: () => import('../../components/base/MaterialCard')
      },
      data: () => ({
          banks: [],
          valid: false,
          n_agencia: '',
          n_agenciaRules: [
              (v) => !!v || 'O campo N Agência é obrigatório',
          ],
          money: {
            decimal: ',',
            thousands: '.',
            prefix: 'R$ ',
            suffix: '',
            precision: 2,
            masked: false
          }
        }),
      created : async function () {
        try {
          let response = await BankService.get();
          this.banks = response;
        }
        catch (error) {
          this.errorMessage = error;
          console.log(error);
        }
      },
      methods: {
        onSubmit(e) {
          if (this.$refs.form.validate()) {
            console.log('form')

          }

        },
        clear () {
          this.n_agencia = '';
          this.$refs.observer.reset()
        },
      },
      directives: {money: VMoney, mask}
    }
</script>