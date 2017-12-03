import { DrawerNavigator } from 'react-navigation'
import HomeComponent from './components/home_screen'
import UserProfileContainer from './containers/user_profile/user_profile_container'
import DashboardContainer from './containers/dashboard_container'
import RequestContainer from './containers/request/request_container'
import LoginComponent from './components/login/login_component'
import UserPreferencesComponent from './components/user_preferences/user_preferences_component'
import CreateRequestContainer from './containers/create_request/create_request_container'
import RequestCard from './components/common/request_card'
import FirstTimeComponent from './components/first_time/first_time_component'
import EditUserProfileContainer from './containers/user_profile/user_profile_edit_container'
import SideBar from './components/side_bar'
import React from 'react'

const navOptions = {
  initialRouteName: 'Dashboard',
  contentComponent: props => <SideBar {...props} />
}

export default DrawerNavigator({
  Home: { screen: HomeComponent },
  UserProfile: { screen: UserProfileContainer },
  Dashboard: { screen: DashboardContainer },
  Request: { screen: RequestContainer },
  UserPreferences: { screen: UserPreferencesComponent },
  CreateRequest: { screen: CreateRequestContainer },
  FirstTime: { screen: FirstTimeComponent },
  RequestCard: { screen: RequestCard },
  EditUserProfile: {screen: EditUserProfileContainer}
}, navOptions)
