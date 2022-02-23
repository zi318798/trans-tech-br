<template>
  <div class="coming-wrapper" ref="coming-soon">
    <v-container>
      <!-- -----------------------------------------------
            Start Coming Soon
        ----------------------------------------------- -->
      <v-row>
        <v-col
          cols="12"
          sm="10"
          md="6"
          class="d-flex align-center text-spacing"
        >
          <div>
            <h2 class="coming-title font-weight-bold white--text">
              Coming Soon...
            </h2>
            <h4 class="coming-subtitle white--text font-weight-light">
              Este espaço será incrementado com informações úteis para a
              comunidade...
            </h4>
            <h4 class="coming-subtitle white--text text-spacing">
              <strong>
                <a
                  class="links"
                  href="https://github.com/zi318798/trans-tech-br"
                >
                  Você pode contribuir clicando AQUI
                </a>
              </strong>
            </h4>
            <div class="mt-16 pt-2"></div>
          </div>
        </v-col>
      </v-row>

      <!-- -----------------------------------------------
            End Coming Soon
        ----------------------------------------------- -->
    </v-container>
  </div>
</template>
<script>
export default {
  name: "ComingSoon",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
.text-spacing {
  margin: 20px !important;
}
.links {
  text-decoration: none;
  color: indigo;
}
</style>
