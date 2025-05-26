import { PageNotFound } from "components/commons";
import Product from "components/Product";
import { Route, Switch, NavLink, Redirect } from "react-router-dom";

import ProductList from "./components/ProductList";

const App = () => (
  <>
    <div className="flex space-x-2">
      <NavLink exact activeClassName="underline font-bold" to="/">
        Home
      </NavLink>
      <NavLink exact activeClassName="underline font-bold" to="/product">
        Product
      </NavLink>
    </div>
    <Switch>
      <Route exact component={ProductList} path="/products" />
      <Route exact component={Product} path="/products/:slug" />
      <Redirect exact from="/" to="/products" />
      <Route component={PageNotFound} path="*" />
    </Switch>
  </>
);

export default App;
