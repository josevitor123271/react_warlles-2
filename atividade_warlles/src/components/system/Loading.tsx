import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingProps {
    message?: string;
    fullscreen?: boolean;
    overlay?: boolean;
    className?: string;
}

const Loading: React.FC<LoadingProps> = ({
    message,
    fullscreen = false,
    overlay = false,
    className = ""
}) => {
    const baseClasses = "flex flex-col items-center justify-center transition-all duration-300";

    const containerClasses = fullscreen
        ? "fixed inset-0 z-50"
        : overlay
            ? "absolute inset-0 z-10"
            : "relative py-10"; // Fallback se não for nem overlay nem fullscreen

    // Fundo transparente com blur intenso
    const blurClasses = "backdrop-blur-md bg-background/20";

    return (
        <div className={`${baseClasses} ${containerClasses} ${blurClasses} ${className}`}>
            <Loader2 className="w-10 h-10 animate-spin text-primary" />

            {message && (
                <p className="mt-3 text-sm font-medium text-foreground/80">{message}</p>
            )}
        </div>
    );
};

export default Loading;
