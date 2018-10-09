import React from 'react'
import { storiesOf } from '@storybook/react'
import { Reboot, Classes } from 'bootstrap-jss'
import injectSheet from 'react-jss'

const { btn, btnThemeColors } = Classes.Buttons
const { card, cardImgTop, cardBody, cardTitle, cardText, cardGroup } = Classes.Card

const btnColors = btnThemeColors()

const styles = {
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
}

const Card = injectSheet(styles)(({classes}) => (
  <div className={classes.card}>
    <img className={classes.cardImgTop} src="img/286_180.svg" />
    <div className={classes.cardBody}>
      <h5 className={classes.cardTitle}>Card title</h5>
      <p className={classes.cardText}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className={classes.btnPrimary}>Go somewhere</a>
    </div>
  </div>
))

storiesOf('Card', module)
  .add('card', () => <Card />)
  