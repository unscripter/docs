<template>
  <div class="about">
    <h2 id="name">{{about.name}}</h2>
    <p>{{about.description}}</p>
  </div>
</template>

<script>
export default {
  name: "About",
  props: {
    about: {
      type: Object,
      default: () => {}
    }
  }
};
</script>
