import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, TouchableWithoutFeedback, ImageBackground, FlatList, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Head from './head';
import NavBar from './navBar';

const Profile_Page1 = () => {
  
    const [userData, setData] = useState({ 
      user_name: '', 
      DOB: '',
      email: '',
      address: '',
      medicalCondition_detail:'' 
    });
  
    const [name, setName] = useState(true);
    const [dob, setDOB] = useState(true);
    const [email, setEmail] = useState(true);
    const [address, setAddress] = useState(true);
    const [AsthamaTriggers, setAsthamaTriggers] = useState(true);
    
    const data = [
      { id: '1', text: 'Mould' },
      { id: '2', text: 'Hay Fever' },
      { id: '3', text: 'Air Quality' },
      { id: '4', text: 'Extreme Weather' },
      { id: '5', text: 'Colds' },
      { id: '6', text: 'Cigarette smoke' },
      { id: '7', text: 'Viruses' },
      { id: '8', text: 'Gardening' },
      { id: '9', text: 'Animals' },
      { id: '10', text: 'Other' },
    ];
  
    const renderItem = ({ item }) => {
      return (
        <View style={styles.item}>
          <Icon name="circle" size={6} color="#030303" solid/>
          <Text style={styles.itemText}>{item.text}</Text>
        </View>
      );
    };

    // const getItemCount = () => {
    //   return data.length;
    // };
  
    // const getItem = (index) => {
    //   return data[index];
    // };
  
    // const renderItem = ({ item }) => {
    //   return (
    //     <View>
    //       <Text>{item.text}</Text>
    //     </View>
    //   );
    // };
  
    return (
      <ScrollView>
        <ImageBackground style={styles.container } source={require("./img_and_icon/drawable-hdpi/Rectangle.png")}>
          <Head />
          
          <View style={styles.head}>
            <View>
              <TouchableOpacity onPress={() => alert('going back')}
                activeOpacity={0.5}>
                <Image source={require('./img_and_icon/drawable-hdpi/IconArrowLeft.png')} 
                  style={styles.BackBtn} 
                  resizeMode='stretch'
                />
              </TouchableOpacity>
            </View>
              <Image
                source={require("./img_and_icon/drawable-hdpi/ProfilePictureIcon.png")}
                style = {styles.logo}
              />
          </View>
          <Text style={styles.username}>User Name</Text>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => alert('edit profile')}
                activeOpacity={0.5}>
                <Image source={require('./img_and_icon/drawable-hdpi/EditProfileBtn.png')} 
                style={styles.EditProfileBtn} 
                resizeMode='stretch'
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => alert('changing password')}
                activeOpacity={0.5}>
                <Image source={require('./img_and_icon/drawable-hdpi/ChangePasswordBtn.png')} 
                style={styles.ChangePasswordBtn} 
                resizeMode='stretch'
                />
            </TouchableOpacity>
          </View>        
            
          <View style={styles.DOB}>
              <Image source={require('./img_and_icon/drawable-hdpi/CalendarIcon.png')} 
                style={styles.DOBIcon} 
                resizeMode='stretch'
              />
              <Text style={styles.UserDOB}>01/01/1998</Text>
          </View>
          <View style={styles.Email}>
            <Image source={require('./img_and_icon/drawable-hdpi/EmailIcon.png')} 
              style={styles.EmailIcon} 
              resizeMode='stretch'
            />
            <Text style={styles.UserEmail}>Username@gmail.com</Text>
          </View>
          <View style={styles.Address}>
            <Image source={require('./img_and_icon/drawable-hdpi/AddressIcon.png')} 
              style={styles.AddressIcon} 
              resizeMode='stretch'
            />
            <Text style={styles.UserAddress}>Street name, Suburb, State</Text>
          </View>
          <View style={styles.Details}>
            <Image source={require('./img_and_icon/drawable-hdpi/DetailsIcon.png')} 
              style={styles.DetailsIcon} 
              resizeMode='stretch'
            />
            <Text style={styles.UserDetails}>Details</Text>
          </View>
          <View style={styles.UserDetailsBox}>
            <Text style={styles.UserDetailsBoxData}>
              Asthma is a condition in which your airways 
              narrow and swell and may produce extra mucus.
            </Text>
          </View>
          <View style={styles.AsthamaTriggers}>
            <Image source={require('./img_and_icon/drawable-hdpi/AsthamaTriggerIcon.png')} 
              style={styles.AsthamaTriggersIcon} 
              resizeMode='stretch'
            />
            <Text style={styles.UserAsthamaTriggers}>Asthma Triggers</Text>
          </View>
          {/* <VirtualizedList
            data={data}
            getItemCount={getItemCount}
            getItem={getItem}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />   */}
          <FlatList
            style={styles.AsthamaTriggersList}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />  

          < NavBar />
        </ImageBackground>
      </ScrollView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    head:{
      flexDirection: 'row',
      marginRight: 150,
      marginTop: 20,

    },
    BackBtn: {
      marginHorizontal: 50,
      // height: 40,
    },
    button: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 10,
    },
    username: {
      fontSize: 24,
      color: '#000874',
    },
    EditProfileBtn: {
      // width: 100,
    },
    ChangePasswordBtn: {

    },
    DOB: {
      flexDirection: 'row',
      marginTop: 20,
      marginRight: 200,
    },
    DOBIcon: {
      marginHorizontal: 15,
    },
    UserDOB: {
      fontSize: 22,
      color: '#000874',

    },
    Email: {
      flexDirection: 'row',
      marginTop: 20,
      marginRight: 100,
    },
    EmailIcon: {
      marginHorizontal: 13,
      marginTop: 5,
    },
    UserEmail: {
      fontSize: 21,
      color: '#000874',
    },
    Address: {
      flexDirection: 'row',
      marginTop: 20,
      marginRight: 75,
    },
    AddressIcon: {
      marginHorizontal: 11,
    },
    UserAddress: {
      fontSize: 20,
      color: '#000874',
    },
    Details: {
      flexDirection: 'row',
      marginTop: 20,
      marginRight: 250,
      color: '#000874',
    },
    DetailsIcon: {
      marginHorizontal: 17,
    },
    UserDetails: {
      fontSize: 20,
      color: '#000874',
    },
    UserDetailsBox: {
      marginTop: 5,
      marginLeft: 70,
      color: "#72759A",
    },
    UserDetailsBoxData: {
      color: "#72759A",
    },
    AsthamaTriggers: {
      flexDirection: 'row',
      marginTop: 20,
      marginRight: 164,
    },
    AsthamaTriggersIcon: {
      marginHorizontal: 15,
    },
    UserAsthamaTriggers: {
      fontSize: 20,
      color: '#000874',
    },
    AsthamaTriggersList: {
      marginTop: 10,
      marginBottom: 100,
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 100,
    },
    itemText: {
      fontSize: 16,
      marginLeft: 10,
      color: "#72759A",
    },
  })

  export default Profile_Page1;
