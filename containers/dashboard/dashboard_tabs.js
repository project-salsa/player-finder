import React from 'react'
import { Container, Tab, Tabs, Fab, Icon } from 'native-base'

import DashboardContainer from './dashboard_container'
import GlobalStyleSheet from '../../style'
import Header from '../../components/common/header'

export default class DashboardTabs extends React.Component {
  render () {
    const { navigate } = this.props.navigation
    return (
      <Container>
        <Header title='Dashboard' navigation={this.props.navigation} style={GlobalStyleSheet.headerText}/>
        <Tabs initialPage={1}>
          <Tab heading='All'>
            <DashboardContainer navigation={this.props.navigation} />
          </Tab>
          <Tab heading='My Feed' >
            <DashboardContainer navigation={this.props.navigation} action='Feed' />
          </Tab>
          <Tab heading='Joined' >
            <DashboardContainer navigation={this.props.navigation} action='Joined' />
          </Tab>
          <Tab heading='Created' >
            <DashboardContainer navigation={this.props.navigation} action='Self' />
          </Tab>
        </Tabs>
        <Fab
          active
          containerStyle={{ }}
          style={GlobalStyleSheet.primaryColor}
          position='bottomRight'
          onPress={() => navigate('CreateRequest')}>
          <Icon name='md-create' />
        </Fab>
      </Container>
    )
  }
}
