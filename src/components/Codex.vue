<template>
  <v-container grid-list-xl text-xs-center>
    <v-slide-y-transition mode="out-in">
      <v-layout row wrap>
        <v-flex>
          <h1>Flex the Codex Lexicon</h1>
          <h2>The Sharper and his Mark</h2>
        <img src="@/assets/alchemy-sulphuric.svg" alt="Adeus, Mundo Imundo" width="175px" class="my-5">
        <blockquote class="dignity" style="font-size: 18px">
          &#8220;Be very, very quiet.
          <p>I am hunting rabbits&#8221;</p>
          <footer>
            <small>
              &mdash;&nbsp;Elmer the Fudd
            </small>
          </footer>
        </blockquote>
            <!-- <blockquote style="text-align: left; max-width: 400px;">Possibly the strangest book ever made, the Codex Seraphinianus is an encyclopedia of an imaginary world, with illegible calligraphy &mdash; it is written in an alphabet no one can understand &mdash; and surreal drawings of odd beasts and machines.</blockquote> -->
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
