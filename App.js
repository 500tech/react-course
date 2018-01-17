import { DrawerNavigator, StackNavigator } from 'react-navigation';

import Home from './Home';
import Book from './Book';
import SpecialOffers from './SpecialOffers';
import PassengersList from './PassengersList';

const HomeStack = StackNavigator({
  Main: { screen: Home },
  Book: { screen: Book },
  SpecialOffers: { screen: SpecialOffers }
}, {
  headerMode: 'screen'
});

const App = DrawerNavigator({
  Home: { screen: HomeStack },
  PassengersList: { screen: PassengersList }
});

export default App;