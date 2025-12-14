// Helper component to show which images are needed
// Remove this file in production or when all images are added

export default function ImageGuideOverlay() {
    const isDev = process.env.NODE_ENV === 'development';

    if (!isDev) return null;

    return (
        <div className="fixed bottom-4 right-4 z-50 bg-charcoal text-white p-4 rounded-lg shadow-xl max-w-sm">
            <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-sm">📸 Image Setup Guide</h3>
                <button
                    onClick={(e) => (e.target as HTMLElement).closest('div')?.remove()}
                    className="text-white hover:text-gray-300 ml-2"
                >
                    ✕
                </button>
            </div>
            <div className="text-xs space-y-2">
                <p>Look for 📸 placeholders throughout the site</p>
                <p className="text-light-navy">✓ Folder structure created</p>
                <p className="text-light-navy">✓ Code ready for images</p>
                <p className="text-sand">⏳ Add images to /public/images/</p>
                <div className="mt-3 pt-3 border-t border-gray-600">
                    <a
                        href="/IMAGE-GUIDE.md"
                        target="_blank"
                        className="text-sky-blue hover:underline text-xs"
                    >
                        View Full Image Guide →
                    </a>
                </div>
            </div>
        </div>
    );
}
