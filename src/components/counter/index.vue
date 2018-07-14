<template>
  <div>
    <slot></slot>
    <button @click="add" :style="{width: '100px', background: '#acdacd', margin: '10px 10px 10px 0'}">{{myCountObj.count}}</button>
    <button @click="update" :style="{width: '100px', background: '#faccee'}">update</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myCount: this.count,
      myCountObj: { count: 1, type: 1 }
    }
  },
  props: {
    count: {
      type: Number
    },
    countobj: {
      type: Object
    }
  },
  methods: {
    add() {
      let count = this.myCountObj.count++
      // this.$emit('update-count', count)
    },
    update() {
      console.log(this.myCount)
      this.$emit('update-type', 3)
    }
  }
}
</script>
