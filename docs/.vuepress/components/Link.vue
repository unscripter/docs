<template>
  <div class="btn-link">
    <a :href="link">{{ name }}</a>
  </div>
</template>

<script>
export default {
  name: "Link",
  props: {
    link: {
      type: String,
      default: ""
    },
    name: {
      types: String,
      default: "Documentation"
    }
  }
};
</script>

<style scoped>
h2 {
  margin: 0;
}
.btn-link {
  height: 40px;
  border: 1px solid#41b883;
  color: black;
  width: 100%;
  max-width: 200px;
  margin: 0 auto;
  line-height: 40px;
  text-align: center;
}
a {
  color: black;
}
</style>