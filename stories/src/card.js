import React from 'react'
import { storiesOf } from '@storybook/react'
import { Reboot, Classes, Utilities } from 'bootstrap-jss'
import injectSheet from 'react-jss'

const { btn, btnThemeColors } = Classes.Buttons
const {
  card, cardImgTop, cardBody, cardTitle,
  cardText, cardLink, cardSubtitle, cardHeader,
  cardGroup
} = Classes.Card
const { textMuted } = Utilities.Text
const { listGroup, listGroupItem, listGroupFlush } = Classes.ListGroup

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
})(({ classes }) => (
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
})(({ classes }) => (
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

const CardListGroup = injectSheet({
  focus: {},
  disabled: {},
  active: {},
  show: {},
  listGroup: {},
  listGroupItem: {},
  dropdownToggle: {},
  card: {
    ...card,
    width: '18rem'
  },
  listGroup: {
    ...listGroup,
    ...listGroupFlush
  },
  cardHeader,
  listGroupItem
})(({ classes }) => (
  <div className={classes.card}>
    <div className={classes.cardHeader}>
      Featured
    </div>
    <ul className={classes.listGroup}>
      <li className={classes.listGroupItem}>Cras justo odio</li>
      <li className={classes.listGroupItem}>Dapibus ac facilisis in</li>
      <li className={classes.listGroupItem}>Vestibulum at eros</li>
    </ul>
  </div>
))

const CardGroup = injectSheet({
  listGroup: {},
  listGroupItem: {},
  card: {
    ...card,
    width: '20rem'
  },
  cardGroup: {
    ...cardGroup()
  },
  cardImgTop,
  cardBody,
  cardTitle,
  cardText,
  textMuted
})(({ classes }) => (
  <div className={classes.cardGroup}>
    <div className={classes.card}>
      <img className={classes.cardImgTop} src="img/286_180.svg" alt="Card image cap"/>
        <div className={classes.cardBody}>
          <h5 className={classes.cardTitle}>Card title</h5>
          <p className={classes.cardText}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className={classes.cardText}><small className={classes.textMuted}>Last updated 3 mins ago</small></p>
        </div>
    </div>
    <div className={classes.card}>
      <img className={classes.cardImgTop} src="img/286_180.svg" alt="Card image cap"/>
        <div className={classes.cardBody}>
          <h5 className={classes.cardTitle}>Card title</h5>
          <p className={classes.cardText}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className={classes.cardText}><small className={classes.textMuted}>Last updated 3 mins ago</small></p>
        </div>
    </div>
    <div className={classes.card}>
      <img className={classes.cardImgTop} src="img/286_180.svg" alt="Card image cap"/>
        <div className={classes.cardBody}>
          <h5 className={classes.cardTitle}>Card title</h5>
          <p className={classes.cardText}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className={classes.cardText}><small className={classes.textMuted}>Last updated 3 mins ago</small></p>
        </div>
    </div>
  </div>
))
        
        storiesOf('Card', module)
  .add('card', () => <Card />)
  .add('content type', () => <CardContentType />)
  .add('list group', () => <CardListGroup />)
  .add('card group', () => <CardGroup />)
  