import { FC, Fragment } from 'react'

import { Icon28HomeOutline, Icon28InfoOutline } from '@vkontakte/icons'

import { LayoutButton } from './button'

type LayoutNavProps = {
  mode: 'cell' | 'tabbarItem'
}

export const LayoutNav: FC<LayoutNavProps> = ({ mode }) => (
  <Fragment>
    <LayoutButton mode={mode} story="/" before={<Icon28HomeOutline />}>
      Главная
    </LayoutButton>
    <LayoutButton mode={mode} story="/info" before={<Icon28InfoOutline />}>
      О приложении
    </LayoutButton>
  </Fragment>
)
