import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Codex from '@/components/Codex'
import Berliner from '@/components/Berliner'
import Broadsheet from '@/components/Broadsheet'
import Folio from '@/components/Folio'
import Quarto from '@/components/Quarto'
import Centerfold from '@/components/Centerfold'
import ComicBook from '@/components/ComicBook'
import Tabloid from '@/components/Tabloid'
import Microsoft from '@/components/Microsoft'
import Haiku from '@/components/Haiku'
import Octavo from '@/components/Octavo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'In Principio',
      component: Home
    },
    {
      path: '/vonnegut',
      name: 'Printing Press',
      component: Home
    },
    {
      path: '/haiku',
      name: 'Haiku',
      component: Haiku
    },
    {
      path: '/digital',
      name: 'Digital',
      component: Microsoft
    },
    {
      path: '/centerfold',
      name: 'Centerfold ',
      component: Centerfold
    },
    {
      path: '/tabloid',
      name: 'Tabloid ',
      component: Tabloid
    },
    {
      path: '/comix',
      name: 'ComicBook ',
      component: ComicBook
    },
    {
      path: '/codex',
      name: 'Codex',
      component: Codex
    },
    {
      path: '/broadsheet',
      name: 'Broadsheet',
      component: Broadsheet
    },
    {
      path: '/octavo',
      name: 'Octavo',
      component: Octavo
    },
    {
      path: '/folio',
      name: 'Folio',
      component: Folio
    },
    {
      path: '/berliner',
      name: 'Berliner',
      component: Berliner
    },
    {
      path: '/quarto',
      name: 'In Quarto',
      component: Quarto
    }
  ]
})
