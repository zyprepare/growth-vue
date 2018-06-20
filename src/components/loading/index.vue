<template>
  <div class="loading" v-show="isLoading">
    <div class="circleing"></div>
    <div class="jd-icon"></div>
  </div>
</template>

<style lang="scss">
@import "../../styles/mixins.scss";

.loading {
  position: fixed;
  top: 50%;
  left: 50%;
  width: rem(44);
  height: rem(44);
  transform: translate3d(-50%, -50%, 0);
  z-index: 9999;
}
.circleing {
  position: absolute;
  left: 0;
  top: 0;
  width: rem(44);
  height: rem(44);
  background-image: url(../../assets/loading.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  animation: circle 1s infinite linear;
}
.jd-icon {
  background-image: url(../../assets/jd_icon.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: rem(22);
  height: rem(22);
  margin: rem(12);
}
@keyframes circle {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

<script>
export default {
  props: {
    isLoading: Boolean
  }
}
</script>
