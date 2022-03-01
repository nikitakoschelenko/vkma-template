import { type FC } from 'preact/compat';
import { Placeholder } from '@vkontakte/vkui';

export const VoidPlaceholder: FC = () => (
  <Placeholder
    icon={
      <img
        src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/ghost_1f47b.png"
        width="56"
      />
    }
    header="Пустота"
  >
    Здесь ничего нет
  </Placeholder>
);

export const ErrorPlaceholder: FC = () => (
  <Placeholder
    icon={
      <img
        src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/anxious-face-with-sweat_1f630.png"
        width="56"
      />
    }
    header="Произошла ошибка"
  >
    Пожалуйста, попробуйте ещё раз позже
  </Placeholder>
);
