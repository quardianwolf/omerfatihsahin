export default {
    name: 'iletisim',
    title: 'Iletisim',
    type: 'document',
    fields: [ 
      { 
        name: 'phone_1',
        title: 'Telefon 1',
        type: 'string',
      },
      { 
        name: 'phone_2',
        title: 'Telefon 2',
        type: 'string',
      },
      { 
        name: 'whatsapp',
        title: 'Whatsapp',
        type: 'string',
      },
      { 
        name: 'instagram',
        title: 'Instagram',
        type: 'string',
      },
      { 
        name: 'twitter',
        title: 'Twitter',
        type: 'string',
      },
      { 
        name: 'facebook',
        title: 'Facebook',
        type: 'string',
      },
      { 
        name: 'youtube',
        title: 'Youtube',
        type: 'string',
      },
      { 
        name: 'address',
        title: 'Adres',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Iletisim Sayfasi Resim',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      }
    ]
  }