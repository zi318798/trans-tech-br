<template>
  <v-footer class="footer">
    <v-container>
      <v-row class="py-0 py-md-15">
        <v-col cols="12" sm="12" md="12" lg="3" class="px-xs-0">
          <h4 class="font-weight-regular font-18">Social</h4>

          <div class="social-icons mt-10">
            <a href="#">
              <i class="mdi mdi-facebook"></i>
            </a>
            <a href="#">
              <i class="mdi mdi-twitter"></i>
            </a>
            <a href="#">
              <i class="mdi mdi-google-plus"></i>
            </a>
            <a href="#">
              <i class="mdi mdi-youtube"></i>
            </a>
            <a href="#">
              <i class="mdi mdi-instagram"></i>
            </a>
          </div>
        </v-col>
      </v-row>
      <div class="footer-bottom-bar font-14"></div>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      data: []
    };
  },
  components: {}
};
</script>
