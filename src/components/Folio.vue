<template lang="pug">
v-container(grid-list-xl='', text-xs-center='')
  v-slide-y-transition(mode='out-in')
    v-layout(row='', wrap='')
      v-flex
        h1.display-1 Holy Folio, Batman

        img.py-5(src='@/assets/cathar-crucigrama.svg', alt='Adeus, Mundo Imundo', width='175px')

        blockquote.dignity(style='font-size: 21px')
          | Cabe&ccedil;a vazia, oficina do Diabo

          footer
            small
              | &mdash;&nbsp;Prov&eacute;rbio San Pavloviano
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
