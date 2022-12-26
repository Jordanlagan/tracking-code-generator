<template>
  <div>
    <h1>What is the type of objective would you like to track?</h1>
    <div>
      <button @click="setEcommerce">E-Commerce</button>
      <button @click="setLeadGen">Lead Generation</button>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    trackingObjective () {
      return this.$store.state.trackingObjective
    }
  },
  methods: {
    setEcommerce() {
      this.$store.commit('SET_OBJECTIVE', 'ecommerce')
      this.$router.push('choose-platform');
    },
    setLeadGen() {
      this.$store.commit('SET_OBJECTIVE', 'leadgen')
      this.$router.push('choose-platform');
    }
  }
}
</script>