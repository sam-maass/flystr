import * as emotion from 'emotion'
import { createSerializer } from 'jest-emotion'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

expect.addSnapshotSerializer(createSerializer(emotion))
configure({ adapter: new Adapter() });