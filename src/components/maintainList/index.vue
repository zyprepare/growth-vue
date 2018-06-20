<template>
  <div>
    <div class="maintain-list">
      <MaintainItem v-for="(item, index) in maintainData" :key="index" :maintainList="item" :index="index"></MaintainItem>
    </div>
  </div>
</template>
<script>
import "./index.scss";
import MaintainItem from "../maintainItem";

export default {
  components: { MaintainItem },
  props: {
    maintainData: {
      type: Array
    }
  },
  data() {
    return {

    }
  }
};
</script>
