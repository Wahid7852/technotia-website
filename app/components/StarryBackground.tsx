export default function StarryBackground() {
  const colors = ['#FF69B4', '#00FFFF', '#FF6347', '#7FFF00', '#FFD700'];

  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-black">
        {[...Array(200)].map((_, i) => {
          const size = Math.random() * 3 + 1;
          const color = colors[Math.floor(Math.random() * colors.length)];
          return (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                backgroundColor: color,
                boxShadow: `0 0 ${size * 2}px ${color}`,
                animation: `twinkle ${Math.random() * 3 + 2}s linear infinite`,
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

