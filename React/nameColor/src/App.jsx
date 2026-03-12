import { useEffect, useMemo, useState } from "react";

export default function App() {
  return <NameChaos />;
}

function NameChaos() {
  const name = "VY mập đjt";
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setPulse((prev) => !prev);
    }, 1800);

    return () => clearInterval(id);
  }, []);

  const items = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      top: `${8 + Math.random() * 78}%`,
      left: `${6 + Math.random() * 84}%`,
      size: 16 + Math.random() * 28,
      duration: 5 + Math.random() * 8,
      delay: -Math.random() * 12,
      hue: Math.floor(Math.random() * 360),
      sway: 20 + Math.random() * 80,
    }));
  }, []);

  return (
    <div style={styles.screen}>
      <div style={styles.bg} />
      <div style={styles.grid} />
      <div style={styles.flashOrb} className={pulse ? "pulse-on" : "pulse-off"} />

      <div style={styles.centerWrap}>
        <div style={styles.ring1} />
        <div style={styles.ring2} />
        <div style={styles.centerGlow} />
        <h1 style={styles.centerText} className="flashy-name">
          {name}
        </h1>
        <p style={styles.subText}>electric pop mode</p>
      </div>

      {items.map((item) => (
        <div
          key={item.id}
          className="orbit-name"
          style={{
            ...styles.floating,
            top: item.top,
            left: item.left,
            fontSize: `${item.size}px`,
            animationDuration: `${item.duration}s`,
            animationDelay: `${item.delay}s`,
            ["--hue"]: item.hue,
            ["--sway"]: `${item.sway}px`,
          }}
        >
          {name}
        </div>
      ))}

      <style>{`
        * { box-sizing: border-box; }

        html, body, #root {
          margin: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        body {
          font-family: "Poppins", "Segoe UI", sans-serif;
          background: #08010f;
        }

        @keyframes hueFlash {
          0% { filter: hue-rotate(0deg) brightness(1); }
          25% { filter: hue-rotate(60deg) brightness(1.08); }
          50% { filter: hue-rotate(140deg) brightness(1.2); }
          75% { filter: hue-rotate(220deg) brightness(1.08); }
          100% { filter: hue-rotate(360deg) brightness(1); }
        }

        @keyframes centerBeat {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            letter-spacing: 0.08em;
          }
          20% {
            transform: scale(1.04) rotate(-1deg);
            letter-spacing: 0.12em;
          }
          45% {
            transform: scale(0.98) rotate(1deg);
            letter-spacing: 0.06em;
          }
          70% {
            transform: scale(1.08) rotate(-1deg);
            letter-spacing: 0.1em;
          }
        }

        @keyframes orbitFloat {
          0% {
            transform: translate3d(0, 0, 0) scale(0.9) rotate(-2deg);
            opacity: 0.35;
          }
          25% {
            transform: translate3d(var(--sway), calc(var(--sway) * -0.8), 0) scale(1.12) rotate(5deg);
            opacity: 0.9;
          }
          50% {
            transform: translate3d(calc(var(--sway) * -0.8), calc(var(--sway) * 0.6), 0) scale(0.96) rotate(-6deg);
            opacity: 0.55;
          }
          75% {
            transform: translate3d(calc(var(--sway) * 0.5), var(--sway), 0) scale(1.08) rotate(3deg);
            opacity: 0.95;
          }
          100% {
            transform: translate3d(0, 0, 0) scale(0.9) rotate(-2deg);
            opacity: 0.35;
          }
        }

        @keyframes ringSpinA {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes ringSpinB {
          from { transform: translate(-50%, -50%) rotate(360deg); }
          to { transform: translate(-50%, -50%) rotate(0deg); }
        }

        @keyframes orbPulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.85; transform: scale(1.2); }
        }

        .flashy-name {
          animation: hueFlash 6s linear infinite, centerBeat 4.2s ease-in-out infinite;
        }

        .orbit-name {
          animation: orbitFloat linear infinite, hueFlash 7s linear infinite;
          color: hsl(var(--hue), 88%, 72%);
        }

        .pulse-on {
          animation: orbPulse 1.8s ease-in-out infinite;
        }

        .pulse-off {
          animation: orbPulse 2.6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

const styles = {
  screen: {
    position: "relative",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    background: "radial-gradient(circle at center, #1b0630 0%, #0d0217 45%, #050109 100%)",
  },
  bg: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at 18% 22%, rgba(255, 0, 153, 0.22), transparent 24%), radial-gradient(circle at 82% 28%, rgba(0, 238, 255, 0.18), transparent 22%), radial-gradient(circle at 50% 75%, rgba(255, 208, 0, 0.14), transparent 26%), radial-gradient(circle at 30% 80%, rgba(179, 0, 255, 0.18), transparent 24%)",
    filter: "blur(40px)",
  },
  grid: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
    backgroundSize: "48px 48px",
    opacity: 0.24,
    transform: "perspective(900px) rotateX(70deg) scale(1.4)",
    transformOrigin: "center bottom",
  },
  flashOrb: {
    position: "absolute",
    left: "50%",
    top: "50%",
    width: "560px",
    height: "560px",
    borderRadius: "50%",
    transform: "translate(-50%, -50%)",
    background:
      "radial-gradient(circle, rgba(255,255,255,0.16) 0%, rgba(255,0,153,0.18) 25%, rgba(0,238,255,0.12) 45%, transparent 72%)",
    filter: "blur(18px)",
    pointerEvents: "none",
  },
  centerWrap: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: "min(80vw, 760px)",
    height: "min(80vw, 760px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  ring1: {
    position: "absolute",
    left: "50%",
    top: "50%",
    width: "78%",
    height: "78%",
    transform: "translate(-50%, -50%)",
    borderRadius: "50%",
    border: "2px solid rgba(255,255,255,0.18)",
    boxShadow: "0 0 30px rgba(255,0,153,0.18), inset 0 0 20px rgba(0,238,255,0.12)",
    animation: "ringSpinA 18s linear infinite",
  },
  ring2: {
    position: "absolute",
    left: "50%",
    top: "50%",
    width: "58%",
    height: "58%",
    transform: "translate(-50%, -50%)",
    borderRadius: "50%",
    border: "1px dashed rgba(255,255,255,0.24)",
    boxShadow: "0 0 25px rgba(255,208,0,0.15)",
    animation: "ringSpinB 10s linear infinite",
  },
  centerGlow: {
    position: "absolute",
    left: "50%",
    top: "50%",
    width: "40%",
    height: "40%",
    transform: "translate(-50%, -50%)",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(255,255,255,0.34) 0%, rgba(255,0,153,0.22) 30%, rgba(0,238,255,0.16) 58%, transparent 72%)",
    filter: "blur(16px)",
  },
  centerText: {
    position: "relative",
    margin: 0,
    padding: "0 24px",
    fontSize: "clamp(40px, 8vw, 96px)",
    fontWeight: 900,
    whiteSpace: "nowrap",
    textAlign: "center",
    color: "#fff",
    textShadow:
      "0 0 12px rgba(255,255,255,0.7), 0 0 28px rgba(255,0,153,0.6), 0 0 42px rgba(0,238,255,0.42)",
    userSelect: "none",
    zIndex: 2,
  },
  subText: {
    marginTop: 12,
    fontSize: 13,
    letterSpacing: "0.36em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.6)",
    userSelect: "none",
    zIndex: 2,
  },
  floating: {
    position: "absolute",
    fontWeight: 700,
    whiteSpace: "nowrap",
    textShadow:
      "0 0 8px rgba(255,255,255,0.35), 0 0 18px currentColor",
    pointerEvents: "none",
    userSelect: "none",
    mixBlendMode: "screen",
  },
};