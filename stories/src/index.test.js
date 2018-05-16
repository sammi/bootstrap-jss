import React from 'react'
import renderer from 'react-test-renderer'

test('button', () => {

  const component = renderer.create(
    <button>hi</button>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
