<template>
  <aside class="menu">
    <p class="menu-label"> Carte </p>
    <ul class="menu-list">
      <li>
        <nuxt-link to="/menu/products">
          <b-icon icon="food"/> Produits
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/menu/options">
          <b-icon icon="tag-multiple"/> Options
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/menu/discounts">
          <b-icon icon="sale"/> Promotions
        </nuxt-link>
      </li>
    </ul>

    <p class="menu-label"> Site </p>
    <ul class="menu-list">
      <li>
        <nuxt-link to="/site/customisation">
          <b-icon icon="format-paint"/> Personnalisation
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/site/navigation">
          <b-icon icon="menu"/> Navigation
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/site/articles">
          <b-icon icon="book-open-page-variant"/> Articles
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/site/parameters">
          <b-icon icon="cogs"/> Paramètres
        </nuxt-link>
      </li>
    </ul>

    <p class="menu-label"> Vente </p>
    <ul class="menu-list">
      <li>
        <nuxt-link to="/sales/clients">
          <b-icon icon="account-multiple"/> Clients
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/sales/fidelity">
          <b-icon icon="card-bulleted-outline"/> Fidélité
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/sales/delivery">
          <b-icon icon="motorbike"/> Livraison
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/sales/payments">
          <b-icon icon="currency-usd"/> Paiements
        </nuxt-link>
      </li>
    </ul>
  </aside>
</template>

<style lang="scss" scoped>
  @import "~assets/css/main.scss";

  .menu {
    background-color: transparent;
    padding-left: 0;
    padding-top: 0;
  }

  .menu-label {
    color: $text;
    height: 2em;
    border-bottom: 1px solid $border;
    margin-left: 5px;
    margin-right: 5px;
    text-align: center;
    font-family: LemonMilk;
  }

  .menu-list li a {
    border-left: 8px solid $primary;
    font-size: 9pt;
    padding-top: 2px;
    padding-bottom: 2px;
    line-height: 0.5;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    .icon {
      margin-right: 5px;
      transform: translateY(3px);
      zoom: .9;
    }

    &:hover {
      border-left-width: 10px;
      border-color: $link;
    }

    &.is-active {
      border-left-width: 10px;
      color: $link;
      border-color: $link;
    }
  }
</style>
