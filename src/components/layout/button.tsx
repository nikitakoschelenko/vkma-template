import { FC, ReactNode, useCallback } from 'react'

import { push, useDeserialized } from '@itznevikat/router'
import { Cell, TabbarItem, VKCOM, usePlatform } from '@vkontakte/vkui'

type LayoutButtonProps = {
  story: string
  before: ReactNode
  children: ReactNode
}

export const LayoutButton: FC<LayoutButtonProps> = ({
  story,
  before,
  children
}) => {
  const platform = usePlatform()
  const { view, panel } = useDeserialized()

  const selected = story === view

  const onClick = useCallback(() => {
    // ± нативное поведение
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
  }, [view, story])

  return platform === VKCOM ? (
    <Cell
      key={story}
      before={before}
      style={
        selected
          ? {
              backgroundColor: 'var(--button_secondary_background)',
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
