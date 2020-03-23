module.exports = {
  siteName: `Nicky Duvieilh`,
  titleTemplate: `%s - Nicky Duvieilh`,

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/*.md',
        typeName: 'BlogPost',
        route: '/:slug',
        refs: {
          // Reference to existing authors by id.
          author: {
            typeName: 'Author',
            create: true
          },
          // Create a Tag content type and its nodes automatically.
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    }
  ]
}
