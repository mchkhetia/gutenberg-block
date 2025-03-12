import { createRoot } from 'react-dom/client';


// Render your React component instead
const blocks = document.querySelectorAll('.wp-block-mc-react-app')

blocks.forEach(block => {
	createRoot(block).render(<h1>Hello, world</h1>)
})


