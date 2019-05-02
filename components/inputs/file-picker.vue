<template>
  <div>
    <b-upload @input="input">
      <a class="button">
        <b-icon icon="upload"/>
        <slot/>
      </a>
    </b-upload>
    &nbsp;
    <span v-if="value" class="has-text-grey" style="display: inline-block; vertical-align: sub;">
      {{ value.name }}
    </span>
  </div>
</template>

<script>
  export default {
    props: ['value'],
    methods: {
      input(value) {
        if (!value) this.$emit('input', null);
        else if (value[0]) this.$emit('input', value[0]);
        else this.$emit('input', value);
      }
    }
  };
</script>
