import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import EmailAuth132188Navigator from '../features/EmailAuth132188/navigator';
import Camera132187Navigator from '../features/Camera132187/navigator';
import CalendarView132186Navigator from '../features/CalendarView132186/navigator';
import Maps132185Navigator from '../features/Maps132185/navigator';
import Tutorial132184Navigator from '../features/Tutorial132184/navigator';
import Messaging132183Navigator from '../features/Messaging132183/navigator';
import BlankScreen132181Navigator from '../features/BlankScreen132181/navigator';
import BlankScreen132180Navigator from '../features/BlankScreen132180/navigator';
import BlankScreen132179Navigator from '../features/BlankScreen132179/navigator';
import BlankScreen132178Navigator from '../features/BlankScreen132178/navigator';
import Contacts132175Navigator from '../features/Contacts132175/navigator';
import EmailAuth132161Navigator from '../features/EmailAuth132161/navigator';
import Maps132141Navigator from '../features/Maps132141/navigator';
import Messaging132137Navigator from '../features/Messaging132137/navigator';
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
EmailAuth132188: { screen: EmailAuth132188Navigator },
Camera132187: { screen: Camera132187Navigator },
CalendarView132186: { screen: CalendarView132186Navigator },
Maps132185: { screen: Maps132185Navigator },
Tutorial132184: { screen: Tutorial132184Navigator },
Messaging132183: { screen: Messaging132183Navigator },
BlankScreen132181: { screen: BlankScreen132181Navigator },
BlankScreen132180: { screen: BlankScreen132180Navigator },
BlankScreen132179: { screen: BlankScreen132179Navigator },
BlankScreen132178: { screen: BlankScreen132178Navigator },
Contacts132175: { screen: Contacts132175Navigator },
EmailAuth132161: { screen: EmailAuth132161Navigator },
Maps132141: { screen: Maps132141Navigator },
Messaging132137: { screen: Messaging132137Navigator },
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
