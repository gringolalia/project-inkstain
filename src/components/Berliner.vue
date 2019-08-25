<template lang="pug">
v-container(grid-list-xl='', text-xs-center='')
  v-slide-y-transition(mode='out-in')
    v-layout(row='', wrap='')
      v-flex
        h1.display-1 Ich Bin Ein Berliner
        h2.headline.mt-2 I Am a Donut

        img.my-5(src='@/assets/cathar-crucigrama.svg', alt='Adeus, Mundo Imundo', width='175px')

        blockquote.dignity(style='font-size: 21px')
          | Pulvis et umbra sumus
          p
            small We are but dust and shadow

          footer
            small
              | &mdash;&nbsp;Horace
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
