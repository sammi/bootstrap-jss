import React from 'react'
import { storiesOf } from '@storybook/react'
import { Reboot, Classes, Utilities } from 'bootstrap-jss'
import injectSheet from 'react-jss'

const { btn, btnThemeColors } = Classes.Buttons
const { card, cardImgTop, cardBody, cardTitle, cardText, cardLink, cardSubtitle } = Classes.Card
const { textMuted } = Utilities.Text

const btnColors = btnThemeColors()

const Card = injectSheet({
  focus: {}, 
  disabled: {}, 
  active: {},
  show: {},
  listGroup: {},
  listGroupItem: {},
  dropdownToggle: {},
  cardImgTop,
  cardBody,
  cardTitle,
  cardText,
  btnPrimary: {
    ...btn,
    ...btnColors.btnPrimary,
    ...Reboot.links.a
  },
  card: {
    ...card,
    width: '18rem'
  }
})(({classes}) => (
  <div className={classes.card}>
    <img className={classes.cardImgTop} src="img/286_180.svg" />
    <div className={classes.cardBody}>
      <h5 className={classes.cardTitle}>Card title</h5>
      <p className={classes.cardText}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className={classes.btnPrimary}>Go somewhere</a>
    </div>
  </div>
))

const CardContentType = injectSheet({
  focus: {}, 
  disabled: {}, 
  active: {},
  show: {},
  listGroup: {},
  listGroupItem: {},
  dropdownToggle: {},
  cardImgTop,
  cardBody,
  cardTitle,
  cardText,
  cardLink: {
    ...cardLink,
    ...Reboot.links.a,
    marginRight: '0.25rem'
  },
  card: {
    ...card,
    width: '18rem'
  },
  cardSubtitle: {
    ...cardSubtitle,
    marginBottom: '0.25rem',
    ...textMuted
  }
})(({classes}) => (
  <div className={classes.card}>
    <div className={classes.cardBody}>
      <h5 className={classes.cardTitle}>Card title</h5>
      <h6 className={classes.cardSubtitle}>Card subtitle</h6>
      <p className={classes.cardText}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className={classes.cardLink}>Card link</a>
      <a href="#" className={classes.cardLink}>Another link</a>
    </div>
  </div>
))

storiesOf('Card', module)
  .add('card', () => <Card />)
  .add('content type', () =>
    <CardContentType/>
  )
  