<template lang="pug">v-container(grid-list-xl='', text-xs-center='')
	v-slide-y-transition(mode='out-in')
		v-layout(row wrap)
			v-flex
				h1.display-1
					i.fas.fa-sun.fa-2x.mr-2
				h1.display-2.mt-2
					| Fold Four Times
				.headline.with.dignity Quarto Is a Format for the Smart-o

				img.my-5(src='@/assets/hammer-sickle.svg', alt='Adeus, Mundo Imundo', width='175px')

				blockquote.dignity(style='font-size: 18px')
					| The digital revolution is far more significant
					br
					| than the invention of writing or even of printing.

					footer
						small
							| &mdash;&nbsp;Douglas Engelbart

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
