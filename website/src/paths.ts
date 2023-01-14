export const PATHS = {
  home: "/",
  intro: "/introduction",
  cheatsheet: "/cheatsheet",
  begin: {
    variables: `/begin/variables`,
    types: `/begin/types`,
    functions: `/begin/functions`,
    events: `/begin/events`,
    objects: `/begin/objects`,
    arrays: `/begin/arrays`,
    tips: `/begin/tips`,
    examples: `/begin/examples`,
    exercises: `/begin/exercises`,
  },
  intermediate: {
    conditions: `/intermediate/conditions`,
    loops: "/intermediate/loops",
    arrayFunctions: "/intermediate/array-functions",
    storages: "/intermediate/storages",
    tips: "/intermediate/tips",
  },
  jquery: {
    intro: "/jquery/intro",
    howto: "/jquery/install",
    usage: "/jquery/usage",
    exercises: "/jquery/exercises",
  },
} as const;
