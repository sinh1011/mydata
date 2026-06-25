import { useEffect, useMemo, useState } from "react";
import "./App.css";

const roadmap = [
  {
    day: "01",
    title: "Core Todo",
    tasks: ["Input + Add", "Render list", "Delete", "Reset", "Empty state"],
  },
  {
    day: "02",
    title: "Toggle + Filter",
    tasks: ["Add done", "Toggle", "UI strike", "Filter"],
  },
  {
    day: "03",
    title: "Search + LocalStorage",
    tasks: ["Search", "LocalStorage"],
  },
  {
    day: "04",
    title: "Refactor",
    tasks: ["Split components", "Folder structure"],
  },
  {
    day: "05",
    title: "Fetch API",
    tasks: ["Fetch", "Loading", "Error", "Render"],
  },
  { day: "06", title: "Advanced API", tasks: ["Search", "Reload"] },
  { day: "07", title: "Router", tasks: ["/users", "/users/:id"] },
];

export default function App() {
  const [checked, setChecked] = useState(() => {
    const data = localStorage.getItem("progress");
    return data ? JSON.parse(data) : {};
  });

  const [dark, setDark] = useState(
    () => localStorage.getItem("dark") === "true",
  );

  useEffect(() => {
    localStorage.setItem("progress", JSON.stringify(checked));
  }, [checked]);

  useEffect(() => {
    localStorage.setItem("dark", dark);
    document.body.classList.toggle("dark", dark);
  }, [dark]);

  const toggle = (key) => {
    setChecked((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const stats = useMemo(() => {
    let total = 0;
    let done = 0;

    roadmap.forEach((d, di) => {
      d.tasks.forEach((_, ti) => {
        total++;
        if (checked[`${di}-${ti}`]) done++;
      });
    });

    return {
      total,
      done,
      percent: total ? Math.round((done / total) * 100) : 0,
    };
  }, [checked]);

  return (
    <div className="layout">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <h2>React</h2>
        <p className="muted">Roadmap</p>

        <div className="menu">
          {roadmap.map((d) => (
            <div key={d.day} className="menu-item">
              Day {d.day}
            </div>
          ))}
        </div>

        <button className="toggle-btn" onClick={() => setDark((p) => !p)}>
          {dark ? "Light" : "Dark"}
        </button>
      </aside>

      {/* MAIN */}
      <main className="main">
        <header className="header">
          <h1>Learning Dashboard</h1>
          <button onClick={() => setChecked({})}>Reset</button>
        </header>

        {/* STATS */}
        <div className="stats">
          <div className="card">
            <h3>{stats.done}</h3>
            <p>Done</p>
          </div>
          <div className="card">
            <h3>{stats.total}</h3>
            <p>Total</p>
          </div>
          <div className="card">
            <h3>{stats.percent}%</h3>
            <p>Progress</p>
          </div>
        </div>

        {/* DAYS */}
        {roadmap.map((day, dIndex) => {
          const total = day.tasks.length;
          const done = day.tasks.filter(
            (_, i) => checked[`${dIndex}-${i}`],
          ).length;

          return (
            <div className="day-card" key={day.day}>
              <div className="day-header">
                <h2>
                  Day {day.day} — {day.title}
                </h2>
                <span>
                  {done}/{total}
                </span>
              </div>

              <div className="task-list">
                {day.tasks.map((task, tIndex) => {
                  const key = `${dIndex}-${tIndex}`;
                  return (
                    <label
                      key={key}
                      className={`task ${checked[key] ? "done" : ""}`}
                    >
                      <input
                        type="checkbox"
                        checked={checked[key] || false}
                        onChange={() => toggle(key)}
                      />
                      <span>{task}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
}
