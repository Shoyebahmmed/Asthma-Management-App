import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Switch, TextInput, Button, TouchableOpacity, TouchableWithoutFeedback, ImageBackground } from 'react-native';
import Head from './head';
import NavBar from './navBar';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';

const Notification_Setting = () => {

    const [showNotification, setshowNotification] = React.useState(false);
    const [emailNotification, setemailNotification] = React.useState(false);
    const [allowSound, setallowSound] = React.useState(false);
    const [allowVibration, setallowVibration] = React.useState(false);



    return (
        <ImageBackground source = {require('./img_and_icon/drawable-hdpi/Rectangle.png')} style={styles.container}>
            <Head /> 
            <View style={styles.header}>
                <Image source={require('./img_and_icon/drawable-hdpi/NotificationSetting.png')} />
            </View>

            <View style={styles.body}>
                <View style={styles.first}>
                    <Image source={require('./img_and_icon/drawable-hdpi/ShowNotification.png')} />
                    {/* <Text>{isEnabled.toString()}</Text> */}
                    <Switch 
                        style={styles.switch}
                        value={showNotification}
                        onValueChange={(value) => setshowNotification(value)}
                        trackColor={{ false: "#C5D0D8", true: "#2699FB"}}
                        thumbColor={showNotification ? "#FFFFFF" : "#2699FB"}
                    
                        ios_backgroundColor="2699FB"     //for ios         
                    />
                    {/* <Switch 
                        style={styles.switch}
                        value={isEnabled}
                        onValueChange={(value) => setIsEnabled(value)}
                        trackColor={{ false: "#FFFFFF", true: "#2699FB"}}
                        thumbColor={isEnabled ? "#FFFFFF" : "#2699FB"}
                        ios_backgroundColor="2699FB"     //for ios         
                    /> */}
                </View>
                <View style={styles.second}>
                    <Image source={require('./img_and_icon/drawable-hdpi/EmailNotification.png')} />
                    <Switch 
                        style={styles.switch}
                        value={emailNotification}
                        onValueChange={(value) => setemailNotification(value)}
                        trackColor={{ false: "#C5D0D8", true: "#2699FB"}}
                        thumbColor={emailNotification ? "#FFFFFF" : "#2699FB"}
                        ios_backgroundColor="2699FB"     //for ios         
                    />
                </View>
                <View style={styles.third}>
                    <Image source={require('./img_and_icon/drawable-hdpi/AllowSound.png')} />
                    <Switch 
                        style={styles.switch}
                        value={allowSound}
                        onValueChange={(value) => setallowSound(value)}
                        trackColor={{ false: "#C5D0D8", true: "#2699FB"}}
                        thumbColor={allowSound ? "#FFFFFF" : "#2699FB"}
                        ios_backgroundColor="2699FB"     //for ios         
                    />
                </View>
                <View style={styles.fourth}>
                    <Image source={require('./img_and_icon/drawable-hdpi/AllowVibration.png')} />
                    <Switch 
                        style={styles.switch}
                        value={allowVibration}
                        onValueChange={(value) => setallowVibration(value)}
                        trackColor={{ false: "#C5D0D8", true: "#2699FB"}}
                        thumbColor={allowVibration ? "#FFFFFF" : "#2699FB"}
                        ios_backgroundColor="2699FB"     //for ios         
                    />
                </View>
            </View>
            <NavBar /> 
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8F3FF',
    },

    header: {
        height: 100,
        fontSize: 24,
        marginTop: 30,
        marginLeft: 60,
        flexDirection: 'row',
    },

    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10,
    },
    
    body: {
        marginLeft: 30,
    },

    first: {
        marginBottom: 20,
        flexDirection: 'row',
    },

    second: {
        marginBottom: 20,
        flexDirection: 'row',
    },

    third: {
        marginBottom: 20,
        flexDirection: 'row',
    },

    fourth: {
        marginBottom: 20,
        flexDirection: 'row',
    },

    switch: {
        marginHorizontal: -70
    },
  });

export default Notification_Setting;


                    
                
