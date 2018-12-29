import Loadable from 'react-loadable';
import Loading from '../components/Loading';

const Landing = Loadable({
  loader: () => import('./Landing/LandingPage'),
  loading: Loading
});

const Deals = Loadable({
  loader: () => import('./Deals/DealsPage'),
  loading: Loading
});

const AdminTrips = Loadable({
  loader: () => import('./AdminTrips/AdminTripsPage'),
  loading: Loading
});

const Legal = Loadable({
  loader: () => import('./Legal/LegalPage'),
  loading: Loading
});

const Terms = Loadable({
  loader: () => import('./Terms/TermsPage'),
  loading: Loading
});

const Login = Loadable({
  loader: () => import('./Login/LoginPage'),
  loading: Loading
});

const NewDeal = Loadable({
  loader: () => import('./NewDeal/NewDealPage'),
  loading: Loading
});

const NewTrip = Loadable({
  loader: () => import('./NewTrip/NewTripPage'),
  loading: Loading
});

const NewFlight = Loadable({
  loader: () => import('./NewFlight/NewFlightPage'),
  loading: Loading
});

const Profile = Loadable({
  loader: () => import('./Profile/ProfilePage'),
  loading: Loading
});
const Trip = Loadable({
  loader: () => import('./Trip/TripPage'),
  loading: Loading
});
const Trips = Loadable({
  loader: () => import('./Trips/TripsPage'),
  loading: Loading
});
const Deal = Loadable({
  loader: () => import('./Deal/DealPage'),
  loading: Loading
});
const Product = Loadable({
  loader: () => import('./Product/ProductPage'),
  loading: Loading
});
const AdminUsers = Loadable({
  loader: () => import('./AdminUsers/AdminUsersPage'),
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
