import { Scissors, Feather, Layers, PenTool, Hash, Circle, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

// Maggam/Handloom related icons
const icons = [
    Scissors,
    Feather, // Represents delicate work
    Layers,  // Fabric layers
    PenTool, // Design tool / Needle vibe
    Hash,    // Weave pattern
    Circle,  // Beads/Stones
    Star,    // Sparkle/Zari work
];

export default function FloatingIcons() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Generate random positions for icons
        const newItems = Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            Icon: icons[i % icons.length],
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
            animationDuration: `${15 + Math.random() * 20}s`, // Slow float 15-35s
            animationDelay: `${Math.random() * 10}s`,
            size: 24 + Math.random() * 24, // Size 24-48px
            opacity: 0.1 + Math.random() * 0.15, // Subtle opacity
            rotation: Math.random() * 360,
        }));
        setItems(newItems);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden select-none">
            {items.map(({ id, Icon, left, top, animationDuration, animationDelay, size, opacity, rotation }) => (
                <div
                    key={id}
                    className="absolute text-pink-400"
                    style={{
                        left,
                        top,
                        fontSize: size,
                        opacity: 0.4 + Math.random() * 0.3, // Increase opacity to 0.4 - 0.7
                        transform: `rotate(${rotation}deg)`,
                        animation: `float ${animationDuration} ease-in-out infinite`,
                        animationDelay,
                    }}
                >
                    <Icon size={size} strokeWidth={2} />
                </div>
            ))}
        </div>
    );
}
