mport React from 'react'
import { shallow, mount } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import spies from 'chai-spies'
import { Player } from './Edge'

chai.use(spies)
chai.use(chaiEnzyme())

const playerProps = {
  edgeId: '0',
  taken: false,
  type: 'horizontal'
}


describe('<Edge />', () => {
  const takeEdge = chai.spy()
  const edge = shallow(<Edge { ...edgeProps } takeEdge={ takeEdge }/>)

  it('has a tag name div', () => {
    expect(edge).to.have.tagName('div')
  })

  it('has a class "horizontal"', () => {
    expect(edge).to.have.className('horizontal')
  })

  describe('take Edge', () => {

    it('sets taken to trues when we click it', () => {
      const { edgeId } = playerProps
      player.find('.free').simulate('click')
      expect(takeEdge).to.have.been.called
    })
  })
})
