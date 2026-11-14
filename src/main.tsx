import { createRoot } from 'react-dom/client';
import '@fontsource/anton';
import '@fontsource-variable/plus-jakarta-sans';
import '@fontsource-variable/plus-jakarta-sans/wght-italic.css';
import '@fontsource-variable/space-grotesk';
import '@fontsource-variable/fraunces';
import '@fontsource/permanent-marker';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(<App />);
