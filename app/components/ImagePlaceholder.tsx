interface ImagePlaceholderProps {
    icon: string;
    bgColor?: string;
    text?: string;
}

export default function ImagePlaceholder({
    icon,
    bgColor = 'bg-gradient-to-br from-light-navy to-navy-blue',
    text
}: ImagePlaceholderProps) {
    return (
        <div className={`relative w-full h-full ${bgColor} flex items-center justify-center`}>
            <div className="text-white text-6xl opacity-50">{icon}</div>
            {text && (
                <div className="absolute top-2 right-2 bg-white/90 px-3 py-1 rounded-full text-xs font-semibold text-charcoal max-w-[90%] truncate">
                    {text}
                </div>
            )}
        </div>
    );
}
