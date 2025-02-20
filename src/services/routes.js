import {
  HOME,
  CREATE,
  DELETE,
  READ,
  UPDATE
} from "./consts";

import home from "../pages/home";
import Create from "../pages/Create";
import Delete from "../pages/Delete";
import Read from "../pages/Read";
import Update from "../pages/Update";

export const routes = [
    {
      path: HOME,
      element: home,
    },
    {
      path: READ,
      element: Read,
    },
    {
      path: DELETE,
      element: Delete,
    },
    {
      path: UPDATE,
      element: Update,
    },
    {
      path: CREATE,
      element: Create,
    },
];