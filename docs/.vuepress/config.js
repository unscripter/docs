module.exports = {
  title: 'Anatta Documentation Guide',
  description: 'Anatta documentation for all projects',
  themeConfig: {
    logo: '/anatta.png',
    lastUpdated: 'Last updated',
    repo: 'https://github.com/anattadesign/anatta-docs',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Recommend a change',
    nav: [ {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Clients',
        link: '/clients/'
      },
      {
        text: 'Projects',
        items: [ {
          text: `Storefront`,
          link: '/projects/storefront/'
        }, {
          text: `Rothys`,
          link: '/projects/rothys/'
        } ]
      },
      {
        text: 'Contact',
        items: [ {
            text: 'Twitter',
            link: 'https://www.twitter.com/'
          },
          {
            text: 'Email',
            link: 'mailto:hello@email.com'
          }
        ]
      }
    ],
    sidebar: {
      '/projects/rothys/': [ {
        title: 'Rothys',
        collapsable: false,
        children: [
          'rothys',
          'rothys/development'
        ]
      } ],
      '/projects/storefront': [ {
          title: 'General Information',
          collapsable: false,
          children: [
            'storefront/',
          ]
        },
        {
          title: 'Directory Structure',
          collapsable: false,
          children: [
            'storefront/directory'
          ]
        },
        {
          title: 'Development Guide',
          collapsable: false,
          children: [
            'storefront/development'
          ]
        },
        {
          title: 'Basics',
          collapsable: false,
          children: [
            'storefront/typescript'
          ]
        },
        {
          title: 'Integrations',
          collapsable: false,
          children: [
            'storefront/integrations'
          ]
        },
        {
          title: 'Schema',
          collapsable: false,
          children: [
            'storefront/schema'
          ]
        },

      ]
    },
    plugins: [ '@vuepress/active-header-links' ]
  }
}