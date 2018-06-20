<template>
  <div>
    <Counter :count="counter" :countobj="countObj" @update-count="increase" @update-type="updateType"></Counter>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex"
import Counter from "../../components/counter"
import { INCREASE } from "../../store/types.js"

export default {
  components: { Counter },
  computed: {
    ...mapState({
      counter: state => state.counter.count,
      countObj: state => state.counter.countObj
    })
  },
  methods: {
    ...mapMutations({
      increase: INCREASE,
      updateType: 'updateType'
    })
  }
};
</script>
