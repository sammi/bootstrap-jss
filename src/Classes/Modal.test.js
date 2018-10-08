import { zindexModal, zindexModalBackdrop } from '../Variables/Zindex'
import {
  modalDialogMargin, modalTransition,
  modalContentBg, modalContentBorderWidth, modalContentBorderColor, modalContentBorderRadius,
  modalContentBoxShadowXs, modalBackdropBg, modalBackdropOpacity,
  modalHeaderPadding, modalHeaderBorderWidth, modalHeaderBorderColor,
  modalTitleLineHeight, modalInnerPadding, modalFooterBorderWidth, modalFooterBorderColor,
  modalMd, modalDialogMarginYSmUp, modalContentBoxShadowSmUp, modalSm, modalLg
} from '../Variables/Modals'
import { transition } from '../Mixins/transition'
import { size } from '../Functions/size'
import { borderRadius, borderTopRadius } from '../Mixins/borderRadius'
import { boxShadow } from '../Mixins/boxShadow'
import { mediaBreakpointUp } from '../Mixins/breakpoints'
import { gridBreakpoints } from '../Variables/Grid'
import { close } from '../Classes/Close'
import {
  modalOpen,
  modal,
  modalDialog,
  modalDialogCentered,
  modalContent,
  modalBackdrop,
  modalHeader,
  modalTitle,
  modalBody,
  modalFooter,
  modalScrollbarMeasure,
  modalResponsive
} from './Modal'
import jss from 'jss'
import preset from 'jss-preset-default'
jss.setup(preset())

describe('modal', () => {
  it('modal-open', () => {
    expect(modalOpen).toEqual({
      overflow: 'hidden'
    })
    expect(jss.createStyleSheet({ modalOpen }).toString()).toBeDefined()
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
      '&$modalOpen &': {
        overflowX: 'hidden',
        overflowY: 'auto'
      }
    })
    expect(jss.createStyleSheet({ modalOpen: {}, modal }).toString()).toBeDefined()
  })

  it('modal-dialog', () => {
    expect(modalDialog).toEqual({
      position: 'relative',
      width: 'auto',
      margin: modalDialogMargin,
      pointerEvents: 'none',
      '&$modal$fade &': {
        ...transition(modalTransition),
        transform: `translate(0, -25%)`
      },
      '&$modal$show &': {
        transform: `translate(0, 0)`
      }
    })
    expect(jss.createStyleSheet({ modal: {}, show: {}, fade: {}, modalDialog }).toString()).toBeDefined()
  })

  it('modal-dialog-centered', () => {
    expect(modalDialogCentered).toEqual({
      display: 'flex',
      alignItems: 'center',
      minHeight: `calc(100% - ${size(modalDialogMargin).value * 2}${size(modalDialogMargin).unit}))`
    })
    expect(jss.createStyleSheet({ modalDialogCentered }).toString()).toBeDefined()
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
    expect(jss.createStyleSheet({ modalContent }).toString()).toBeDefined()
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
      '&$fade': {
        opacity: 0
      },
      '&$show': {
        opacity: modalBackdropOpacity
      }
    })
    expect(jss.createStyleSheet({ fade: {}, show: {}, modalBackdrop }).toString()).toBeDefined()
  })

  it('modal-header', () => {
    expect(modalHeader).toEqual({
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      padding: modalHeaderPadding,
      borderBottom: `${modalHeaderBorderWidth} solid ${modalHeaderBorderColor}`,
      ...borderTopRadius(modalContentBorderRadius),
      '&$close': {
        padding: modalHeaderPadding,
        margin: `-${modalHeaderPadding} -${modalHeaderPadding} -${modalHeaderPadding} auto`
      }
    })
    expect(jss.createStyleSheet({ close: {}, modalHeader }).toString()).toBeDefined()
  })

  it('modal-title', () => {
    expect(modalTitle).toEqual({
      marginBottom: 0,
      lineHeight: modalTitleLineHeight
    })
    expect(jss.createStyleSheet({ modalTitle }).toString()).toBeDefined()
  })

  it('modal-body', () => {
    expect(modalBody).toEqual({
      position: 'relative',
      flex: '1 1 auto',
      padding: modalInnerPadding
    })
    expect(jss.createStyleSheet({ modalBody }).toString()).toBeDefined()
  })

  it('modal-footer', () => {
    expect(modalFooter).toEqual({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: modalInnerPadding,
      borderTop: `${modalFooterBorderWidth} solid ${modalFooterBorderColor}`,
      '& > :not(:first-child)': {
        marginLeft: '.25rem'
      },
      '& > :not(:last-child)': {
        marginRight: '.25rem'
      }
    })
    expect(jss.createStyleSheet({ modalFooter }).toString()).toBeDefined()
  })

  it('modal-scrollbar-measue', () => {
    expect(modalScrollbarMeasure).toEqual({
      position: 'absolute',
      top: '-9999px',
      width: '50px',
      height: '50px',
      overflow: 'scroll'
    })
    expect(jss.createStyleSheet({ modalScrollbarMeasure }).toString()).toBeDefined()
  })

  it('modal-reponsive', () => {
    expect(modalResponsive).toEqual({
      ...mediaBreakpointUp('sm', gridBreakpoints, {
        '$modalDialog': {
          maxWidth: modalMd,
          margin: `${modalDialogMarginYSmUp} auto`
        },
        '$modalDialogCentered': {
          minHeight: `calc(100% - ${size(modalDialogMarginYSmUp).value * 2}${size(modalDialogMarginYSmUp).unit})`
        },
        '$modalContent': {
          ...boxShadow(modalContentBoxShadowSmUp)
        },
        '$modalSm': {
          maxWidth: modalSm
        }
      }),
      ...mediaBreakpointUp('lg', gridBreakpoints, {
        '$modalLg': {
          maxWidth: modalLg
        }
      })
    })
    expect(jss.createStyleSheet({
      modalDialog: {},
      modalDialogCentered: {},
      modalContent: {},
      modalLg: {},
      modalSm: {},
      modalResponsive
    }).toString()).toBeDefined()
  })
})
