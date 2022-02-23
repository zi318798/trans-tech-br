<template>
  <div>
    <BannerInicio />
    <ComingSoon />
  </div>
</template>

<script>
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

  data() {
    return {};
  },
  components: {
    BannerInicio: () =>
      import("@/components/shared/lp-banner/BannerInicio.vue"),
    ComingSoon: () => import("@/components/shared/coming-soon/ComingSoon.vue")
  }
};
</script>
