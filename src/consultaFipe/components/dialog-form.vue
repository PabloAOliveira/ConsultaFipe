<template>
  <v-container>
    <v-dialog
      @keydown.esc="controller.dialogConsultar.value = false"
      persistent
      width="800"
      v-model="controller.dialogConsultar.value"
    >
      <v-card>
        <v-card-title class="pa-0">
          <v-toolbar
            flat
            dense
            class="white--white"
            color="blue"
            title="Selecione a Marca, Modelo e Ano do Veículo"
          >
          </v-toolbar>
        </v-card-title>
        <v-card-text>
          <v-autocomplete
            label="Selecione a marca do veículo"
            :items="controller.linhas.value"
            item-title="nome"
            v-model="controller.selecionado.value"
            return-object
            @update:modelValue="controller.selecionouMarca()"
          >
          </v-autocomplete>
          
          <v-autocomplete
            label="Selecione o modelo do veículo"
            :items="controller.linhasModelo.value"
            item-title="nome"
            v-model="controller.selecionadoModelo.value"
            return-object
            :disabled="!controller.selecionado.value"
            @update:modelValue="controller.selecionouModelo()"
          >
          </v-autocomplete>

          <v-autocomplete
            label="Selecione o Ano do veículo"
            :items="controller.linhasAno.value"
            item-title="nome"
            v-model="controller.selecionadoAno.value"
            return-object
            :disabled="!controller.selecionadoModelo.value"
            @update:modelValue="controller.selecionouAno()"
          >
          </v-autocomplete>
        </v-card-text>
        <v-divider></v-divider>

        <v-card class="mx-auto" v-if="controller.selecionadoAno.value">
          <v-card-text>
            <div>
              Código FIPE: {{ controller.valorVeiculo.value.CodigoFipe }}
            </div>
            <p class="text--h4 text--primary">
              Valor: {{ controller.valorVeiculo.value.Valor }}
            </p>
            <p class="text-h6 text--primary">
              Marca e Modelo: {{ controller.valorVeiculo.value.Marca }} -
              {{ controller.valorVeiculo.value.Modelo }}
            </p>
            <div class="text--primary">
              Ano: {{ controller.valorVeiculo.value.AnoModelo }} <br />
              Combustível: {{ controller.valorVeiculo.value.Combustivel }}
              <br />
            </div>
            <p class="text-h6">
              Mês Referência: {{ controller.valorVeiculo.value.MesReferencia }}
            </p>
          </v-card-text>
        </v-card>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn outlined color="red" @click="controller.limpar()">Sair</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
const { controller } = defineProps({
  controller: { type: Object, required: true },
});
</script>
