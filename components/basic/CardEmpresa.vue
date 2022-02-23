<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <v-card class="card-shadow">
          <v-img
            class="white--text align-end"
            height="200px"
            :src="empresa.img"
          >
            <v-card-title>{{ empresa.name }} </v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">
            {{ empresa.subtitle }}
          </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{ empresa.resume }}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="error" text :href="empresa.pagina">
              Detalhes
            </v-btn>
            <v-btn color="error" text :href="empresa.vagas"> Vagas </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "CardEmpresa",
  props: ["empresa"]
};
</script>
