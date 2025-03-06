import { createRoot } from 'react-dom/client';
import BlockApp from "./react-app/BlockApp";


const blocks = document.querySelectorAll('.wp-block-mc-staff-directory')


// Render your React component instead
blocks.forEach(block => {
	createRoot(block).render(<BlockApp/>)
})

