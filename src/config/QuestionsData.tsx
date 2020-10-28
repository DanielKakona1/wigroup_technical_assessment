import Colors from '../constants/Colors';
import {Routes} from '../navigation/NavigationServices';

export const questions = [
  {
    id: 1,
    title: 'Auto-Search App',
    description: 'Create a single screen app that has one text input that accepts a valid URL and then immediately loads the web-page in a webview/iframe component.',
    background: Colors.default,
    screen: Routes.AutoSearch,

  },
  {
    id:2,
    title: 'Wikipedia App',
    description: 'Create an app that accepts keywords/texts, performs a GET request on Wikipedia and displays the results in a list just below the text input. Afterwards, when a user clicks on row, he should be navigated to a detailed screen which has a navigation bar [ with its title being the Wikipedia page ] and a webview/iframe component to load that page.',
    background: Colors.lightPink,
    screen: Routes.Wikipedia,
  },
  {
    id:3,
    title: 'AsyncStorage/LocalStorage App',
    description: 'Create an app that has 3 dummy screens. On screen 1, there should be a username and password field and a save button. On saving, the app stores the credential in the AsysnStorage/LocalStorage of the phone. When you quit it and open it, it should navigate immediately to screen 2. On screen 2, place a button to navigate to screen 3. We should be able to navigate to screen 2 from screen 3.',
    background: Colors.lightBlue,
    screen: Routes.AsyncStorage,
  },

];