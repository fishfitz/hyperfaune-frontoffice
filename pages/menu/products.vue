<template>
  <div>
    <div class="box">
      <h1 class="title is-5"> Produits </h1>
      <category-leaf :value="categories[0]"/>
    </div>
  </div>
</template>

<script>
  import categoryLeaf from '../../components/menu/products/category-leaf.vue';

  export default {
    components: { categoryLeaf },
    data() {
      return {
        categories: [{
          id: 1,
          name: 'Tous les produits',
          categories: [
            {
              id: 2,
              name: 'Pizzas',
              categories: [],
              contents: [
                { id: 1, name: 'Pizza paysanne' },
                { id: 2, name: 'Pizza végétarienne' },
                { id: 3, name: 'Pizza mozza' }
              ]
            },
            {
              id: 3,
              name: 'Boissons',
              categories: [],
              contents: [
                { id: 4, name: 'Coca Cola' },
                { id: 5, name: 'Ice Tea' }
              ]
            },
            {
              id: 4,
              name: 'Desserts',
              categories: [],
              contents: []
            }
          ],
          contents: []
        }]
      };
    }
  };
</script>
