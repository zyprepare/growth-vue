<template>
  <div>
    <h1 class="text-lg">{{msg}}</h1>
    <Hello></Hello>
    <Loading is-loading="true"></Loading>
  </div>
</template>

<script>
import Hello from "../../components/hello";
import Loading from "../../components/loading";

export default {
  name: "app",
  data() {
    return {
      msg: "welcome to index view"
    };
  },
  components: { Hello, Loading }
};
</script>
