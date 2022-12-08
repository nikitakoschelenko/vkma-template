import { FC, useEffect } from 'react'
import { block, push, replace, useActionRef } from '@itznevikat/router'
import {
  Icon24Spinner,
  Icon28ArticleOutline,
  Icon28CancelCircleOutline,
  Icon28CheckCircleOutline,
  Icon28ChevronRightOutline,
  Icon28CompassOutline,
  Icon28ErrorOutline,
  Icon28GhostOutline,
  Icon28PawOutline,
  Icon28WarningTriangleOutline
} from '@vkontakte/icons'
import { send } from '@vkontakte/vk-bridge'
import {
  Avatar,
  Gradient,
  Group,
  NavIdProps,
  Panel,
  PanelHeader,
  Platform,
  SimpleCell,
  Text,
  Title,
  usePlatform
} from '@vkontakte/vkui'
import { classNamesString } from '@vkontakte/vkui/dist/lib/classNames'

import { ErrorSnackbar, SuccessSnackbar } from '../../components'
import { useSnackbar, useUser } from '../../hooks'

import './home.css'

export const Home: FC<NavIdProps> = (props) => {
  const platform = usePlatform()

  const { user, setUser } = useUser()
  const { setSnackbar } = useSnackbar()

  const { setActionRefHandler } = useActionRef(() =>
    push('/?popout=test-action-sheet')
  )

  useEffect(() => {
    send('VKWebAppGetUserInfo').then((value) => setUser(value))
  }, [])

  const openScreenSpinner = async (): Promise<void> => {
    replace('/?popout=screen-spinner')

    // INFO: Блокируем нажатие кнопки назад
    const unblock = block(() => void 0)

    // INFO: Загрузка данных
    setTimeout(() => {
      // INFO: Разблокировка
      unblock()
      replace('/')
    }, 2000)
  }

  return (
    <Panel {...props}>
      <PanelHeader>Главная</PanelHeader>

      <Group>
        <Gradient
          className={classNamesString(
            'Gradient',
            platform === Platform.VKCOM && 'Gradient__desktop'
          )}
        >
          <Avatar src={user?.photo_100} size={96} />
          <Title className="Gradient_Title" level="2" weight="2">
            {!user && 'Загрузка...'}
            {user?.first_name} {user?.last_name}
          </Title>
          <Text weight="3" className="Gradient_Subtitle">
            Пользователь
          </Text>
        </Gradient>

        <Group mode="plain">
          <SimpleCell
            before={<Icon28PawOutline />}
            after={<Icon28ChevronRightOutline />}
            onClick={() => push('/persik')}
          >
            Перейти к Персику
          </SimpleCell>

          <SimpleCell
            before={<Icon28CompassOutline />}
            after={<Icon28ChevronRightOutline />}
            onClick={() => push('/components')}
          >
            Перейти к компонентам
          </SimpleCell>

          <SimpleCell
            before={<Icon28ErrorOutline />}
            after={<Icon28ChevronRightOutline />}
            onClick={() => push('/abobus')}
          >
            Перейти к 404 странице
          </SimpleCell>
        </Group>
      </Group>

      <Group>
        <SimpleCell
          before={<Icon28GhostOutline />}
          onClick={() => push('/?modal=test-modal-card')}
        >
          Показать модальную карточку
        </SimpleCell>
      </Group>

      <Group>
        <SimpleCell
          before={<Icon28ArticleOutline />}
          onClick={setActionRefHandler}
        >
          Показать действия
        </SimpleCell>

        <SimpleCell
          before={<Icon28WarningTriangleOutline />}
          onClick={() => push('/?popout=test-alert')}
        >
          Показать предупреждение
        </SimpleCell>

        <SimpleCell
          before={<Icon24Spinner width={28} />}
          onClick={openScreenSpinner}
        >
          Показать экран загрузки
        </SimpleCell>
      </Group>

      <Group>
        <SimpleCell
          before={<Icon28CheckCircleOutline />}
          onClick={() =>
            setSnackbar(<SuccessSnackbar>Произошёл успех</SuccessSnackbar>)
          }
        >
          Показать добрый снекбар
        </SimpleCell>

        <SimpleCell
          before={<Icon28CancelCircleOutline />}
          onClick={() =>
            setSnackbar(<ErrorSnackbar>Произошла ошибка</ErrorSnackbar>)
          }
        >
          Показать злой снекбар
        </SimpleCell>
      </Group>
    </Panel>
  )
}
