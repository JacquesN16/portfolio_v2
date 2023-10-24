import {useEffect, useState} from "react";
import {number} from "prop-types";

export default function BackgroundDynamic() {

    const [mousePos, setMousePos] = useState<{x: number, y:number}>({x:0, y:0});

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePos({ x: event.clientX, y: event.clientY });

        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
        };
    }, []);
    return (
        <div className='pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute' style={{background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`}}></div>
    )
}