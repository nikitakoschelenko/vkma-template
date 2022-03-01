import { render } from 'preact/compat';

import { App } from '@/app';
import { initVKBridge } from '@/bridge';

initVKBridge();

render(<App />, document.getElementById('root')!);
