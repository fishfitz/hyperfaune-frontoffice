<template>
  <div class="columns">
    <div class="column is-6">
      <h3 class="has-text-centered"> <slot name="suggestions"/> </h3>
      <hr/><br/>
      <div>
        <div class="has-text-centered">
          <slot name="filters"/>
        </div>
        <br/>
        <b-input type="search" :value="filter" @input="fetch" icon="magnify"/>
        <br/>
      </div>
      <ul class="limit-height box">
        <li v-for="suggestion in suggestions">
          <a @click="addToField(suggestion)" class="item" style="display: block; cursor: e-resize;">
            <b-icon v-if="icon" size="is-small" :icon="typeof icon === 'string' ? icon : icon(suggestion)"/>
            <span> {{ field(suggestion) }} </span>
          </a>
        </li>
      </ul>
    </div>

    <div class="column is-6">
      <h3 class="has-text-centered"> <slot name="field"/> </h3>
      <hr/><br/>
      <div class="limit-height box" :style="`margin-top: ${74 + (Number(filterHeight) || 0)}px`">
        <draggable :value="value" @input="$emit('input', $event)">
          <div v-for="(element, index) in value">
            <a @click="removeFromField(element)" class="item" style="cursor: w-resize;">
              {{ index + 1 }}.
              <b-icon v-if="icon" size="is-small" :icon="typeof icon === 'string' ? icon : icon(element)"/>
              <span v-if="field(element)"> {{ field(element) }} </span>
            </a>
            <slot name="controls" v-bind="element"/>
            <nuxt-link style="float: right;"
              :to="`/${typeof resource === 'string' ? resource : resource(element)}/${element.id}`">
              <b-icon icon="pen" size="is-small" style="zoom: 1.1"/>
            </nuxt-link>
          </div>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
  import draggable from 'vuedraggable';

  export default {
    components: { draggable },
    props: ['value', 'field', 'resource', 'fetchSuggestions', 'filterHeight', 'icon'],
    data() {
      return {
        filter: '',
        suggestions: []
      };
    },
    methods: {
      async fetch(value) {
        if (value !== undefined) this.filter = value;
        this.suggestions = await this.fetchSuggestions(this.filter);
      },
      addToField(suggestion) {
        this.$emit('input', [...this.value, suggestion]);
        this.fetch();
      },
      removeFromField(element) {
        this.$emit('input', this.value.filter(e => e !== element));
        this.fetch();
      }
    },
    async mounted() {
      this.suggestions = await this.fetchSuggestions();
    }
  };
</script>

<style lang="scss" scoped>
  @import '~assets/css/main.scss';

  .limit-height {
    height: 336px;
    overflow-y: auto;

    > div {
      width: calc(100% - 1px);
    }
  }

  .item {
    color: $text;

    &:hover {
      color: $grey;
    }

    input {
      display: none;
    }

    input:checked + span {
      color: $primary;
    }
  }

  .sortable-chosen a {
    cursor: ns-resize!important;
  }
</style>
