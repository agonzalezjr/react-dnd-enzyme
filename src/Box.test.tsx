import React from 'react';
import { wrapInTestContext } from 'react-dnd-test-utils'
import { Box } from './Box';
import { mount } from 'enzyme';


describe('box', () => {

  it('drags - with enzyme', () => {
    const BoxWithTestContext = wrapInTestContext(Box)
    const ref = React.createRef()
    
    const root = mount(
      <>
        <BoxWithTestContext ref={ref} name="test" />
      </>
    )
    expect(root).toBeDefined()

    const backend = (ref.current as any).getManager().getBackend()
    expect(backend).toBeDefined()

    // How do I get the component's getHandlerId() to be able to call
    // backend.simulateBeginDrag(...), etc...
  });
})
