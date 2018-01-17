import { DrawerNavigator, StackNavigator } from 'react-navigation';

import Home from './Home';

const App = DrawerNavigator({
  Home: { screen: Home }
});

export default App;