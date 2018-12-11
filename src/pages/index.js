import Loadable from 'react-loadable';
import Loading from '../components/Loading';

const Landing = Loadable({
  loader: () => import('./Landing/index'),
  loading: Loading
});

const Deals = Loadable({
  loader: () => import('./Deals'),
  loading: Loading
});

const AdminTrips = Loadable({
  loader: () => import('./AdminTrips'),
  loading: Loading
});

const Legal = Loadable({
  loader: () => import('./Legal'),
  loading: Loading
});

const Terms = Loadable({
  loader: () => import('./Terms'),
  loading: Loading
});

const Login = Loadable({
  loader: () => import('./Login'),
  loading: Loading
});

const NewDeal = Loadable({
  loader: () => import('./NewDeal'),
  loading: Loading
});

const NewTrip = Loadable({
  loader: () => import('./NewTrip'),
  loading: Loading
});

const NewFlight = Loadable({
  loader: () => import('./NewFlight'),
  loading: Loading
});

const Profile = Loadable({
  loader: () => import('./Profile'),
  loading: Loading
});
const Trip = Loadable({
  loader: () => import('./Trip'),
  loading: Loading
});
const Trips = Loadable({
  loader: () => import('./Trips'),
  loading: Loading
});
const Deal = Loadable({
  loader: () => import('./Deal'),
  loading: Loading
});
const Product = Loadable({
  loader: () => import('./Product'),
  loading: Loading
});
const AdminUsers = Loadable({
  loader: () => import('./AdminUsers'),
  loading: Loading
});
export {
  Terms,
  Deal,
  Deals,
  Landing,
  AdminTrips,
  Legal,
  Login,
  NewTrip,
  NewFlight,
  NewDeal,
  Profile,
  Trip,
  Trips,
  Product,
  AdminUsers
};
