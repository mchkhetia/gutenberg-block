import { createRoot } from 'react-dom/client';
import ReactApp from "./react-stuff/ReactApp";


// Render your React component instead
const blocks = document.querySelectorAll('.wp-block-mc-react-app')

blocks.forEach(block => {
	createRoot(block).render(<ReactApp />);
})


