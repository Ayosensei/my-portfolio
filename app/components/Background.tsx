export default function Background() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            {/* Abstract Blob 1: Purple */}
            <div
                className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-900/30 rounded-full blur-[80px]"
            />

            {/* Abstract Blob 2: Blue/Cyan */}
            <div
                className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[80px]"
            />
        </div>
    );
}