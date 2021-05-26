// NPM packages
import React, { Fragment } from "react";

//Route Packages
import { Switch, Route } from "react-router-dom";

//local main files
import FetchPostDeatils from "../components/fetchPostDetails";

export default function FetchPostDeatilsRoute() {
  return (
    <div>
      <Fragment>
        {/* fetch post Details */}
        <Switch>
          <Route exact path="/" component={FetchPostDeatils} />
        </Switch>

      </Fragment>
    </div>
  );
}
