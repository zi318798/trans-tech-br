<template>
  <div class="bannerBlack">
    <v-row justify="center">
      <v-col cols="12" md="10" class="d-flex align-center">
        <div>
          <h2 class="bannerBlack-title font-weight-light">
            Nós pedimos a comunidade tech no Twitter, indicações de empresas
            que:
          </h2>
          <p class="banner-text-white">
            - Praticam verdadeiramente uma cultura de diversidade e igualdade
            entre os funcionarios.
          </p>
          <p class="banner-text-white">
            - Oferecem um ambiente seguro e evolutivo para pessoas não-brancas
            e/ou LGBTQIA+ , e outras minorias diversas.
          </p>
          <h2 class="banner-black-subtitle font-weight-light">
            Abaixo você pode conferir a lista de empresas indicadas:
          </h2>

          <div class="mt-16 pt-2">
            <v-btn
              nuxt
              large
              to="/"
              class="btn-custom-lg btn-arrow"
              depressed
              color="error"
              elevation="0"
            >
              <span>Recomende empresas que aparecerão aqui </span>
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
.banner-text-white {
  color: rgb(207, 201, 201) !important;
}

.banner-title {
  font-size: 42px;
  line-height: 54px;
  margin: 20px 0 15px;
}

.banner-black-subtitle {
  font-size: 18px;
}

.bannerBlack {
  background: inherit;
  padding: 20px 0 20px;
  min-height: 600px;
  display: flex;
  align-items: center;
}
h2 {
  margin: 20px 0;
}
</style>
