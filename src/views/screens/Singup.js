import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from './../../const/colors';
import myCss from './../../style/Styles';
import { ScrollView } from 'react-native-gesture-handler';
import { Firebase } from '../../const/config';
import { 
    getAuth,
    createUserWithEmailAndPassword,
    FacebookAuthProvider,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';



const googleProvider = new GoogleAuthProvider(Firebase);
const provider = new FacebookAuthProvider(Firebase);
const auth = getAuth(Firebase);


const SignUpScreen = ({ navigation }) => {
    
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [errorSignup, setErrorSignup] = useState("");
    
    provider.setCustomParameters({
        'display': 'popup'
    });

    const creatUserApp = () => {
        createUserWithEmailAndPassword(auth, email, senha, nome)
            .then((userCredential) => {
                const user = userCredential.user;
                navigation.goBack();
            })
            .catch((error) => {
                setErrorSignup(true);
            });
    };

    const signWithFace = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user);

                const credential = FacebookAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = FacebookAuthProvider.credentialFromError(error);
                setErrorSignup(true);

                // ...
            });
    }

    const loginWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                setErrorSignup(true)
                // ...
            });
    }

    return (
        <SafeAreaView
            style={{ paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', marginTop: 40 }}>
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
                        Olá, preencha os campos,
                    </Text>
                    <Text style={myCss.loginH4}>
                        Para terminar seu cadastro.
                    </Text>
                </View>
                <View style={{ marginTop: 20 }}>
                    <View style={myCss.inputContainer}>
                        <Icon
                            name="account-outline"
                            color={COLORS.dark}
                            size={20}
                            style={myCss.inputIcon}
                        />
                        <TextInput placeholder="Nome"
                            keyboardType="email-address"
                            onChangeText={(text) => setNome(text)}
                            style={myCss.input}
                        />
                    </View>
                    <View style={myCss.inputContainer}>
                        <Icon
                            name="email-outline"
                            color={COLORS.dark}
                            size={20}
                            style={myCss.inputIcon}
                        />
                        <TextInput placeholder="E-mail"
                            onChangeText={(text) => setEmail(text)}
                            keyboardType="email-address"
                            style={myCss.input}
                            autoComplete="email"
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
                            onChangeText={(text) => setSenha(text)}
                            secureTextEntry
                        />
                    </View>
                    {errorSignup === true ?
                        <View style={myCss.warningView}>
                            <Text
                                style={myCss.warningText}
                            >
                                Ocorreu um erro no cadastro, tente novamente.&nbsp;
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
                        {email === "" || senha === "" || nome === ""
                            ?
                            <TouchableOpacity
                                disabled
                            >
                                <Text style={myCss.btnContentDs}>
                                    Prencha o formulário
                                </Text>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity
                                onPress={creatUserApp}
                            >
                                <Text style={myCss.btnContent}>
                                    Cadastrar
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
                        <TouchableOpacity style={myCss.btnSecondary}
                            onPress={signWithFace}
                        >
                            <Text style={myCss.btnOtherLogin}>
                                Cadastro com
                            </Text>
                            <Image
                                style={myCss.btnImage}
                                source={require('../../assets/facebook.png')}
                            />
                        </TouchableOpacity>
                        <View style={{ width: 10 }}></View>
                        <TouchableOpacity style={myCss.btnSecondary}
                            onPress={loginWithGoogle}
                        >
                            <Text style={myCss.btnOtherLogin}>
                                Cadastro com
                            </Text>
                            <Image
                                style={myCss.btnImage}
                                source={require('../../assets/google.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View
                    style={myCss.loginFooter}>
                    <Text style={myCss.footerNormalText}>
                        Já possui conta? 
                    </Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={myCss.footerBigText}>
                            &nbsp;&nbsp; Faça Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignUpScreen;
