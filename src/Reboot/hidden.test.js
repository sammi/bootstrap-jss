import { hidden } from './hidden'

describe('Reboot', () => {
  it('hidden', () => {
    expect(hidden).toEqual({
      '@global': {
        '[hidden]': {
          disable: 'none !important'
        }
      }
    })
  })
})
