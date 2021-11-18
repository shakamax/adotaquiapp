import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { 
    SafeAreaView, 
    View, 
    Text, 
    TextInput, 
    Image, 
    TouchableOpacity, 
    KeyboardAvoidingView, 
    Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../const/colors';
import myCss from '../../style/Styles';
import { ScrollView } from 'react-native-gesture-handler';
import { Firebase } from '../../const/config';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';



const auth = getAuth(Firebase);

const Login = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [errorLogin, setErrorLogin] = useState("");

    const loginApp = () => {
        signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                const user = userCredential.user;
                navigation.navigate('Home')
            })
            .catch((error) => {
                setErrorLogin(true);
            });
    };

    return (
        <SafeAreaView style={myCss.loginContainer} >
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={myCss.loginHeader}>
                    <Text style={myCss.loginHeaderText1}>
                        <Icon name="paw" size={25}></Icon>
                        adot
                    </Text>
                    <Text
                        style={myCss.loginHeaderText2}>
                        Aqui
                        <Icon name={"paw"} size={25}></Icon>
                    </Text>
                </View>

                <View style={{ marginTop: 70 }}>
                    <Text style={myCss.loginH3}>
                        Bem Vindo,
                    </Text>
                    <Text style={myCss.loginH4}>
                        Por favor, realize o login para continuar
                    </Text>
                </View>

                <View style={{ marginTop: 20 }}>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                        style={{flex: 1}}
                    >
                        <View style={myCss.inputContainer}>
                            <Icon
                                name="email-outline"
                                color={COLORS.dark}
                                size={20}
                                autoComplete="email"
                                style={myCss.inputIcon}
                            />
                            <TextInput placeholder="E-mail"
                                keyboardType="email-address"
                                style={myCss.input}
                                type="text"
                                onChangeText={(text) => setEmail(text)}
                                value={email}
                            />
                        </View>
                        <View style={myCss.inputContainer}>
                            <Icon
                                name="lock-outline"
                                color={COLORS.dark}
                                size={20}
                                style={myCss.inputIcon}
                            />
                            <TextInput
                                placeholder="Senha"
                                style={myCss.input}
                                secureTextEntry={true}
                                type="text"
                                onChangeText={(text) => setSenha(text)}
                                value={senha}
                            />
                        </View>

                    </KeyboardAvoidingView>
                    {errorLogin === true ?
                        <View style={myCss.warningView}>
                            <Text
                                style={myCss.warningText}
                            >
                                Login ou senha inválidos.&nbsp;
                                <Icon
                                    name="alert"
                                    color={COLORS.danger}
                                    size={20}
                                    style={myCss.inputIconLeft}
                                />
                            </Text>
                        </View>
                        :
                        <View />
                    }
                    <View style={myCss.btnPrimary}>
                        {email === "" || senha === ""
                        ?
                        <TouchableOpacity
                            disabled
                        >
                            <Text style={myCss.btnContentDs}>
                                Informe o e-mail / senha
                            </Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity 
                            onPress={loginApp}
                        >
                            <Text style={myCss.btnContent}>
                                Login
                            </Text>
                        </TouchableOpacity>
                        }
                    </View>
                    <View
                        style={myCss.loginSectionBreak}>
                        <View style={myCss.line}></View>
                        <Text style={myCss.secBreakText}>OU</Text>
                        <View style={myCss.line}></View>
                    </View>
                    <View
                        style={myCss.otherLogins}>
                        <View style={myCss.btnSecondary}>
                            <Text style={myCss.btnOtherLogin}>
                                Login com 
                            </Text>
                            <Image
                                style={myCss.btnImage}
                                source={require('../../assets/facebook.png')}
                            />
                        </View>
                        <View style={{ width: 10 }}></View>
                        <View style={myCss.btnSecondary}>
                            <Text style={myCss.btnOtherLogin}>
                                Login com
                            </Text>
                            <Image
                                style={myCss.btnImage}
                                source={require('../../assets/google.png')}
                            />
                        </View>
                    </View>
                </View>

                <View
                    style={myCss.loginFooter}>
                    <Text style={myCss.footerNormalText}>
                        Não tem conta ?   
                    </Text>
                    <TouchableOpacity onPress={() =>  navigation.navigate('Signup')}>
                        <Text style={myCss.footerBigText}>
                            &nbsp;&nbsp;Cadastre-se
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};


export default Login;
