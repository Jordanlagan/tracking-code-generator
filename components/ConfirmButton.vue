<template>
  <div :style="{ 'display': 'inline-block' }">
    <button @click="confirmSettings">Confirm ></button>
  </div>
</template>
<script>

export default {
  name: "ConfirmButton",
  methods: {
    confirmSettings: function() {
      const objective = this.$store.state.trackingObjective;
      const platform = this.$store.state.trackingPlatform; 
      let nextPageUrl = "";
      if (objective == "ecommerce") {
        nextPageUrl = "ecommerce/"
        if (platform == "gads") {
          nextPageUrl += "google-ads/"
        }
      } else if (objective == "leadgen") {
        nextPageUrl = "lead-generation/"
        if (platform == "gads") {
          nextPageUrl += "google-ads/"
        }
      }
      this.$router.push(nextPageUrl);
    },
  },
};
</script>