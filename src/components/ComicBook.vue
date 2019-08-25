<template lang="pug">v-container(grid-list-xl='', text-xs-center='')
  v-slide-y-transition(mode='out-in')
    v-layout(row='', wrap='')
      v-flex
        h1.display-1 Marvelous Comicals
        img.my-5(src='@/assets/biohazard.svg', alt='Adeus, Mundo Imundo', width='175px')
        |
        blockquote.dignity(style='font-size: 18px')
          h3 The &Uuml;bermensch Exuberance

          p
            | Nothing Nietzsche could not teach you
            br
            | about the bending of the wrist

          footer
            small
              | &mdash;&nbsp;Monty Python

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
