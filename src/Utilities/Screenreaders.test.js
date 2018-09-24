import { srOnly as seOnlyMixin, srOnlyFocusable as srOnlyFocusableMixin } from '../Mixins/screenReader'

import { srOnly, srOnlyFocusable } from './Screenreaders'

describe('screen readers', () => {
  it('sr-only', () => {
    expect(srOnly).toEqual(seOnlyMixin)
  })

  it('sr-only-focusable', () => {
    expect(srOnlyFocusable).toEqual(srOnlyFocusableMixin)
  })
})
