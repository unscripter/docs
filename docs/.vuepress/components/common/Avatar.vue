<template>
  <div class="Avatar">
    <img :src="$withBase(employee.src)" alt class="image" />
    <div class="user-datails">
      <h1 class="title">{{ employee.title }}</h1>
      <h2 class="designation">{{ employee.designation }}</h2>
      <h2 class="joining">{{ employee.joining }}</h2>
    </div>
  </div>
</template>
<script>
import About from "../About";
export default {
  components: {
    About
  },
  props: {
    employee: {
      type: Object,
      default: () => {
        return {
          src: "/anatta.png",
          title: "Anatta Design",
          designation: "Company",
          joining: "2009"
        };
      }
    }
  }
};
</script>

<style scoped>
h2 {
  border-bottom: none;
  margin: 0;
}
h1 {
  margin: 0;
}
.Avatar {
  display: flex;
  justify-content: space-between;
  background-color: gainsboro;
  border: 1px solid black;
  padding: 10px 200px 10px 20px;
  margin-bottom: 20px;
}
img {
  border-radius: 100%;
  width: 200px;
  height: 200px;
}
.designation {
  color: green;
}
.user-datails {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>