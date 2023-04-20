import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, TouchableWithoutFeedback, ImageBackground } from 'react-native';
import Head from './head';
import NavBar from './navBar';

const Change_Password = () => {

    const [current, setCurrent] = useState(true);
    const [newPassword, setnewPassword] = useState(true);
    const [confirm, setconfirm] = useState(true);
    const [buttonPoss, setButtonPoss] = useState(true);


    return (
        <ImageBackground source = {require('./img_and_icon/drawable-hdpi/Rectangle.png')} style={styles.container}>
            <Head /> 
            <View style={styles.header}>
                {/* <TouchableOpacity onPress={() => alert('going back')}
                    activeOpacity={0.5}>
                    <Image source={require('./img_and_icon/drawable-hdpi/IconArrowLeft.png')} 
                    style={styles.headerImage} 
                    resizeMode='stretch'
                    />
                </TouchableOpacity> */}
                <Image source={require('./img_and_icon/drawable-hdpi/ChangePassword.png')} />
            </View>

            <View style={styles.body}>
                
                <View style={styles.current}>
                    <Image source={require('./img_and_icon/drawable-hdpi/LockIcon.png')} style={styles.bodyImage} />
                    <TextInput
                    style={styles.textBox}
                    onChangeText={(inputText) => setText(inputText)}
                    value={current}
                    placeholder="Current Password"
                    />
                </View>
                <View style={styles.new}>
                    <Image source={require('./img_and_icon/drawable-hdpi/LockIcon.png')} style={styles.bodyImage} />
                    <TextInput
                    style={styles.textBox}
                    onChangeText={(inputText) => setText(inputText)}
                    value={newPassword}
                    placeholder="New Password"
                    />
                    {/* <Image style={styles.line} source={require('./img_and_icon/drawable-hdpi/Line.png')} /> */}

                </View>
                <View style={styles.confirm}>
                    <Image source={require('./img_and_icon/drawable-hdpi/LockIcon.png')} style={styles.bodyImage} />
                    <TextInput
                    style={styles.textBox}
                    onChangeText={(inputText) => setText(inputText)}
                    value={confirm}
                    placeholder="Confirm Password"
                    />
                </View>

                <View style={styles.button}>
                    <TouchableOpacity onPress={() => alert('password is changed')}
                        activeOpacity={0.5}>
                        <Image source={require('./img_and_icon/drawable-hdpi/ButtonChangePassword.png')} 
                        style={styles.buttonImage} 
                        resizeMode='stretch'
                        />
                    </TouchableOpacity>
                    {/* <Button
                        title="Change Password"
                        onPress={() => {

                        }}
                    /> */}
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
        marginTop: 90,
        marginLeft: 60,
        flexDirection: 'row',
    },

    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10,
    },
    
    body: {
        marginLeft: 40,
    },

    current: {
        marginTop: 10,
        flexDirection: 'row',
        marginBottom: 20,
        marginLeft: 10,
    },
    new: {
        flexDirection: 'row',
        marginBottom: 20,
        marginLeft: 10,
    },
    confirm: {
        flexDirection: 'row',
        marginBottom: 20,
        marginLeft: 10,
    },
    bodyImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10,
    },
    // line: {
    //     alignItems: 'center',
    //     marginTop: 20,
    //     marginRight: 100,
    // },
    button: {
        marginTop: 100,
        marginRight: 45,
        alignItems: 'center',
    },
    buttonImage: {
    }
  });

export default Change_Password;
