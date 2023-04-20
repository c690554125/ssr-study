import { hydrateRoot } from 'react-dom/client';
import Home from './home.jsx';

const root = document.getElementById('root');
hydrateRoot(root, <Home />);
