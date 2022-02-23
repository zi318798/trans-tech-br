<template>
  <v-app dark>
    <Header />

    <nuxt />

    <Footer />
  </v-app>
</template>

<script>
export default {
  components: {
    Header: () => import("@/layouts/sections/Header"),
    Footer: () => import("@/layouts/sections/Footer")
  },
  methods: {}
};
</script>

<style></style>
