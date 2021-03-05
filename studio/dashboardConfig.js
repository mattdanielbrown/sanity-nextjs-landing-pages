export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6041f407e44054a9d2eb9fbf',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-7eydd71w',
                  apiId: 'edbdb8c6-0fb2-4dbe-bdc7-c63d64f08f06'
                },
                {
                  buildHookId: '6041f408fb04afa6e578b902',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-hra2znrn',
                  apiId: '86522b49-5646-4469-8ca5-e13a3dcdfdd9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mattdanielbrown/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-hra2znrn.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
