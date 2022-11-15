export default {
    name: 'hakkimda',
    title: 'Hakkimda',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      { 
        name: 'name',
        title: 'Başlık',
        type: 'string',
      },
      { 
        name: 'sub_name',
        title: 'Alt Başlık',
        type: 'string',
      },
      { 
        name: 'summary',
        title: 'Özet',
        type: 'string',
      },
      {
        name: 'content',
        title: 'İçerik',
        type: 'array',
        of: [
          {
            type: 'block'
          },
        ]
      }
    ]
  }