import * as Colors from './Colors'
import * as Options from './Options'
import * as Spacing from './Spacing'
import * as Body from './Body'
import * as Links from './Links'
import * as Paragraphs from './Paragraphs'
import * as Grid from './Grid'
import * as Components from './Components'
import * as Fonts from './Fonts'
import * as Tables from './Tables'
import * as InputButtons from './InputButtons'
import * as Buttons from './Buttons'
import * as Forms from './Forms'
import * as Dropdowns from './Dropdowns'
import * as Zindex from './Zindex'
import * as Navs from './Navs'
import * as Navbar from './Navbar'
import * as Pagination from './Pagination'
import * as Jumbotron from './Jumbotron'
import * as Cards from './Cards'
import * as Tooltips from './Tooltips'
import * as Popovers from './Popovers'
import * as Badges from './Badges'
import * as Modals from './Modals'
import * as Alerts from './Alerts'
import * as Progressbars from './Progressbars'
import * as Listgroup from './Listgroup'
import * as Imagethumbnails from './Imagethumbnails'
import * as Figures from './Figures'
import * as Breadcrumbs from './Breadcrumbs'
import * as Carousel from './Carousel'
import * as Close from './Close'
import * as Code from './Code'
import * as Printing from './Printing'

import * as Variables from './index'

import format from 'string-format'

describe('Variables', () => {
  it('Variables', () => {
    expect(Variables).toEqual({
      Colors,
      Options,
      Spacing,
      Body,
      Links,
      Paragraphs,
      Grid,
      Components,
      Fonts,
      Tables,
      InputButtons,
      Buttons,
      Forms,
      Dropdowns,
      Zindex,
      Navs,
      Navbar,
      Pagination,
      Jumbotron,
      Cards,
      Tooltips,
      Popovers,
      Badges,
      Modals,
      Alerts,
      Progressbars,
      Listgroup,
      Imagethumbnails,
      Figures,
      Breadcrumbs,
      Carousel,
      Close,
      Code,
      Printing,
      checkExported: true
    })

    Object.keys(Variables).forEach(key => {
      var variable = Variables[key]
      Object.keys(variable).forEach(k => {
        if (variable === undefined || variable[k] === undefined) {
          fail(format('Undefined {}.{} = {}', key, k, variable[k]))
        }
      })
    })
  })
})
