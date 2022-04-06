import { atom } from '@mntm/precoil';
import { UserInfo } from '@vkontakte/vk-bridge';

export const userAtom = atom<UserInfo | null>(null);
