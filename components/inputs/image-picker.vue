<template>
  <div class="control">
    <template v-if="value">
      <img :src="imageSrc" style="width: 100px;"/>
      <br/>
      <b-input :value="imageText" size="is-small" style="width: 500px;" readonly/>
      <br/>
    </template>
    <b-upload @input="$emit('input', $event[0])">
      <a class="button is-primary">
        <b-icon icon="upload"/>
        <span> Sélectionner un fichier </span>
      </a>
    </b-upload>
  </div>
</template>

<script>
  export default {
    props: ['value'],
    data() {
      return { imageSrc: '' };
    },
    computed: {
      imageText() {
        if (!this.value) return '';
        if (typeof this.value === 'string') return this.value;
        if (typeof this.value === 'object') return this.value.name;
        return '';
      }
    },
    mounted() {
      if (typeof this.value === 'string') this.imageSrc = this.value;
    },
    watch: {
      value(val) {
        if (!val) return '';
        if (typeof val === 'string') this.imageSrc = this.value;
        else if (typeof val === 'object') {
          const reader = new FileReader();
          reader.onload = () => (this.imageSrc = reader.result);
          reader.readAsDataURL(val);
        }
        else this.imageSrc = '';
      }
    }
  };
</script>
