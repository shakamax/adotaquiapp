import * as React from 'react';
import {
  createDrawerNavigator,
  useDrawerProgress,
  DrawerContentScrollView,
  DrawerItemList,
  useDrawerStatus,
} from '@react-navigation/drawer';
import {View, Image, Text, StatusBar} from 'react-native';
import Animated from 'react-native-reanimated';
import HomeScreen from '../screens/HomeScreen';
import Login from '../screens/login';
import COLORS from '../../const/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import myCss from '../../style/Styles'
import { getAuth, signOut } from "firebase/auth";
import { Firebase } from '../../const/config';

const auth = getAuth(Firebase);

const Drawer = createDrawerNavigator();


// Aqui fica as personalizações do container da sidebar
// a ideia aqui é fazer a animação com o reanimated.
const DrawerScreenContainer = ({children}) => {

  // Aqui a gente vai trabalhar o estado da sidebar
  // aberto ou não ele vai ter um comportamento especifico.
  const isDrawerOpen = useDrawerStatus();
  const progress = useDrawerProgress();
  // aqui é como é feito a animação, sendo os arrays de input
  // e output as configurações da animação
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 25],
  });

  return (
    <Animated.View
    // Esse style é melhor que fique aqui, pois ele precisa de 
    // receber a sclae como uma variável para tratar
    // o style de acordo.
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        borderRadius,
        transform: [{scale}],
        overflow: 'hidden',
      }}>
      <StatusBar
        backgroundColor={isDrawerOpen == 'open' ? COLORS.primary : COLORS.white}
        barStyle="dark-content"
      />
      {children}
    </Animated.View>
  );
};

// Custom Drawer seria o a parte que pode ser modificada
// dependendo do contexto, por exemplo usuários diferentes.
const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView
      style={myCss.sideBar}>
      <View
        style={myCss.sideBarHeader}>
        <Image
          source={require('../../assets/person.jpg')}
          style={myCss.sideBarImg}
        />
        <Text
          style={myCss.sideBarTitle}>
          MARIA CLARA
        </Text>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {

  const logoff = () => {
    signOut(auth).then(() => {

    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <Drawer.Navigator
      // Esse caqui é onde eu posso estilizar com o RN
      // algumas opções...como HeaderShow false, pra barra
      // superior ficar transparente.

      screenOptions={{
        headerShown: false,
        drawerType: 'slide',
        drawerStyle: {
          width: 200,
          backgroundColor: COLORS.primary,
        },
        overlayColor: null,
        drawerLabelStyle: {
          fontWeight: 'bold',
        },
        drawerActiveTintColor: COLORS.white,
        drawerInactiveTintColor: COLORS.secondary,
        drawerItemStyle: {backgroundColor: null},
        sceneContainerStyle: {
          backgroundColor: COLORS.primary,
        },
      }}
      // drawerContent vai puxar do conteudo customizado
      // que vai funcionar de acordo com o usuário logado, 
      // passando nas props os argumentos necessários.
      drawerContent={props => <CustomDrawerContent {...props} />}>
      {/* Aqui é onde vamos colocar as opções da siebar
       cada Drawer screen é uma opção que pode vir com
       suas devidas configurações e telas. */}
      <Drawer.Screen
        name="Home"
        options={{
          title: 'Adoção',
          drawerIcon: ({color}) => (
            <Icon name="paw" size={25} style={{marginRight: -20, color}} />
          ),
        }}>
        {props => (
          <DrawerScreenContainer>
            <HomeScreen {...props} />
          </DrawerScreenContainer>
        )}
      </Drawer.Screen>

      <Drawer.Screen
        name="Doação"
        options={{
          drawerIcon: ({color}) => (
            <Icon name="gift" size={25} style={{marginRight: -20, color}} />
          ),
        }}>
        {props => (
          <DrawerScreenContainer>
            <HomeScreen {...props} />
          </DrawerScreenContainer>
        )}
      </Drawer.Screen>

      <Drawer.Screen
        name="Adicionar Pet"
        options={{
          drawerIcon: ({color}) => (
            <Icon name="plus-box" size={25} style={{marginRight: -20, color}} />
          ),
        }}>
        {props => (
          <DrawerScreenContainer>
            <HomeScreen {...props} />
          </DrawerScreenContainer>
        )}
      </Drawer.Screen>

      <Drawer.Screen
        name="Favoritos"
        options={{
          drawerIcon: ({color}) => (
            <Icon name="heart" size={25} style={{marginRight: -20, color}} />
          ),
        }}>
        {props => (
          
          <DrawerScreenContainer>
            <HomeScreen {...props} />
          </DrawerScreenContainer>
          
        )}
      </Drawer.Screen>

      <Drawer.Screen
        name="Perfil"
        options={{
          drawerIcon: ({color}) => (
            <Icon name="account" size={25} style={{marginRight: -20, color}} />
          ),
        }}>
        {props => (
          <DrawerScreenContainer>
            <HomeScreen {...props} />
          </DrawerScreenContainer>
        )}
      </Drawer.Screen>
      <Drawer.Screen
        onPress={logoff}
        name="Sair"
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="location-exit" size={25} style={{ marginRight: -20, color }} />
          ),
        }}>
        {props => (
          <DrawerScreenContainer>
            {navigation.navigate('Login')}
          </DrawerScreenContainer>
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};


export default DrawerNavigator;