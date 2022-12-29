import { ReactNode } from 'react'
import styled from '@emotion/styled'

import { maxLayoutWidth } from 'src/theme/media'

type FrameProps = {
  children: ReactNode
}

const Frame = ({ children }: FrameProps) => {
  return <Wrapper>{children}</Wrapper>
}

export default Frame

const Wrapper = styled('div')(({ theme: { media } }) => ({
  width: '100%',
  height: '100%',
  maxWidth: maxLayoutWidth,
  margin: '0 auto',
  [media]: {
    // TODO: add padding
  },
}))
