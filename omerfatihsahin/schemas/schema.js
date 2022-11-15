import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import blog from './blog';
import hakkimda from './hakkimda';
import iletisim from './iletisim';
import contact from './contact';
import slider from './slider';
import tedaviler from './tedaviler';

export default createSchema({
  // We name our schema
  name: 'default',
  types: schemaTypes.concat([ slider, tedaviler, blog, hakkimda, iletisim, contact  ]),
})
