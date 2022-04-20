import { FC, useEffect } from 'react';
import { block, push, replace, useActionRef } from '@itznevikat/router';
import { useAtomState } from '@mntm/precoil';
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
} from '@vkontakte/icons';
import { send } from '@vkontakte/vk-bridge';
import {
  Avatar,
  Gradient,
  Group,
  NavIdProps,
  Panel,
  PanelHeader,
  SimpleCell,
  Text,
  Title,
  ViewWidth,
  useAdaptivity
} from '@vkontakte/vkui';
import { classNamesString } from '@vkontakte/vkui/dist/lib/classNames';

import { ErrorSnackbar, SuccessSnackbar, setSnackbar } from '@/components';

import { userAtom } from './store';

import styles from './home.module.css';

export const Home: FC<NavIdProps> = ({ nav }) => {
  const { viewWidth } = useAdaptivity();

  const desktop: boolean = viewWidth >= ViewWidth.SMALL_TABLET;

  const { setActionRefHandler } = useActionRef(() =>
    push('/?popout=test-action-sheet')
  );

  const [user, setUser] = useAtomState(userAtom);
  useEffect(() => {
    send('VKWebAppGetUserInfo').then((value) => setUser(value));
  }, []);

  const openScreenSpinner = async (): Promise<void> => {
    replace('/?popout=screen-spinner');

    const unblock = block(() => void 0);

    // Загрузка данных
    setTimeout(() => {
      // Разблокировка
      unblock();
      replace('/');
    }, 2000);
  };

  return (
    <Panel nav={nav}>
      <PanelHeader>Главная</PanelHeader>

      <Group>
        <Gradient
          className={classNamesString(
            styles.gradient,
            desktop && styles.gradientDesktop
          )}
        >
          <Avatar src={user?.photo_100} size={96} />
          <Title className={styles.gradientTitle} level="2" weight="2">
            {!user && 'Загрузка...'}
            {user?.first_name} {user?.last_name}
          </Title>
          <Text weight="regular" className={styles.gradientSecondary}>
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
  );
};
