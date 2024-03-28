<template>
  <v-app>
    <v-app-bar app dark color="blue" clipped-left>
      <v-toolbar-title>Tabela Fipe Consultas</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row justify="center" align="center">
          <v-col xl="3" lg="3" md="6" sm="12" cols="12">
            <v-card elevation="9">
              <v-img
                class="white--text align-end"
                height="200px"
                width="355"
                src="https://cdn.pixabay.com/photo/2016/05/05/18/03/coupe-1374450_1280.jpg"
              ></v-img>
              <v-card-title>Carros</v-card-title>
              <v-card-subtitle>Consultar valores dos carros</v-card-subtitle>
              <v-card-actions>
                <v-btn
                  color="primary"
                  text
                  @click="controller.buscarMarcas('carros')"
                >
                  Consultar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col xl="3" lg="3" md="6" sm="12" cols="12">
            <v-card elevation="9">
              <v-img
                class="white--text align-end"
                height="200px"
                width="355px"
                src="https://www.yamaha-motor.com.br/file/v6456932777995145497/products/lateral-mtseries-mt07-321-abs-30085-fx01-img-01-v01-desktop.jpg"
              ></v-img>
              <v-card-title>Motos</v-card-title>
              <v-card-subtitle>Consultar valores das motos</v-card-subtitle>
              <v-card-actions>
                <v-btn
                  color="primary"
                  text
                  @click="controller.buscarMarcas('motos')"
                >
                  Consultar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col xl="3" lg="3" md="6" sm="12" cols="12">
            <v-card elevation="9">
              <v-img
                class="white--text align-end"
                height="200px"
                width="355px"
                src="https://img.freepik.com/fotos-premium/vista-frontal-de-um-caminhao-em-um-fundo-preto-generative-ai_887552-7178.jpg"
              >
              </v-img>
              <v-card-title>Caminhões</v-card-title>
              <v-card-subtitle class="pb-0">
                Consultar valores dos caminhões
              </v-card-subtitle>
              <v-card-actions>
                <v-btn
                  color="primary"
                  text
                  @click="controller.buscarMarcas('caminhoes')"
                >
                  Consultar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <dialog-form :controller="controller" />        

      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import DialogForm from "./dialog-form.vue"
const { controller } = defineProps({
  controller: { type: Object, required: true },
});
</script>

<style></style>
