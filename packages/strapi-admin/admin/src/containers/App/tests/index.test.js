import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';

import AppLoader from 'containers/AppLoader';
import App from '../index';


describe('<App />', () => {
  it('should render the <AppLoader />', () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.find(AppLoader)).toHaveLength(1);
  });

  it('Should not render the <Switch /> if the app is loading', () => {
    const topComp = shallow(<App />);
    const insideAppLoaderNotLoading = shallow(topComp.find(AppLoader).prop('children')({ shouldLoad: false }));

    expect(insideAppLoaderNotLoading.find(Route).length).toBe(2);
  });

  it('should render the <Switch /> if the app is loading', () => {
    const topComp = shallow(<App />);

    const insideAppLoaderLoading = shallow(topComp.find(AppLoader).prop('children')({ shouldLoad: true }));
    expect(insideAppLoaderLoading.find(Route).length).toBe(0);
  });

  it('renderAdmin should return some jsx', () => {
    const renderedComponent = shallow(<App />);
    const { renderAdmin } = renderedComponent.instance();

    expect(renderAdmin({history})).not.toBeNull();
  });
});