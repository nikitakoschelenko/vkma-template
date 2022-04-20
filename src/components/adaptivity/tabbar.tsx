import { FC } from 'react';
import { push, useDeserialized } from '@itznevikat/router';
import { Tabbar, TabbarItem } from '@vkontakte/vkui';

import { AdaptivityButton } from './layout';

type AdaptivityTabbarProps = {
  buttons: AdaptivityButton[];
};

export const AdaptivityTabbar: FC<AdaptivityTabbarProps> = ({ buttons }) => {
  const { view } = useDeserialized();

  return (
    <Tabbar>
      {buttons.map(({ story, icon, text }: AdaptivityButton) => (
        <TabbarItem
          key={story}
          selected={story === view}
          text={text}
          onClick={() => view !== story && push(story)}
        >
          {icon}
        </TabbarItem>
      ))}
    </Tabbar>
  );
};
