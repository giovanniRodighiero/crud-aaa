export default {
  data: {
    singlePages: [
      {
        name: 'homepage',
        label: 'homepage',
        endpoint: '/pages/homepage',
        fields: [
          {
            name: 'metaTags',
            label: 'meta tags',
            type: 'object',
            nestedFields: [
              {
                name: 'html',
                label: 'html',
                type: 'object',
                nestedFields: [
                  {
                    name: 'title',
                    label: 'title',
                    type: 'text'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'about',
        label: 'About',
        endpoint: '/pages/about',
        fields: [
          {
            name: 'metaTags',
            label: 'meta tags',
            type: 'object',
            nestedFields: [
              {
                name: 'html',
                label: 'html',
                type: 'object',
                nestedFields: [
                  {
                    name: 'title',
                    label: 'title',
                    type: 'text'
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
}