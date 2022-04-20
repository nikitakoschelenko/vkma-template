import { FC } from 'react';
import { push, useDeserialized } from '@itznevikat/router';
import { Cell, Group, List, SplitCol } from '@vkontakte/vkui';

import { AdaptivityButton } from './layout';

type AdaptivitySidebarProps = {
  buttons: AdaptivityButton[];
};

export const AdaptivitySidebar: FC<AdaptivitySidebarProps> = ({ buttons }) => {
  const { view } = useDeserialized();

  return (
    <SplitCol fixed width="280px" maxWidth="280px">
      <Group>
        <List>
          {buttons.map(({ story, icon, text }: AdaptivityButton) => (
            <Cell
              key={story}
              before={icon}
              style={
                view === story
                  ? {
                      backgroundColor: 'var(--button_secondary_background)',
                      borderRadius: 8
                    }
                  : {}
              }
              onClick={() => view !== story && push(story)}
            >
              {text}
            </Cell>
          ))}
        </List>
      </Group>
    </SplitCol>
  );
};
