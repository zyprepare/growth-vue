<template>
  <div>
    <h1 class="text-lg">{{msg}}</h1>
    <Hello></Hello>
    <img src="../../assets/jixiang.png" />
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <router-link to="/home">go</router-link>
      <li>8</li>
      <li>9</li>
      <li>10</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
ul {
  li {
    height: 100px;
  }
}
</style>

<script>
import Hello from "../../components/hello";

export default {
  name: "app",
  data() {
    return {
      msg: "welcome to index view"
    };
  },
  mounted() {
    console.log(3)
  },
  components: { Hello }
};
</script>
