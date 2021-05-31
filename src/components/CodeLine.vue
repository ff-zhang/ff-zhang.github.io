<template>
  <div class="code-line py-0">
    <b-td class="line-numbers">
      <p class="line-num my-0">{{ num }}.</p>
    </b-td>
    <b-td>
      <vue-typed-js :strings="[line]" :typeSpeed=1 @onComplete="$emit('onComplete')">
        <p class="typing my-0"></p>
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
      num: this.lineNum
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

a:hover {
  color: gainsboro;
}

.line-numbers {
  width: 2em;
}

.line-num {
  color: rgb(125, 116, 185);
}
</style>