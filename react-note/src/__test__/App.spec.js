import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
	it('renders without crashing', () => {
		shallow(<App />);
	});

	it('should match snapshot', () => {
		const snapshot = renderer.create(withRouter(connect(<App />))).toJSON();
		expect(snapshot).toMatchSnapshot();
	});
});
