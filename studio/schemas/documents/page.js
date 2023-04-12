import { i18n } from '../documentTranslation'


export default {

  // Setup a 'document' type to house the page builder field

  name: "page",
  type: "document",
  title: "Page",
  i18n,
  fields: [
    {
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        { type: 'hero' }, // hero.js (same applies for the other types)
        { type: 'herocopy' }, // hero.js (same applies for the other types)
        // etc...
        ]
    }
  ]
}