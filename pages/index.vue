<template>
  <div>
    <div class="box">
      <h1 class="title is-5"> Carte </h1>
      <div class="columns has-text-justified">
        <page-box title="Produits" icon="food" link="/menu/products">
          Les produits sont les objets que vous vendez.
          Chacune des pizzas de votre carte devrait par exemple être un produit.
        </page-box>
        <page-box title="Options" icon="tag-multiple" link="/menu/options">
          Les options représentent :<br/>
          — Les ingrédients qu'un client chosit d'ajouter à un produit. <br/>
          — Les variantes d'un produit (par exemple le type de pâte).
        </page-box>
        <page-box title="Promotions" icon="sale" link="/menu/discounts">
          Vous pouvez paramétrer ici différentes promotions sur vos produits.
        </page-box>
      </div>
    </div>

    <div class="box">
      <h1 class="title is-5"> Site </h1>
      <div class="columns has-text-justified">
        <page-box title="Personnalisation" icon="format-paint" link="/site/customisation">
          Vous pouvez paramétrer ici l'agencement de votre site, son nom, ses couleurs, et choisir un logo.
        </page-box>
        <page-box title="Navigation" icon="menu" link="/site/navigation">
          Cette section permet de définir le contenu des menus de votre site (barre de navigation, pied de page, etc.).
        </page-box>
        <page-box title="Articles" icon="book-open-page-variant" link="/site/articles">
          Cette page permet de publier des articles qui seront affichés sur votre site.
        </page-box>
        <page-box title="Paramètres" icon="cogs" link="/site/parameters">
          Vous pouvez ici configurer de nombreux aspects de votre site : adresse, réseaux sociaux, etc.
        </page-box>
      </div>
    </div>

    <div class="box">
      <h1 class="title is-5"> Vente </h1>
      <div class="columns has-text-justified">
        <page-box title="Clients" icon="account-multiple" link="/sales/clients">
          Ici vous disposez de la liste de vos clients, leurs coordonnées et leurs achats.
        </page-box>
        <page-box title="Fidélité" icon="card-bulleted-outline" link="/sales/fidelity">
          Vous pouvez définir ici un programme de fidélité pour vos clients.
        </page-box>
        <page-box title="Livraison" icon="motorbike" link="/sales/delivery">
          Cette page permet de configurer tous les aspects liés à la livraison (délais, zones, coûts).
        </page-box>
        <page-box title="Paiements" icon="currency-usd" link="/sales/payments">
          Paramétrez ici les moyens de paiement en ligne pour vos clients.
        </page-box>
      </div>
    </div>
  </div>
</template>

<script>
  import pageBox from '../components/index/page-box.vue';
  export default { components: { pageBox } };
</script>
