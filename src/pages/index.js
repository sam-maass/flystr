import asyncComponent from '../asyncComponent';

const Landing = asyncComponent(() => import('./Landing'));
const AdminTrips = asyncComponent(() => import('./AdminTrips'));
const Impressum = asyncComponent(() => import('./Impressum'));
const Login = asyncComponent(() => import('./Login'));
const NewDeal = asyncComponent(() => import('./NewDeal'));
const NewTrip = asyncComponent(() => import('./NewTrip'));
const Profile = asyncComponent(() => import('./Profile'));
const Trip = asyncComponent(() => import('./Trip'));
const Trips = asyncComponent(() => import('./Trips'));
const Deals = asyncComponent(() => import('./Deals'));
const Signup = asyncComponent(() => import('./Signup'));
export {
  Deals,
  Landing,
  AdminTrips,
  Impressum,
  Login,
  Signup,
  NewTrip,
  NewDeal,
  Profile,
  Trip,
  Trips
};
