import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class LoginScreen extends Component {

  signInWithGoogleAsync = async() => {
       try {
         const result = await Expo.Google.logInAsync({
           behavior: 'web',
           iosClientId: '271681026569-7i9tfesh02c4kl8u1uv1n938ncoc2ehp.apps.googleusercontent.com',
           scopes: ['profile', 'email'],
         });

         if (result.type === 'success') {
           return result.accessToken;
         } else {
           return {cancelled: true};
         }
       } catch(e) {
         return {error: true};
       }
     }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Sign in with Google"
          onPress={()=>this.signInWithGoogleAsync()}
        />
      </View>
    );
  }
}
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
