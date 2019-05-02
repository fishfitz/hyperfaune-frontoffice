<template>
  <b-autocomplete v-bind="$attrs" :data="suggestions" ref="select"
    :open-on-focus="true" :keep-first="true"
    :value="stringValue"
    @input="fetchSuggestions"
    @focus="fetchSuggestions(null)"
    @select="$emit('input', $event ? $event.id : null)"/>
</template>

<script>
  export default {
    props: ['value', 'path', 'params'],
    data() {
      return { suggestions: [], stringValue: '' };
    },
    methods: {
      async fetchSuggestions(input) {
        if (input !== null) this.stringValue = input;
        this.suggestions = await this.$axios.$get(this.path, { params: { filter: this.stringValue, ...this.params } });
      }
    },
    async mounted() {
      if (this.value) {
        this.suggestions = [(await this.$axios.$get(this.path, { params: { id: this.value } }))];
        this.$refs.select.setSelected(this.suggestions[0]);
      }
    }
  };
</script>
