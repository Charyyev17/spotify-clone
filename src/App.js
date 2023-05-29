import { useRoutes } from "react-router-dom";
import routes from "./routes"

function App() {

  const showRoutes = useRoutes(routes)

  return (
    <>
      { showRoutes }
    </>
  );
}

export default App;
