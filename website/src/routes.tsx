import { Index } from "./pages/Index";
import { Intro } from "./pages/Intro";
import { Cheatsheet } from "./pages/Cheatsheet";
import { PATHS } from "./paths";
import * as Begin from "./pages/begin";
import * as Intermediate from "./pages/intermediate";
import * as JQuery from "./pages/jquery";

export const routes = [
  {
    path: PATHS.home,
    element: <Index />,
  },
  {
    path: PATHS.intro,
    element: <Intro />,
  },
  {
    path: PATHS.cheatsheet,
    element: <Cheatsheet />,
  },
  {
    path: PATHS.begin.variables,
    element: <Begin.Variables />,
  },
  {
    path: PATHS.begin.types,
    element: <Begin.Types />,
  },
  {
    path: PATHS.begin.functions,
    element: <Begin.Functions />,
  },
  {
    path: PATHS.begin.objects,
    element: <Begin.Objects />,
  },
  {
    path: PATHS.begin.arrays,
    element: <Begin.Arrays />,
  },
  {
    path: PATHS.begin.events,
    element: <Begin.Events />,
  },
  {
    path: PATHS.begin.tips,
    element: <Begin.Tips />,
  },
  {
    path: PATHS.begin.exercises,
    element: <Begin.Exercises />,
  },
  {
    path: PATHS.begin.examples,
    element: <Begin.Examples />,
  },
  {
    path: PATHS.intermediate.conditions,
    element: <Intermediate.Conditions />,
  },
  {
    path: PATHS.intermediate.loops,
    element: <Intermediate.Loops />,
  },
  {
    path: PATHS.intermediate.arrayFunctions,
    element: <Intermediate.ArrayFunctions />,
  },
  {
    path: PATHS.intermediate.storages,
    element: <Intermediate.Storages />,
  },
  {
    path: PATHS.intermediate.tips,
    element: <Intermediate.Tips />,
  },
  {
    path: PATHS.jquery.intro,
    element: <JQuery.Intro />,
  },
  {
    path: PATHS.jquery.howto,
    element: <JQuery.Install />,
  },
  {
    path: PATHS.jquery.usage,
    element: <JQuery.Usage />,
  },
  {
    path: PATHS.jquery.exercises,
    element: <JQuery.Exercises />,
  },
  {
    path: "*",
    element: <Index />,
  },
];
