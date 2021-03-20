import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IndustryTable from "./pages/IndustryTable";
import * as ROUTES from "./routes/routes";
const Homepage = lazy(() => import("./pages/Homepage"));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path={ROUTES.HOMEPAGE} component={Homepage} />
          <Route path={ROUTES.INDUSTRY_TABLE} component={IndustryTable} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
