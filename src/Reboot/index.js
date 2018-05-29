import { boxSizing } from './boxSizing'
import { html } from './html'
import { msViewPort } from './msViewPort'
import { html5ForOldBrowsers } from './html5ForOldBrowsers'
import { body } from './body'
import { suppressFocusOutline } from './suppressFocusOutline'
import { hrContentGrouping } from './hrContentGrouping'
import { headerMargin } from './headerMargin'
import { paragraphMargin } from './paragraphMargin'
import { abbreviations } from './abbreviations'
import { address } from './address'
import { list } from './list'
import { blockquote } from './blockquote'
import { dfn } from './dfn'
import { strong } from './strong'
import { small } from './small'
import { subSup } from './subSup'
import { links } from './links'
import { code } from './code'
import { figure } from './figure'
import { image } from './image'
import { tables } from './tables'
import { forms } from './forms'
import { output } from './output'
import { summary } from './summary'
import { template } from './template'
import { hidden } from './hidden'

const checkExported = true

export {
  boxSizing,
  html,
  msViewPort,
  html5ForOldBrowsers,
  body,
  suppressFocusOutline,
  hrContentGrouping,
  headerMargin,
  paragraphMargin,
  abbreviations,
  address,
  list,
  blockquote,
  dfn,
  strong,
  small,
  subSup,
  links,
  code,
  figure,
  image,
  tables,
  forms,
  output,
  summary,
  template,
  hidden,
  checkExported
}

export default {
  ...boxSizing,
  ...html,
  ...msViewPort,
  ...html5ForOldBrowsers,
  ...body,
  ...suppressFocusOutline,
  ...hrContentGrouping,
  ...headerMargin,
  ...paragraphMargin,
  ...abbreviations,
  ...address,
  ...list,
  ...blockquote,
  ...dfn,
  ...strong,
  ...small,
  ...subSup,
  ...links,
  ...code,
  ...figure,
  ...image,
  ...tables,
  ...forms,
  ...output,
  ...summary,
  ...template,
  ...hidden
}
