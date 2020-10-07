import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList132130Navigator from '../features/NotificationList132130/navigator';
import Settings132118Navigator from '../features/Settings132118/navigator';
import SignIn1132115Navigator from '../features/SignIn1132115/navigator';
import UserProfile132106Navigator from '../features/UserProfile132106/navigator';
import ArticleList132059Navigator from '../features/ArticleList132059/navigator';
import ArticleList132058Navigator from '../features/ArticleList132058/navigator';
import ArticleList132057Navigator from '../features/ArticleList132057/navigator';
import Settings132042Navigator from '../features/Settings132042/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList132130: { screen: NotificationList132130Navigator },
Settings132118: { screen: Settings132118Navigator },
SignIn1132115: { screen: SignIn1132115Navigator },
UserProfile132106: { screen: UserProfile132106Navigator },
ArticleList132059: { screen: ArticleList132059Navigator },
ArticleList132058: { screen: ArticleList132058Navigator },
ArticleList132057: { screen: ArticleList132057Navigator },
Settings132042: { screen: Settings132042Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
