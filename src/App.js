import React, {useState} from "react"
import { Box, Button, Collapsible, Heading, Grommet, Layer, ResponsiveContext } from 'grommet';
import { FormClose, Notification } from 'grommet-icons';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'


const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    }
  }
}

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);
  
const App = () => { 
  const [showSidebar, setShowSidebar] = useState(false)
  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {size => (
      <Box fill>
        <AppBar>
          <Heading level='3' margin='none'>My App</Heading>
          <Button icon={<Notification />} onClick={() => setShowSidebar(!showSidebar)} />
        </AppBar>
        <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
          <Box flex align='center' justify='center'>
            app body
          </Box>
            {size !=='small' &&(
            <Collapsible direction="horizontal" open={showSidebar}>
              <Box
                flex
                width='medium'
                background='light-2'
                elevation='small'
                align='center'
                justify='center'
              >
                sidebar here
              </Box>
            </Collapsible>
            )}
        </Box>
      </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default  withAuthenticator(App);

