import { render } from 'react-dom';

import { App } from '@/app';
import { initVKBridge } from '@/bridge';

initVKBridge();

render(<App />, document.getElementById('root'));

// Динамический импорт, чтобы сборщик мог исключить Eruda в продакшн билде
if (import.meta.env.VITE_ENABLE_ERUDA === 'true') import('./eruda');
