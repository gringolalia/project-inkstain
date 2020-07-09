<template lang="pug">
v-app
	v-navigation-drawer(persistent :mini-variant.sync='miniVariant',  :mini-variant-width='75', :clipped='false', v-model='drawer', left app style='overflow: hidden;')

		v-toolbar(app)
			v-list.pa-0.dignity
				v-list-tile(avatar)
					v-list-tile-avatar
						v-icon.mr-0(large) my_location
					v-list-tile-content.ml-0
						v-list-tile-title.title
							| Engenhoca Carioca

		v-divider

		v-list(style='overflow: hidden; margin-top: 60px;')
		v-list-tile(active.sync v-for='(item, i) in items', :key='item.title', :to="item.to" @click='drawer = false' active-class="blue-grey lighten-3" exact dense)
				v-list-tile-action
					v-icon(style='color: initial') {{ item.icon }}

				v-list-tile-content
					v-list-tile-title(style='color: initial') {{ item.title }}

	v-toolbar.dignity(app :clipped-left='clipped')
		v-toolbar-side-icon(@click.stop='drawer = !drawer')

		v-btn(icon @click.stop='miniVariant = !miniVariant')
			v-icon(v-html="miniVariant ? 'chevron_right' : 'chevron_left'")

		router-link(to="/codex" style="text-decoration: none;")
			v-btn(text icon @click.stop='clipped = !clipped', href='/')
				v-icon(large).mr-2 directions_bike

		v-btn.mr-2(text icon @click.stop='fixed = !fixed', href='/codex')
			v-icon.mr-1(large) account_balance
				

		v-toolbar-title.ml-0.dignity(v-text='title')

		v-spacer

		v-btn.hidden-sm-and-down(icon='', @click.stop='rightDrawer = !rightDrawer')
			v-icon(large) rowing

	v-content
		router-view.mt-5

	v-navigation-drawer.dignity(temporary='', :right='right', v-model='rightDrawer', fixed='', app='')
		v-toolbar(flat='')
			v-list.pa-0.dignity
				v-list-tile(avatar)
					img(src='@/assets/biohazard.svg', width='35px')

					v-list-tile-title.title
						| &nbsp; The Radical Right

		v-list
			v-list-tile(@click='right = !right' to='haiku')
				v-list-tile-action
					v-icon all_inclusive

				v-list-tile-title Functional Junctions

			v-list-tile(@click='right = !right' to='/berliner')
				v-list-tile-action
					v-icon restaurant

				v-list-tile-title Funky Junk Trunk

			v-list-tile(@click='right = !right' to='octavo')
				v-list-tile-action
					v-icon directions_bike

				v-list-tile-title Junto com Presunto

			v-list-tile(@click='right = !right' to='/comix')
				v-list-tile-action
					v-icon create

				v-list-tile-title Tack Tooltips Here

			v-list-tile(to='/quarto')
				v-list-tile-action
					v-icon waves

				v-list-tile-title Whatever Is This Drawer For?

			v-list-tile(@click='right = !right' to='/tabloid')
				v-list-tile-action
					v-icon local_dining

				v-list-tile-title Endless Options

	v-footer.hidden-md-and-down(:fixed='fixed', app='')
		span.ml-3.dignity
			i.fas.fa-cogs.fa-2x
			| &nbsp;Clonado na Samboja pelo Gran Bret&ocirc;nio 2018 e honi soit qui mal y pense
</template>


<script>
export default {
	data () {
		return {
			clipped: true,
			drawer: false,
			fixed: true,
			items: [
				{ icon: 'my_location', title: 'Imprints & Offprints', to: '/' },
				{ icon: 'local_bar', title: 'Haiku', to: '/haiku' },
				{ icon: 'code', title: 'Codex', to: '/codex' },
				{ icon: 'local_library', title: 'Folio', to: '/folio'},
				{ icon: 'share', title: 'Quarto', to: "/quarto" },
				{ icon: 'directions_walk', title: 'Octavo', to: "/octavo" },
				{ icon: 'search', title: 'Tabloid', to: "/tabloid" },
				{ icon: 'mic', title: 'Berliner', to: "/berliner" },
				{ icon: 'loop', title: 'Broadsheet', to: '/broadsheet' },
				{ icon: 'create', title: 'Marvel Comics', to: 'comix'},
				{ icon: 'translate', title: 'Playboy Centerfold', to: '/centerfold' },
				{ icon: 'shuffle', title: 'The Printing Press', to: '/vonnegut' },
				{ icon: 'tv', title: 'Maximum Digital', to: '/digital' }
		],
			miniVariant: false,
			right: true,
			rightDrawer: false,
			title: 'Engenho Novo LLC'
		}
	},
	name: 'App'
}
</script>

<style>

body, html {
	font-family: "News Cycle", sans-serif;
	font-weight: 300;
	font-style: normal !important;
}

blockquote {
	width: 350px;
	margin: 0 auto;
	text-align: center  ;
}


</style>
