<template lang="pug">
  v-container(grid-list-xl='', text-xs-center='')
    v-slide-y-transition(mode='out-in')
      v-layout(row='', wrap='')
        v-flex
          h1 Octavian Caesar
          h2 And His Eightfold Path
          img.my-5(src='@/assets/biohazard.svg', alt='Adeus, Mundo Imundo', width='175px')

          blockquote.dignity(style='font-size: 19px')
            | &laquo;Every man takes the limits of his own field of vision for the limits of the world&raquo;
            p

            footer
              small
                | &mdash;&nbsp;Schopenhauer
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
