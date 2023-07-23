import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../../screens/Home';
import Services from '../../screens/Services';
import About from '../../screens/About';
import Contact from '../../screens/Contact';
import CustomDrawer from '../../screens/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';



 function Afterlogin() {
  const Drawer = createDrawerNavigator();
  return (
    
    <NavigationContainer>
          <Drawer.Navigator drawerContent={props=> <CustomDrawer {...props}/> }
          screenOptions={{
            headerShown:true,
            drawerActiveBackgroundColor:'#cccccc',
            drawerActiveTintColor:'#000',
            drawerLabelStyle:{
              marginLeft:-25,
              fontSize:15
            }
          }}
          >
            
      <Drawer.Screen name="Home" component={Home} options={{
        drawerIcon:()=>(
          <Ionicons name='home-outline' size={22}  />
        )
      }} />
      <Drawer.Screen name="Services" component={Services} options={{
        drawerIcon:()=>(
          <Ionicons name='build-outline' size={22}  />
        )
      }} />
      <Drawer.Screen name="About" component={About}
      options={{
        drawerIcon:()=>(
          <Ionicons name='people-circle-outline' size={22} />
        )
      }} />
      <Drawer.Screen name="Contact" component={Contact} options={{
        drawerIcon:()=>(
          <Ionicons name='call-outline' size={22} />
        )
      }}/>
      
      
    </Drawer.Navigator>
    </NavigationContainer>
    
  );
}

export default Afterlogin;

