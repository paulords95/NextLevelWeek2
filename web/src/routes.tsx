import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Landing from "./pages/landing/index";
import TeacherList from "./pages/TeacherList";
import TeacherForm from "./pages/TeacherForm";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
    </BrowserRouter>
  );
};

export default Routes;
