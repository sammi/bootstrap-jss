import { hidden } from './hidden'

describe('Reboot', () => {
  it('hidden', () => {
    expect(hidden).toEqual({
      '[hidden]': {
        disable: 'none !important'
      }
    })
  })
})
