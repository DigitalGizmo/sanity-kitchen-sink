export default {
  widgets: [
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
                  buildHookId: '5fa037b58642f5009545da87',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-qcpxuhs4',
                  apiId: 'a1dcd340-dcac-43b6-9dbd-18d78d443884'
                },
                {
                  buildHookId: '5fa037b5632ee600f5db91aa',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-j899d7xr',
                  apiId: '51958c18-9d4f-4178-8916-0848f9b6f526'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DigitalGizmo/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-j899d7xr.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
