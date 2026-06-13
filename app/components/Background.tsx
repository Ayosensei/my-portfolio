export default function Background() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            {/* Abstract Blob 1: Purple */}
            <div
                className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/30 rounded-full blur-[100px]"
            />

            {/* Abstract Blob 2: Blue/Cyan */}
            <div
                className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-cyan-900/20 rounded-full blur-[120px]"
            />
        </div>
    );
}