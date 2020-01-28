	<template lang="pug">
v-container(grid-list-xl text-xs-center)
	v-slide-y-transition(mode='out-in')
		v-layout(row wrap)
			v-flex
				h1.display-1 A Press Passage
				img.my-3(src='@/assets/biohazard.svg' alt='Adeus, Mundo Imundo' width='175px')

				blockquote.dignity(style='font-size: 18px; max-width: 450px; margin: 0 auto;')
					| With the development of the printing press, not only could text be mass-produced quickly, it could also be mass-produced quickly and incorrectly.
					br
					small
						| &mdash;&nbsp;The Bureau Chiefs
				v-btn.v-btn-lg(color="blue-grey" dark large) Imprints
				v-btn.mt-3(color="secondary" dark large) Offprints

			v-flex
				h1.display-1 Formats to Read From
				img.my-3(src='@/assets/biohazard.svg' alt='Adeus, Mundo Imundo' width='175px')

				blockquote(style='font-size: 18px; max-width: 450px; margin: 0 auto;' )
					| With the development of the printing press, not only could text be mass-produced quickly, it could also be mass-produced quickly and incorrectly.
					br
					small
						| &mdash;&nbsp;The Bureau Chiefs
				v-btn.mt-3(color="blue-grey white--text" large) Imprints
				v-btn.mt-3(color="grey white--text" large) Offprints
</template>

<style scoped>
h1, h2 {
	font-weight: 300;
	font-style: normal !important;
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
