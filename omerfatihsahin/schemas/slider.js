export default {
    name: 'slider',
    title: 'Slider',
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
        name: 'name_1',
        title: 'Başlık 1',
        type: 'string',
      },
      { 
        name: 'name_2',
        title: 'Başlık 2',
        type: 'string',
      },
      { 
        name: 'name_3',
        title: 'Başlık 3',
        type: 'string',
      },
      { 
        name: 'desc',
        title: 'Açıklama',
        type: 'string',
      },
      { 
        name: 'button_text',
        title: 'Buton Metin',
        type: 'string',
      },
      { 
        name: 'button_link',
        title: 'Buton Link',
        type: 'string',
      }
    ]
  }