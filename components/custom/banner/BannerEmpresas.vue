<template>
  <div class="bannerBlack">
    <v-row justify="center">
      <v-col cols="12" md="9" xs="3" class="d-flex align-center">
        <div>
          <h2 class="bannerBlack-title font-weight-light">
            Nós pedimos a comunidade tech no Twitter, indicações de empresas
            que:
          </h2>
          <p class="banner-text-pink">
            * Praticam verdadeiramente a cultura de diversidade e igualdade
            entre os funcionarios.
          </p>
          <p class="banner-text-pink">
            * Oferecem um ambiente seguro e evolutivo para pessoas não-brancas
            e/ou LGBTQIA+ , e outras minorias diversas.
          </p>
          <h2 class="banner-black-subtitle font-weight-light">
            Abaixo, você pode conferir a lista de empresas indicadas:
          </h2>

          <div class="mt-16 pt-2 ml-3">
            <v-btn
              nuxt
              large
              to="/"
              class="btn-arrow"
              depressed
              color="error"
              elevation="0"
            >
              <span class="">Recomende empresas aqui </span>
              <i class="mdi mdi-arrow-right"></i>
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "BannerEmpresas",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
.banner-text-pink {
  color: rgb(216, 132, 198) !important;
  margin: 10px;
  padding: 5px;
}

.bannerBlack-title {
  font-size: 22px;
  line-height: 30px;
  margin: 20px 5px;
  color: whitesmoke;
}

.banner-black-subtitle {
  font-size: 18px;
  color: whitesmoke;
}

.bannerBlack {
  background: inherit;
  padding: 20px 10px;
  min-height: 600px;
  display: flex;
  align-items: center;
}
h2 {
  margin: 20px 10px;
}
.small-button-text {
  font-size: 14px;
}
</style>
