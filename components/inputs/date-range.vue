<template>
  <div class="control has-icons-left">
    <b-icon icon="calendar"/>
    <no-ssr>
      <flat-pickr v-model="value" :config="config" class="input" placeholder="Sélectionner une date" name="date"/>
    </no-ssr>
  </div>
</template>

<script>
  import FlatPickr from 'vue-flatpickr-component';
  import 'flatpickr/dist/flatpickr.css';
  import 'flatpickr/dist/themes/airbnb.css';

  export default {
    props: ['value'],
    data() {
      return { config: { mode: 'range', enableTime: true, time_24hr: true, minDate: 'today' } };
    },
    components: { FlatPickr }
  };
</script>
