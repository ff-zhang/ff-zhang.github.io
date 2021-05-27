<template>
  <div class="code-line">
    <b-table-simple small borderless>
      <b-tbody>
        <b-tr>
          <b-td class="line-numbers">
            <p class="line-num" v-for="(line, i) in lines" :key="i">{{ i + 1 }}.</p>
          </b-td>
          <b-td>
            <vue-typed-js :strings="[concatenate(lines)]">
              <span class="typing"></span>
            </vue-typed-js>
          </b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
  </div>
  
</template>

<script>
export default {
  name: 'CodeBlock',
  props: {
    lines: Array
  },
  methods: {
    concatenate(strings) {
      var output = ''
      strings.forEach(str => {
        output += '<p>' + str + '</p>'
      });

      return output
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