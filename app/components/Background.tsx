export default function Background() {
  return (
    <div
      className="fixed inset-0 z-[-1] pointer-events-none"
      style={{
        background: `
          radial-gradient(ellipse 60% 50% at 0% 0%, rgba(88, 28, 135, 0.25) 0%, transparent 70%),
          radial-gradient(ellipse 50% 40% at 100% 100%, rgba(22, 78, 99, 0.2) 0%, transparent 70%),
          rgb(10, 10, 10)
        `,
      }}
    />
  );
}