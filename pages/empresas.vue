<template>
  <div class="body-page">
    <BannerEmpresas />
    <div id="cards-section">
      <template>
        <div v-for="empresa in empresas" :key="empresa.id">
          <CardEmpresa :empresa="empresa" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import CardEmpresa from "../components/basic/CardEmpresa.vue";
import BannerEmpresas from "../components/custom/banner/BannerEmpresas.vue";

export default {
  head() {
    return {
      title: "Transparecer Tech Brasil",
      meta: [
        {
          hid: "description",
          name: "Trans Tech Brasil",
          content: "Trans Tech Brasil"
        }
      ]
    };
  },
  name: "companies",
  components: { CardEmpresa, BannerEmpresas },
  data() {
    return {
      empresas: [
        {
          id: 1,
          name: "Um nome",
          subtitle: "alguma descricao ",
          vagaJunior: true,
          resume: "um resumo para aparecer no card",
          img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          pagina: "https://google.com",
          vagas: "https://google.com"
        },

        {
          id: 2,
          name: "Um nome2",
          subtitle: "alguma descricao2 ",
          vagaJunior: true,
          resume: "um resumo para aparecer no card",
          img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          pagina: "https://google.com",
          vagas: "https://google.com"
        },

        {
          id: 3,
          name: "Um nome3",
          subtitle: "alguma descricao3  ",
          vagaJunior: true,
          resume: "um resumo para aparecer no card",
          img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          pagina: "https://google.com",
          vagas: "https://google.com"
        },
        {
          id: 4,
          name: "Um nome4",
          subtitle: "alguma descricao4  ",
          vagaJunior: true,
          resume: "um resumo para aparecer no card",
          img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
          pagina: "https://google.com",
          vagas: "https://google.com"
        }
      ],

      error: false
    };
  }
};
</script>

<style scoped>
.body-page {
  padding: 3rem;
  font-family: "DM Sans", sans-serif;
  color: #95e9ef;
  background: #1f1f1f;
}
#cards-section {
  display: grid;
  grid-gap: 0.2rem;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  min-height: calc(100vh - 1rem * 2);
}
</style>
