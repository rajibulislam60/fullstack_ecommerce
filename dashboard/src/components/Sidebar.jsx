import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { TbCategoryPlus, TbCategoryFilled } from "react-icons/tb";
import { MdAddShoppingCart, MdStoreMallDirectory } from "react-icons/md";
import { Link } from "react-router";

export function Sidebar() {
  return (
    <Card className="h-[calc(100vh-0rem)] max-w-[20rem] rounded-none p-4 shadow-2xl shadow-gray-500">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          E-Commarce Dashboard
        </Typography>
      </div>
      <List>
        <Link to="/">
          <ListItem>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
        </Link>
        <ListItem>
          <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5" />
          </ListItemPrefix>
          E-Commerce
        </ListItem>
        <Link to="/addCategory">
          <ListItem>
            <ListItemPrefix>
              <TbCategoryPlus className="h-5 w-5" />
            </ListItemPrefix>
            Add Category
          </ListItem>
        </Link>
        <Link to="/allCategory">
          <ListItem>
            <ListItemPrefix>
              <TbCategoryFilled className="h-5 w-5" />
            </ListItemPrefix>
            All Category
          </ListItem>
        </Link>
        <Link to="/addProduct">
          <ListItem>
            <ListItemPrefix>
              <MdAddShoppingCart className="h-5 w-5" />
            </ListItemPrefix>
            Add Product
          </ListItem>
        </Link>
        <Link to="allProduct">
          <ListItem>
            <ListItemPrefix>
              <MdStoreMallDirectory className="h-5 w-5" />
            </ListItemPrefix>
            All Products
          </ListItem>
        </Link>

        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}
