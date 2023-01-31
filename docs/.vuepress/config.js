const path = require('path')

module.exports = {
  title: '网站标题',
  description: '网站描述',
  base: '/vuepress-starter/', // 网站部署到一个非根路径
  configureWebpack: {
    resolve: {
      alias: {
        '@img': '/docs/img'
      }
    }
  },
  markdown: {
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2, 3] },
    extendMarkdown: md => {
      // 使用更多的 markdown-it 插件!
      // md.use(require('markdown-it-xxx'))
    },
    lineNumbers: true
  },
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'VuePress Page',
      description: 'Vue-powered Static Site Generator'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'VuePress 页面',
      description: 'Vue 驱动的静态网站生成器'
    }
  },
  themeConfig: {
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        algolia: {},
        nav: [{ text: 'Nested', link: '/nested/', ariaLabel: 'Nested' }],
        sidebar: {
          '/': [
            /* ... */
          ],
          '/nested/': [
            /* ... */
          ]
        }
      },
      '/zh/': {
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        // 编辑链接文字
        editLinkText: '在 GitHub 上编辑此页',
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: '发现新内容可用.',
            buttonText: '刷新'
          }
        },
        // 当前 locale 的 algolia docsearch 选项
        algolia: {},
        nav: [{ text: '嵌套', link: '/zh/nested/' }],
        sidebar: {
          '/zh/': [
            /* ... */
          ],
          '/zh/nested/': [
            /* ... */
          ]
        }
      }
    }
  }
}
