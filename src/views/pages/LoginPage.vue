<template>
    <v-container
      id="user-profile"
      fluid
      tag="section"
    >
      <v-row justify="center" style="margin-top: 100px;">
        <v-col
          cols="6"
          md="6"
        >
          <material-card>
            <template v-slot:heading>
              <div class="display-2 font-weight-light">
                Login
              </div>
  
              <div class="subtitle-1 font-weight-light">
                Formulário de Login.
              </div>
            </template>
  
            <v-form ref="form" v-model="valid">
              <v-container class="py-0">
                <v-row>

                  <v-col
                    cols="12"
                    md="12"
                  >
                    <v-text-field
                      label="Login"
                      class="purple-input"
                      v-model="login"
                      :rules="loginRules"
                      required
                    />
                  </v-col>
  
                  <v-col
                    cols="12"
                    md="12"
                  >
                    <v-text-field
                      label="Senha"
                      class="purple-input"
                      type="password"
                      v-model="password"
                      :rules="passwordRules"
                      required
                    />
                  </v-col>

                  <v-col
                    cols="12"
                    md="12"
                  >
                    <v-checkbox
                      color="success"
                      v-model="remember_login"
                      label="Lembrar-me"
                      ></v-checkbox>

                  </v-col>

                  <v-row v-if="error">
                    <v-col
                      cols="12"
                      md="12"
                    >
                      <v-alert
                        dense
                        outlined
                        type="error"
                      >
                        {{ error }}
                      </v-alert>
                    </v-col>
                  </v-row>

                  <v-col
                    cols="12"
                    class="text-right"
                  >

                    <v-btn
                      color="success"
                      class="mr-0"
                      large
                      block
                      :disabled="!valid"
                      @click="onSubmit"
                    >
                      Entrar
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
    import { LoginService } from '@/services/LoginService';

    export default {
      name: 'LoginPage',
      components: {
        MaterialCard: () => import('../../components/base/MaterialCard'),
      },
      data: () => ({
        valid: false,
        error: false,
        login: '',
        password: '',
        remember_login: false,
        loginRules: [
          (v) => !!v || 'O campo Login é obrigatório',
        ],
        passwordRules: [
          (v) => !!v || 'O campo Senha é obrigatório',
        ],
      }),
      methods: {
        async onSubmit(e) {
          this.error = false;

          if (this.$refs.form.validate()) {

            try {
              let response = await LoginService.getLogin(this.login, this.password);

              if (response[0]?.id != undefined)  {
                this.$store.commit('isAuth', {
                    login: this.login,
                    password: this.password,
                    remember_login: this.remember_login
                })
                this.$router.push('/'); 

              } else {
                this.error = "Login e/ou Senha inválidos!" ;
              }
              
            }
            catch (error) {
              this.error = error;
              console.log(error);
            }
          }

        },
      }
    }
</script>