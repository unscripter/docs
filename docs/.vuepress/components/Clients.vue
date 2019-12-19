<template>
  <div>
    <div v-for="company in companies" class="company">
      <ClientIntro
        :key="company.name"
        :name="company.name"
        :description="company.description"
        :logo="company.logo"
      />
      <Link :link="company.link" />
    </div>
  </div>
</template>

<script>
import ClientIntro from "./ClientIntro";
import Link from "./Link";
export default {
  name: "Clients",
  data() {
    return {
      companies: [
        {
          name: "Anatt Storefront",
          description: "Anatta storefront",
          // logo:
          //   "https://anatta.cdn.prismic.io/anatta/e8431b46a3a148a122709e289f9a6356b25325aa_logo-partner-desktop-foursigmatic-2x.png",
          color: "gray",
          link: "/projects/storefront/"
        },
        {
          name: "Rothys",
          description:
            "Shop everyday ballet flats and pointed toe flats - the go to shoe",
          logo:
            "https://anatta.cdn.prismic.io/anatta/a73a14fec5375e3dfd70231d4cb68eddce6747da_logo-partner-desktop-rothys-2x.png",
          color: "gray",
          link: "/projects/rothys/"
        }
      ]
    };
  },
  components: {
    ClientIntro,
    Link
  }
};
</script>

<style scoped>
.company {
  border: 1px solid #3eaf7c;
  text-align: center;
}
</style>