<template>
  <div class="category-leaf">
    <header class="category-header" :class="{ draggable: deep }">
      {{ value.name }}
      <a> <b-icon icon="pencil-outline"/> </a>
      <a> <b-icon icon="delete-outline" v-if="deep"/> </a>

      <small class="controls" v-if="!categoryDrag">
        <button class="button is-small">
          <b-icon icon="plus" size="is-small"/> &nbsp; Catégorie
        </button>
        <button class="button is-small">
          <b-icon icon="plus" size="is-small"/> &nbsp; Produit
        </button>
      </small>
    </header>

    <div class="children">
      <draggable :list="value.contents" group="contents"/>

      <template v-if="value.contents.length">
        <draggable :list="value.contents" group="contents">
          <small
            class="product draggable"
            v-for="content in value.contents" :key="content.id">
            — {{ content.name }}
            <a> <b-icon icon="pencil-outline"/> </a>
            <a> <b-icon icon="delete-outline"/> </a>
          </small>
        </draggable>
      </template>

      <template v-if="value.categories.length">
        <draggable
          :list="value.categories" group="categories"
          @start="startDragCategory" @end="endDragCategory">
          <category-leaf
            class="category"
            v-for="category in value.categories" :key="category.id" :category-id="category.id"
            :value="category" :deep="(deep || 0) + 1"/>
        </draggable>
      </template>

      <small v-if="!value.categories.length && !value.contents.length">
        <i> Cette catégorie est vide pour le moment. </i>
      </small>

      <draggable :list="value.contents" group="contents"/>
      <draggable
        v-if="deep && !value.categories.length && categoryDrag"
        :list="value.categories" group="categories" @end="endDragCategory"
        class="drag-categories">
        <div class="drag-placeholder" slot="header"> Déposez la catégorie ici pour en faire une sous-catégorie. </div>
      </draggable>
    </div>
  </div>
</template>

<script>
  import draggable from 'vuedraggable';

  export default {
    name: 'category-leaf',
    components: { draggable },
    props: ['value', 'deep'],
    computed: {
      isDrag() {
        return this.$store.state.dragCategory && this.$store.state.dragCategory === this.value.id;
      },
      categoryDrag() {
        return this.$store.state.dragCategory && !this.isDrag;
      }
    },
    methods: {
      startDragCategory(event) {
        this.$store.commit('SET_DRAG_CATEGORY', Number(event.clone.getAttribute('category-id')));
      },
      endDragCategory() {
        this.$store.commit('SET_DRAG_CATEGORY', false);
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/css/main.scss";

  .category {
    padding-top: 1em;
    padding-bottom: 1em;
  }

  .category-header {
    border-bottom: 1px dashed $border;
    height: 2em;
  }

  .children {
    position: relative;
    margin-left: 2em;
    padding-top: .5em;

    .product {
      display: block;
    }
  }

  .controls {
    float: right;
    margin-top: -2px;
    zoom: .9;
  }

  .icon {
    zoom: .8;
  }

  .draggable {
    cursor: move;
  }

  .drag-categories {
    top: 0;
    left: 0;
    position: absolute;
    background-color: $white;
    border-left: 1px dashed $border;
    border-bottom: 1px dashed $border;
    border-right: 1px dashed $border;
    padding-left: 2em;
    height: 100%;
    width: 100%;
    min-height: 50px;
    display: flex;

    .drag-placeholder {
      margin: auto;

      &:not(:first-child), &:not(:last-child) {
        display: none;
      }
    }
  }

  .category-leaf.sortable-chosen {
    height: 0;
    .controls {
      display: none;
    }
    .children {
      display: none;
    }
  }
</style>
