<template lang="pug">
	//- v-container(grid-list-xl text-xs-center)
	//- v-slide-y-transition(mode='out-in')
	//- v-layout(row wrap)
	.hero-image
		.hero-text
			h1 
				i.material-icons.md-72 all_inclusive
			h1.h1 Printed With Precision
			h2.h2.mb-3 Newspaer and Magazine Formats 
			v-btn.v-btn-lg(color="blue-grey" dark large to="/broadsheet") Imprints
			v-btn.v-btn-lg(color="secondary" dark large to="/berliner") Offprints
			//- v-flex
			//- 	h1.display-1 A Press Passage
			//- 	img.my-3(src='@/assets/biohazard.svg' alt='Adeus, Mundo Imundo' width='175px')

			//- 	blockquote.dignity(style='font-size: 18px; max-width: 450px; margin: 0 auto;')
			//- 		| With the development of the printing press, not only could text be mass-produced quickly, it could also be mass-produced quickly and incorrectly.
			//- 		br
			//- 		small
			//- 			| &mdash;&nbsp;The Bureau Chiefs
			//- 	v-btn.v-btn-lg(color="blue-grey" dark large) Imprints
			//- 	v-btn.mt-3(color="secondary" dark large) Offprints

			//- v-flex
			//- 	h1.display-1 Formats to Read From
			//- 	img.my-3(src='@/assets/biohazard.svg' alt='Adeus, Mundo Imundo' width='175px')

			//- 	blockquote(style='font-size: 18px; max-width: 450px; margin: 0 auto;' )
			//- 		| With the development of the printing press, not only could text be mass-produced quickly, it could also be mass-produced quickly and incorrectly.
			//- 		br
			//- 		small
			//- 			| &mdash;&nbsp;The Bureau Chiefs
			//- 	v-btn.mt-3(color="blue-grey white--text" large) Imprints
			//- 	v-btn.mt-3(color="grey white--text" large) Offprints
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

body, html {
    height: 100%;
}

.hero-image {
    background-image: url("../assets/images/manbridge-one.jpg");
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
	position: relative;
	filter: grayscale(100%) opacity(125%);
}

/* Place text in the middle of the image */
.hero-text {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
   transform: translate(-50%, -50%);
    color: white;
}

</style>
