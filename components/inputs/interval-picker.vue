<template>
  <div class="has-text-right">
    <b-select v-model="value" style="display: inline-block;" extended>
      <option value="1h"> Par heure </option>
      <option value="1d"> Par jour </option>
    </b-select>
  </div>
</template>

<script>
  export default {
    computed: {
      value: {
        get() {
          return this.$store.state.stats.interval;
        },
        set(value) {
          this.$store.commit('SET_INTERVAL', value);
        }
      }
    }
  };
</script>
