<template>
  <div>
    <About :about="about" />
    <!-- <Counter /> -->

    <h2 id="who">{{who.title}}</h2>
    <p>{{who.description}}</p>

    <h2 id="why">{{why.title}}</h2>
    <p>{{why.description}}</p>

    <div id="integratation">
      <h2>{{ backend.title }}</h2>
      <ul v-for="item in backend.systems">
        <li>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </li>
      </ul>
    </div>

    <div id="services">
      <h2>{{ services.title }}</h2>
      <ul v-for="service in services.services">
        <li>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </li>
      </ul>
    </div>
    <div>
      <h2>{{ how.title }}</h2>
      <p>{{ how.description }}</p>
    </div>

    <div>
      <div class="links">
        <h2>{{ links.title }}</h2>
        <Link v-for="link in links.links" :link="link.description" :name="link.title" class="link" />
      </div>
    </div>
  </div>
</template>

<script>
import Link from "./Link";
import About from "./About";
export default {
  name: "Storefront",
  components: {
    Link,
    About
  },
  data() {
    return {
      about: {
        title: "Storefront",
        description:
          "Anatta storefront is a dynamic headless contecnt and E-com service provide"
      },
      who: { title: "What is Anatta storefront", description: "Explanation" },
      why: {
        title: "Why Anatta stroefront",
        description: "Why not use any CMS with any E-com service"
      },
      backend: {
        title: "How does it connect with backend platforms?",
        systems: [
          { title: "Avenue", description: "Single source of truth for data" },
          { title: "CMS", description: "Any CMS support" }
        ]
      },
      services: {
        title: "Services",
        services: [
          { title: "Flexible", description: "Flexible" },
          { title: "All CMS support", description: "All CMS support" },
          { title: "Any E-com service", description: "Any E-com service" }
        ]
      },
      how: { title: "How does it work?", description: "Working" },
      links: {
        title: "Useful Links",
        links: [
          { title: "Directory Structure", link: "/directory" },
          {
            title: "Development Guide",
            description: "/projects/storefront/development"
          }
        ]
      }
    };
  }
};
</script>

<style scoped>
.link {
  margin: 5px;
}
</style>