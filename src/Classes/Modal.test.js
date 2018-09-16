import { zindexModal } from '../Variables/Zindex'
import {
  modalDialogMargin, modalTransition,
  modalContentBg, modalContentBorderWidth, modalContentBorderColor, modalContentBorderRadius,
  modalContentBoxShadowXs, zindexModalBackdrop, modalBackdropBg, modalBackdropOpacity,
  modalHeaderPadding, modalHeaderBorderWidth, modalHeaderBorderColor
} from '../Variables/Modals'
import { transition } from '../Mixins/transition'
import { size } from '../Functions/size'
import { borderRadius, borderTopRadius } from '../Mixins/borderRadius'
import { boxShadow } from '../Mixins/boxShadow'

import {
  modalOpen, modal, modalDialog, modalDialogCentered, modalContent, modalBackdrop,
  modalHeader
} from './Modal'

describe('modal', () => {
  it('modal-open', () => {
    expect(modalOpen).toEqual({
      overflow: 'hidden'
    })
  })

  it('modal', () => {
    expect(modal).toEqual({
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: zindexModal,
      display: 'none',
      overflow: 'hidden',
      outline: 0,
      'modalOpen &': {
        overflowX: 'hidden',
        overflowY: 'auto'
      }
    })
  })

  it('modal-dialog', () => {
    expect(modalDialog).toEqual({
      position: 'relative',
      width: 'auto',
      margin: modalDialogMargin,
      pointerEvents: 'none',
      'modal.fade &': {
        ...transition(modalTransition),
        transform: `translate(0, -25%)`
      },
      'modal.show &': {
        transform: `translate(0, 0)`
      }
    })
  })

  it('modal-dialog-centered', () => {
    expect(modalDialogCentered).toEqual({
      display: 'flex',
      alignItems: 'center',
      minHeight: `calc(100% - ${size(modalDialogMargin).value * 2}${size(modalDialogMargin).unit}))`
    })
  })

  it('modal-content', () => {
    expect(modalContent).toEqual({
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      pointerEevents: 'auto',
      backgroundColor: modalContentBg,
      backgroundClip: 'padding-box',
      border: `${modalContentBorderWidth} solid ${modalContentBorderColor}`,
      ...borderRadius(modalContentBorderRadius),
      ...boxShadow(modalContentBoxShadowXs),
      outline: 0
    })
  })

  it('modal-backdrop', () => {
    expect(modalBackdrop).toEqual({
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: zindexModalBackdrop,
      backgroundColor: modalBackdropBg,
      '&.fade': {
        opacity: 0
      },
      '&.show': {
        opacity: modalBackdropOpacity
      }
    })
  })

  it('modal-header', () => {
    expect(modalHeader).toEqual({
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      padding: modalHeaderPadding,
      borderBottom: `${modalHeaderBorderWidth} solid ${modalHeaderBorderColor}`,
      ...borderTopRadius(modalContentBorderRadius),
      close: {
        padding: modalHeaderPadding,
        margin: `-${modalHeaderPadding} -${modalHeaderPadding} -${modalHeaderPadding} auto`
      }
    })
  })
})
