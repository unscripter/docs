<template>
  <div>
    <div v-for="client in clients">
      <ClientIntro :client="client" />
    </div>
  </div>
</template>

<script>
import ClientIntro from "./common/ClientIntro";
export default {
  name: "Clients",
  data() {
    return {
      clients: [
        {
          name: "Anatt Storefront",
          description: "Anatta storefront",
          // logo:
          //   "https://anatta.cdn.prismic.io/anatta/e8431b46a3a148a122709e289f9a6356b25325aa_logo-partner-desktop-foursigmatic-2x.png",
          color: "gainsboro",
          link: "/projects/storefront/"
        },
        {
          name: "Rothys",
          description:
            "Shop everyday ballet flats and pointed toe flats - the go to shoe",
          logo:
            "https://anatta.cdn.prismic.io/anatta/a73a14fec5375e3dfd70231d4cb68eddce6747da_logo-partner-desktop-rothys-2x.png",
          color: "gainsboro",
          link: "/projects/storefront/"
        }
      ]
    };
  },
  components: {
    ClientIntro
  }
};
</script>
