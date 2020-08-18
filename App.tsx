import React from 'react';
import { createAppContainer, NavigationContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import { BlogProvider } from './src/context/BlogContext';

const navigator = createStackNavigator(
  {
    index: IndexScreen,
  },
  {
    initialRouteName: 'index',
    defaultNavigationOptions: {
      title: 'Blogs',
    },
  }
);

const App = createAppContainer(navigator);

export default (): React.ReactElement => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
