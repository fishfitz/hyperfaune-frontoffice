<template>
  <div class="has-text-right">
    <span style="vertical-align: sub;"> Vous éditez ce contenu en : </span>
    <b-select v-model="value" style="display: inline-block;">
      <option v-for="lang in availableLangs" :value="lang.id"> {{ lang.name }} </option>
    </b-select>
  </div>
</template>

<script>
  export default {
    computed: {
      availableLangs() {
        return this.$store.state.config.available_langs;
      },
      value: {
        get() {
          return this.$store.state.dataLang;
        },
        set(lang) {
          this.$store.commit('SET_DATA_LANG', lang);
        }
      }
    }
  };
</script>
