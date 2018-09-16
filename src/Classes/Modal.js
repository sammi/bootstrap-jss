import { zindexModal, zindexModalBackdrop } from '../Variables/Zindex'
import {
  modalDialogMargin, modalTransition,
  modalContentBg, modalContentBorderWidth, modalContentBorderColor, modalContentBorderRadius,
  modalContentBoxShadowXs, modalBackdropBg, modalBackdropOpacity,
  modalHeaderPadding, modalHeaderBorderWidth, modalHeaderBorderColor
} from '../Variables/Modals'
import { transition } from '../Mixins/transition'
import { size } from '../Functions/size'
import { borderRadius, borderTopRadius } from '../Mixins/borderRadius'
import { boxShadow } from '../Mixins/boxShadow'

const modalOpen = {
  overflow: 'hidden'
}

const modalDialog = {
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
}

const modal = {
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
}

const modalDialogCentered = {
  display: 'flex',
  alignItems: 'center',
  minHeight: `calc(100% - ${size(modalDialogMargin).value * 2}${size(modalDialogMargin).unit}))`
}

const modalContent = {
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
}

const modalBackdrop = {
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
}

const modalHeader = {
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
}

export {
  modalOpen,
  modal,
  modalDialog,
  modalDialogCentered,
  modalContent,
  modalBackdrop,
  modalHeader
}
