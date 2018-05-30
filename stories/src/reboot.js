import React from 'react'
import { storiesOf } from '@storybook/react'
import { Heading } from './reboot/Heading'
import { TextLevelSemantics } from './reboot/TextLevelSemantics'
import { EmbeddedContent } from './reboot/EmbeddedContent'
import { InteractiveContent } from './reboot/InteractiveContent'
import { GroupingContent } from './reboot/GroupingContent'
import { TabularData } from './reboot/TabularData'
import { Forms } from './reboot/Forms'

import injectSheet, {jss} from 'react-jss'

import * as Bootstrap from 'bootstrap-jss'
import isolate from 'jss-isolate'

jss.use(isolate({ reset: {...Bootstrap.Reboot} }))

storiesOf('Reboot', module)
  .add('Reboot elements', () => <div>
      <Heading />
      <TextLevelSemantics />
      <EmbeddedContent />
      <InteractiveContent />
      <GroupingContent />
      <TabularData />
      <Forms />
    </div>
)
