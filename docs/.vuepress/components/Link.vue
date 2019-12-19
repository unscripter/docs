<template>
  <div class="btn-link">
    <a :href="link">Documentation</a>
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
      default: ""
    }
  }
};
</script>

<style>
h2 {
  border-bottom: none;
}
.btn-link {
  height: 40px;
  background-color: transparent;
  width: 100%;
  max-width: 200px;
  margin: 10px auto 10px;
  line-height: 40px;
}
</style>