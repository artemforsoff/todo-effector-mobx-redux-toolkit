import { Routes, Route, Link } from "react-router-dom";
import { Effector, Mobx, ReduxToolkit } from "pages";

export const App = () => {
  return (
    <div className="App">
      <nav style={{ display: "flex", gap: 20, marginBlockEnd: 20 }}>
        <Link to="/effector">effector</Link>
        <Link to="/mobx">mobx</Link>
        <Link to="/redux-toolkit">redux-toolkit</Link>
      </nav>

      <Routes>
        <Route path="effector" element={<Effector />} />
        <Route path="mobx" element={<Mobx />} />
        <Route path="redux-toolkit" element={<ReduxToolkit />} />
      </Routes>
    </div>
  );
};
