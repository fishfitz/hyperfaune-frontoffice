<template>
  <b-taginput :value="value" :data="suggestions" @typing="fetchSuggestions"
    v-bind="$attrs" @add="$emit('add', $event)" autocomplete/>
</template>

<script>
  export default {
    props: ['value', 'path'],
    data() {
      return { suggestions: [] };
    },
    computed: {
      toExclude() {
        return this.value.map(v => v.id);
      }
    },
    methods: {
      async fetchSuggestions(input) {
        this.suggestions = await this.$axios.$get(this.path, { params: { filter: input, excludes: this.toExclude.join(',') } });
      }
    }
  };
</script>
