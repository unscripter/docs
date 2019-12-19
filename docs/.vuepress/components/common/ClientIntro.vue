<template>
  <div :id="client.name" :style="{ backgroundColor: client.color }" class="client">
    <div class="intro">
      <img v-if="client.logo" :src="client.logo" :alt="client.name" />
      <h1 v-if="!client.logo">
        <b>{{client.name}}</b>
      </h1>
      <h2>{{client.description}}</h2>
      <Link :link="$withBase(client.link)" class="link" />
    </div>
  </div>
</template>

<script>
import Link from "../Link";
export default {
  name: "CompanyIntro",
  components: {
    Link
  },
  props: {
    client: {
      type: Object,
      default: () => {}
    }
  }
};
</script>
<style scoped>
.client {
  margin-bottom: 40px;
  padding: 10px 20px 10px 20px;
  align-items: center;
}
.intro {
  display: flex;
  min-width: 700px;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  flex-direction: column;
}
h2 {
  border-bottom: none;
  margin: 10px;
}
h1 {
  border-bottom: none;
  margin: 5px !important;
}
.link {
  background-color: #41b883;
}
</style>