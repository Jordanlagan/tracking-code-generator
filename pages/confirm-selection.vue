<template>
  <div class="confirm-selection">
    <h1>You have selected the following:</h1>
    <p>
      Tracking objective: {{ this.$store.state.trackingObjective }}
    </p>
    <p>
      Platform: {{ this.$store.state.trackingPlatform }}
    </p>
    <p>Continue?</p>
    <button @click="restartSetup">&lt; Go Back</button>
    <button @click="confirmSetup">Confirm ></button>
  </div>
</template>

<script>
export default {
  methods: {
    restartSetup() {
      this.$router.push('/')
    },
    confirmSetup() {
      this.$router.push('choose-objective')
    },
  }
}
</script>
kkk