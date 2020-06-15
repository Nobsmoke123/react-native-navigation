import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function LoginScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login Screen</Text>
      <TextInput
        style={{height: 40}}
        placeholder="Enter email."
        onChangeText={text => console.log(text)}
        // defaultValue={'Email'}
      />

      <TextInput
        style={{height: 40}}
        placeholder="Enter password."
        onChangeText={text => console.log(text)}
        // defaultValue={'Email'}
      />

      <Button title="Go back" onPress={() => navigation.goBack()} />
      
      <Button
        title="Go to Home Page"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

function RegisterScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Registration Screen</Text>
      <TextInput
        style={{height: 40}}
        placeholder="Enter email."
        onChangeText={text => console.log(text)}
        // defaultValue={'Email'}
      />

      <TextInput
        style={{height: 40}}
        placeholder="Enter password."
        onChangeText={text => console.log(text)}
        // defaultValue={'Email'}
      />
      <Button
        title="Go to Login page"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go to Plans Screen"
        onPress={() => navigation.navigate('Plan')}
      />
    </View>
  );
}

function PlanScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Plan Screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go Back To Registration Screen"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Plan" component={PlanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
