import React, { useEffect, useState, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const mainCursor = useRef(null);
    const secondaryCursor = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    const positionRef = useRef({
        mouseX: 0,
        mouseY: 0,
        destinationX: 0,
        destinationY: 0,
        distanceX: 0,
        distanceY: 0,
        key: -1,
    });

    useEffect(() => {
        const onMouseMove = (event) => {
            const { clientX, clientY } = event;
            positionRef.current.mouseX = clientX;
            positionRef.current.mouseY = clientY;
        };

        const onMouseEnter = () => setIsHidden(false);
        const onMouseLeave = () => setIsHidden(true);
        const onMouseDown = () => setIsClicking(true);
        const onMouseUp = () => setIsClicking(false);

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseenter', onMouseEnter);
        document.addEventListener('mouseleave', onMouseLeave);
        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mouseup', onMouseUp);

        // Hover effect for interactive elements
        const handleHover = () => {
            const interactiveElements = document.querySelectorAll(
                'a, button, .project-overview-card, .skill-node, .nav-link, .btn-premium'
            );

            interactiveElements.forEach((el) => {
                el.addEventListener('mouseenter', () => setIsHovering(true));
                el.addEventListener('mouseleave', () => setIsHovering(false));
            });
        };

        handleHover();
        // Set up mutation observer to catch dynamically added elements if any
        const observer = new MutationObserver(handleHover);
        observer.observe(document.body, { childList: true, subtree: true });

        const followMouse = () => {
            positionRef.current.key = requestAnimationFrame(followMouse);
            const {
                mouseX,
                mouseY,
                destinationX,
                destinationY,
                distanceX,
                distanceY,
            } = positionRef.current;

            if (!destinationX || !destinationY) {
                positionRef.current.destinationX = mouseX;
                positionRef.current.destinationY = mouseY;
            } else {
                positionRef.current.distanceX = (mouseX - destinationX) * 0.15;
                positionRef.current.distanceY = (mouseY - destinationY) * 0.15;

                if (
                    Math.abs(positionRef.current.distanceX) +
                    Math.abs(positionRef.current.distanceY) <
                    0.1
                ) {
                    positionRef.current.destinationX = mouseX;
                    positionRef.current.destinationY = mouseY;
                } else {
                    positionRef.current.destinationX += distanceX;
                    positionRef.current.destinationY += distanceY;
                }
            }

            if (mainCursor.current && secondaryCursor.current) {
                mainCursor.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
                secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
            }
        };

        followMouse();

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseenter', onMouseEnter);
            document.removeEventListener('mouseleave', onMouseLeave);
            document.removeEventListener('mousedown', onMouseDown);
            document.removeEventListener('mouseup', onMouseUp);
            cancelAnimationFrame(positionRef.current.key);
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <div
                ref={mainCursor}
                className={`main-cursor ${isHidden ? 'hidden' : ''} ${isHovering ? 'hover' : ''} ${isClicking ? 'click' : ''}`}
            ></div>
            <div
                ref={secondaryCursor}
                className={`secondary-cursor ${isHidden ? 'hidden' : ''} ${isHovering ? 'hover' : ''} ${isClicking ? 'click' : ''}`}
            >
                <div className="cursor-dot"></div>
            </div>
        </>
    );
};

export default CustomCursor;
