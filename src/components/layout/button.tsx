import { FC, ReactNode } from 'react'

import { push, useDeserialized } from '@itznevikat/router'
import { Cell, TabbarItem } from '@vkontakte/vkui'

type LayoutButtonProps = {
  mode: 'cell' | 'tabbarItem'
  story: string
  before: ReactNode
  children: ReactNode
}

export const LayoutButton: FC<LayoutButtonProps> = ({
  mode,
  story,
  before,
  children
}) => {
  const { view, panel } = useDeserialized()

  const selected = story === view

  const onClick = () => {
    // INFO: Похоже на нативное поведение
    if (view === story) {
      if (window.scrollY !== 0) {
        return window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })
      }

      if (panel === '/') return
    }

    push(story)
  }

  return mode === 'cell' ? (
    <Cell
      key={story}
      before={before}
      style={
        selected
          ? {
              backgroundColor: 'var(--vkui--color_background_secondary_alpha)',
              borderRadius: 8
            }
          : {}
      }
      onClick={onClick}
    >
      {children}
    </Cell>
  ) : (
    <TabbarItem
      key={story}
      selected={selected}
      text={children}
      onClick={onClick}
    >
      {before}
    </TabbarItem>
  )
}
