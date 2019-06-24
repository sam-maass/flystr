import React, { Component } from 'react';
import { api } from '../../settings';
import AdminRoutesList from './AdminRoutesList';
import AddRoutePanel from './AddRoutePanel';

class AdminRoutesPage extends Component {
  state = { loaded: false };
  componentDidMount() {
    this.fetchRoutes();
  }

  fetchRoutes = async () => {
    this.setState({ loaded: false });
    const { data: routes } = await api().get('/routes');
    this.setState({ loaded: true, routes });
  };

  addRoutes = async routes => {
    await api().post('/routes', { routes });
    this.fetchRoutes();
  };

  deleteRoute = async routeId => {
    await api().delete('/route', { params: { routeId } });
    this.fetchRoutes();
  };

  setPublished = async ({ routeId, isPublishedAsDeal }) => {
    await api().put('/route', { routeId, isPublishedAsDeal });
    this.fetchRoutes();
  };

  render() {
    return (
      <div>
        <AddRoutePanel addRoutes={this.addRoutes} />
        <AdminRoutesList
          routes={this.state.routes}
          deleteRoute={this.deleteRoute}
          setPublished={this.setPublished}
        />
      </div>
    );
  }
}

export default AdminRoutesPage;
