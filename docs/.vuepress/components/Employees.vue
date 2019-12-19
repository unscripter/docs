<template>
  <div>
    <Avatar v-for="employee in empolyees" :employee="employee" />
  </div>
</template>
<script>
import Avatar from "./common/Avatar";
export default {
  name: "Employees",
  components: {
    Avatar
  },
  data() {
    return {
      empolyees: [
        {
          src: "/anatta.png",
          title: "Anatta Design",
          designation: "Company",
          joining: "2009"
        },
        {
          src: "/anatta.png",
          title: "Surinder Singh",
          designation: "UI Director",
          joining: "2011"
        },
        {
          src: "/amit.jpg",
          title: "Amit Mundra",
          designation: "Senior UI Developer",
          joining: "2018"
        },
        {
          src: "/anatta.png",
          title: "Viney Bishnoi",
          designation: "UI Developer",
          joining: "2017"
        }
      ]
    };
  }
};
</script>