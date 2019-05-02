<template>
  <div class="control has-icons-left">
    <b-icon icon="calendar"/>
    <no-ssr>
      <flat-pickr
        :value="value" @input="$emit('input', $event)"
        :config="config" class="input" :placeholder="placeholder || 'Sélectionner une date'"
        name="date"/>
    </no-ssr>
  </div>
</template>

<script>
  import FlatPickr from 'vue-flatpickr-component';
  import 'flatpickr/dist/flatpickr.css';
  import 'flatpickr/dist/themes/airbnb.css';

  export default {
    components: { FlatPickr },
    props: ['value', 'placeholder', 'minDate'],
    computed: {
      config() {
        return { enableTime: true, time_24hr: true, minDate: this.minDate };
      }
    }
  };
</script>
