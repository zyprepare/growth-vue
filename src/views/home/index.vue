<template>
  <div class="color">
    <Counter></Counter>
    <button v-bind:style="{width: '100px', background: 'red'}" @click="increase">{{counter}}</button>
    <div>
      <button v-bind:style="{width: '100px', background: '#ccffaa', marginTop: '20px'}" @click="getData">get data</button>
      <p>{{posts}}</p>
    </div>
    <Loading v-bind:is-loading="isLoading"></Loading>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex"
import Counter from "../../container/counter"
import Loading from "../../components/loading"
import { INCREASE, DATA } from "../../store/types.js"

export default {
  components: { Counter, Loading },
  computed: {
    ...mapState({
      counter: state => state.counter.count,
      posts: state => state.server.posts,
      isLoading: state => state.server.isLoading
    })
  },
  methods: {
    ...mapMutations({
      increase: INCREASE
    }),
    ...mapActions({
      getData: DATA
    })
  }
};
</script>

<style lang="scss">
.color {
  color: #aaddbb;
}
</style>
