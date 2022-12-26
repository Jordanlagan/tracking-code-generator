<template>
  <div>
    <h1>Tracking Code Generator</h1>
    <p>Click to begin</p>
    <button @click="beginSetup">Begin ></button>
  </div>
</template>

<script>
export default {
  methods: {
    beginSetup() {
      this.$router.push('choose-objective')
    }
  }
}
</script>
