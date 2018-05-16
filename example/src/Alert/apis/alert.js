import fetch from 'node-fetch'

export const alertAPI = () => fetch('/alert')
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(error => console.log(error))
