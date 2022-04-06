import { Root, createRoot } from 'react-dom/client';

import { App } from '@/app';

const root: Root = createRoot(document.getElementById('root')!);
root.render(<App />);
