// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import { inBrowser } from 'vitepress'
import useVisitData from './useVisitData'
import './style/var.css';
import Confetti from './components/Confetti.vue'
import DataPanel from './components/DataPanel.vue'
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';
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
    app.component("Confetti", Confetti);
    app.component("DataPanel", DataPanel);
  },
  setup() {
    // Get frontmatter and route
    const { frontmatter } = useData();
    const route = useRoute();

    // Obtain configuration from: https://giscus.app/
    giscusTalk({
      repo: 'HerryXiaoo/HerryXiaoo',
      repoId: 'R_kgDOKisFmQ',
      category: 'Q&A',
      categoryId: 'DIC_kwDOKisFmc4CnEml',
      mapping: 'pathname',
      inputPosition: 'top',
      lang: 'en',
      lightTheme: 'light',
      darkTheme: 'transparent_dark'
    }, {
      frontmatter,
      route
    },
      false
    );
  }

}


