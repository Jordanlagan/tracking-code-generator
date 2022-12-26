
<template>
  <div>
    <h1>Choose the platform you'd like to use</h1>
    <div>
      <button @click="setGads">Google Ads</button>
      <button @click="setGa4">Google Analytics 4 (GA4)</button>
      <button @click="setMa">Microsoft Ads</button>
      <button @click="setFb">Facebook Ads</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    trackingObjective () {
      return this.$store.state.trackingObjective
    },
    trackingPlatform () {
      return this.$store.state.trackingPlatform
    },
  },
  methods: {
    setGads() {
      this.$store.commit('SET_PLATFORM', "gads")
      this.$router.push('confirm-selection');
    },
    setGa4() {
      this.$store.commit('SET_PLATFORM', "ga4")
      this.$router.push('confirm-selection');
    },
    setMa() {
      this.$store.commit('SET_PLATFORM', "ma")
      this.$router.push('confirm-selection');
    },
    setFb() {
      this.$store.commit('SET_PLATFORM', "fb")
      this.$router.push('confirm-selection');
    },
  }
}
</script>