<template>
  <div class="code-line">
    <b-td class="line-numbers">
      <p class="line-num">{{ counter }}.</p>
    </b-td>
    <b-td>
      <vue-typed-js :strings="[line]" v-on:onComplete="$emit('onComplete')">
        <p class="typing"></p>
      </vue-typed-js>
    </b-td>
  </div>
</template>

<script>
export default {
  name: 'CodeLine',
  props: {
    lineNum: Number,
    line: String
  },
  data() {
    return {
      counter: this.lineNum
    }
  }
}
</script>

<style>
/* TODO: Find a way to style <p> in a scoped form */
p {
  color: white;
}

a {
  color: white;
}

.line-numbers {
  width: 2em;
}

.line-num {
  color: rgb(125, 116, 185);
}
</style>