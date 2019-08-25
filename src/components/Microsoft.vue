<template>
  <v-container grid-list-xl text-xs-center>
    <v-slide-y-transition mode="out-in">
      <v-layout row wrap>
        <v-flex>
          <h1>The Digital Devolution</h1>
        <img src="@/assets/cathar-crucigrama.svg" alt="Adeus, Mundo Imundo" width="175px" class="my-5">
        <blockquote class="dignity" style="font-size: 18px">
          Microsoft is not evil. They just
          <p>make really crappy operating systems.</p>
          <footer>
            <small>
              &mdash;&nbsp;Linus Torvalds
            </small>
          </footer>
        </blockquote>
      </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
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
