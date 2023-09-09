import { createRoot } from 'react-dom/client';
import App from './App';

const root = document.getElementById('root');
const rootele = createRoot(root);

rootele.render(<App/>);
