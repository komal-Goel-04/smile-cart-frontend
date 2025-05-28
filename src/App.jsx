import { PageNotFound } from "components/commons";
import Product from "components/Product/index";
import { Route, Switch, Redirect } from "react-router-dom";

import ProductList from "./components/ProductList";
import routes from "./route";

const App = () => (
  <Switch>
    <Route exact component={ProductList} path={routes.products.index} />
    <Route exact component={Product} path={routes.products.show} />
    <Redirect exact from="/" to={routes.products.index} />
    <Route component={PageNotFound} path="*" />
  </Switch>
);

export default App;
