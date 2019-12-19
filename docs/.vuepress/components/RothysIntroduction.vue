<template>
  <div>
    <About :about="about" />
    <!-- <Counter /> -->
  </div>
</template>

<script>
import About from "./About";
export default {
  name: "RothysIntro",
  components: {
    About
  },
  data() {
    return {
      about: {
        name: "Rothys",
        description: "Rothys is a E-com platform for shoping shoes"
      },
      who: { name: "", description: "" },
      why: { name: "", description: "" },
      backend: { title: "", systems: [{ name: "", description: "" }] },
      services: { title: "", services: [{ name: "", description: "" }] },
      how: { title: "", description: "" },
      links: { title: "", links: [{ name: "", description: "" }] }
    };
  }
};
</script>