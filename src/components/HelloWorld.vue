<template lang="pug">
v-container(grid-list-xl text-xs-center)
  v-slide-y-transition(mode='out-in')
    v-layout(row wrap)
      v-flex
        h1.display-1 Proverbs of Hell
        img.my-5(src='@/assets/alchemy-sulphuric.svg', alt='Adeus, Mundo Imundo', width='175px')

        blockquote.dignity(style='font-size: 21px')
          | First create the problem.
          p Then sell the solution.

          footer
            small.mr-2
              | &mdash;&nbsp;William Gates
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
