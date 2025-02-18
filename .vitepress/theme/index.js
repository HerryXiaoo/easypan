// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import { inBrowser } from 'vitepress'
import useVisitData from './useVisitData'
import './style/var.css';
import DataPanel from '../../DataPanel.vue'
/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    if (inBrowser) {
      useVisitData()
    }
    app.component('DataPanel', DataPanel)
  }
}


