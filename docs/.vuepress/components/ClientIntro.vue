<template>
  <div id="name" :style="{ backgroundColor: color }" class="company">
    <div class="intro">
      <img v-if="logo" :src="logo" :alt="name" />
      <h1 v-if="!logo">
        <em>{{name}}</em>
      </h1>
    </div>
    <h2>{{description}}</h2>
  </div>
</template>

<script>
export default {
  name: "CompanyIntro",
  props: {
    name: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    logo: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "transparent"
    }
  }
};
</script>
<style>
.company {
  margin-bottom: 20px;
  text-align: center;
}
.intro {
}
</style>