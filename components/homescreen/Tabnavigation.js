import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import Orders from '../../screens/Orders';
import Tickets from '../../screens/Tickets';
import Notification from '../../screens/Notification';
import Settings from '../../screens/Settings';



const Tab = createBottomTabNavigator();

function Tabnavigation (){
    return(
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === "Home") {
                  iconName = focused ? "home" : "home-outline";
                } else if (route.name === "Orders") {
                  iconName = focused ? "cube" : "cube-outline";
                } else if (route.name === "Tickets") {
                  iconName = focused ? "options" : "options-outline";
                } else if (route.name === "Notification") {
                  iconName = focused ? "notifications" : "notifications-outline";
                } else if (route.name === "Settings") {
                  iconName = focused ? "settings" : "settings-outline";
                }
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: "#007AFF",
              inactiveTintColor: "#bfbfbf",
            }}
          >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Orders" component={Orders} />
            <Tab.Screen name="Tickets" component={Tickets} />
            <Tab.Screen name="Notification" component={Notification} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
    )
}
export default Tabnavigation