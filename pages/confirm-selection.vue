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
    <ConfirmButton />

  </div>
</template>

<script>
import ConfirmButton from '~/components/ConfirmButton.vue'

export default {
  methods: {
    restartSetup() {
      this.$router.push('/')
    }
  },
  components: {
    ConfirmButton
  }
}
</script>