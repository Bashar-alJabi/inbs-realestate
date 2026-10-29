import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isClicking, setIsClicking] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.matches('a, button, input, [data-hover="true"]')) {
            setIsHovering(true);
        }
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 pointer-events-none z-50">
            {/* Main cursor */}
            <motion.div
                className={`w-6 h-6 rounded-full absolute transition-colors duration-200
                    ${isHovering ? 'bg-black dark:bg-white' : 'bg-[#125590]'}
                    ${isHovering && 'mix-blend-difference'}
                `}
                style={{
                    x: position.x - 12,
                    y: position.y - 12,
                }}
                animate={{
                    scale: isClicking ? 0.3 : isHovering ? 1 : 0.7,
                }}
                transition={{
                    type: 'spring',
                    damping: 50,
                    stiffness: 1000,
                }}
            />
            {/* Outer glow */}
            <motion.div
                className={`w-12 h-12 rounded-full border-4 absolute opacity-50 transition-colors duration-200
                    ${isHovering ? 'border-black dark:border-white' : 'border-[#125590]'}
                    ${isHovering && 'mix-blend-difference'}
                `}
                style={{
                    x: position.x - 24,
                    y: position.y - 24,
                }}
                animate={{
                    scale: isClicking ? 0.7 : isHovering ? 1.2 : 0.7,
                }}
                transition={{
                    type: 'spring',
                    damping: 50,
                    stiffness: 1000,
                }}
            />
        </div>
    );
};

export default CustomCursor;
