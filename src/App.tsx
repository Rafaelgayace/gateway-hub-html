import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    // Redireciona para o index.html apenas uma vez
    window.location.replace("/index.html");
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "hsl(240 10% 4%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p style={{ color: "hsl(240 5% 65%)" }}>Redirecionando...</p>
    </div>
  );
};

export default App;
