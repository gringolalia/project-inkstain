<template lang="pug">
v-container(grid-list-xl text-xs-center)
	v-slide-y-transition(mode='out-in')
		v-layout(row wrap)
			v-flex
				h1.display-2.with.dignity A Press Passage
				img.my-5(src='@/assets/biohazard.svg' alt='Adeus, Mundo Imundo' width='175px')

				blockquote.dignity(style='font-size: 20px; max-width: 450px; margin: 0 auto;' )
					| With the development of the printing press, not only could text be mass-produced quickly, it could also be mass-produced quickly and incorrectly.
					br
					small
						| &mdash;&nbsp;The Bureau Chiefs
				v-btn.mt-3(color="blue-grey white--text") Imprints
				v-btn.mt-3(color="black white--text") Offprints

			v-flex
				h1.display-2.with.dignity A Press Passage
				img.my-5(src='@/assets/biohazard.svg' alt='Adeus, Mundo Imundo' width='175px')

				blockquote.dignity(style='font-size: 20px; max-width: 450px; margin: 0 auto;' )
					| With the development of the printing press, not only could text be mass-produced quickly, it could also be mass-produced quickly and incorrectly.
					br
					small
						| &mdash;&nbsp;The Bureau Chiefs
				v-btn.mt-3(color="blue-grey white--text") Imprints
				v-btn.mt-3(color="grey white--text") Offprints
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
