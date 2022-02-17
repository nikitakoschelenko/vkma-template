import { useEffect, useState, type FC } from 'react';
import { block, push, replace, useActionRef } from '@itznevikat/router';
import {
  Avatar,
  Gradient,
  Group,
  NavIdProps,
  Panel,
  PanelHeader,
  SimpleCell,
  Text,
  Title
} from '@vkontakte/vkui';
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

import styles from './home.module.css';

import { ErrorSnackbar, SuccessSnackbar, useSnackbar } from '@/snackbar';
import { send, UserInfo } from '@vkontakte/vk-bridge';

export const Home: FC<NavIdProps> = ({ nav }) => {
  const { openSnackbar } = useSnackbar();
  const { setActionRefHandler } = useActionRef(() =>
    push('/?popout=test-action-sheet')
  );

  const [userInfo, setUserInfo] = useState<UserInfo>();
  useEffect(() => {
    send('VKWebAppGetUserInfo').then((value) => setUserInfo(value));
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
        <Gradient className={styles.gradient}>
          <Avatar src={userInfo?.photo_100} size={96} />
          <Title className={styles.gradientTitle} level="2" weight="semibold">
            {!userInfo && 'Загрузка...'}
            {userInfo?.first_name} {userInfo?.last_name}
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
            openSnackbar(<SuccessSnackbar>Произошёл успех</SuccessSnackbar>)
          }
        >
          Показать добрый снекбар
        </SimpleCell>

        <SimpleCell
          before={<Icon28CancelCircleOutline />}
          onClick={() =>
            openSnackbar(<ErrorSnackbar>Произошла ошибка</ErrorSnackbar>)
          }
        >
          Показать злой снекбар
        </SimpleCell>
      </Group>
    </Panel>
  );
};
