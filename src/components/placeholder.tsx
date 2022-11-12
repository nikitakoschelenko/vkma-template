import { FC } from 'react'
import { Placeholder } from '@vkontakte/vkui'

export const VoidPlaceholder: FC = () => (
  <Placeholder icon={<img src="/ghost.png" width="56" />} header="Пустота">
    Здесь ничего нет
  </Placeholder>
)

export const ErrorPlaceholder: FC = () => (
  <Placeholder
    icon={<img src="/anxious-face-with-sweat.png" width="56" />}
    header="Произошла ошибка"
  >
    Пожалуйста, попробуйте ещё раз позже
  </Placeholder>
)
