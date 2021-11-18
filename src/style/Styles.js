import React from 'react';
import { StyleSheet } from 'react-native';
import COLORS from '../const/colors';

export default StyleSheet.create({
    // =-=-=-=-=-=HOME PAGE=-=-=-=-=-=
    Title : {
        color: COLORS.primary,
        fontWeight: 'bold',
        fontSize: 20
    },
    HomeImg : {
        height: 35,
        width: 35,
        borderRadius: 25
    },
    PetSection : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    CenterAlign : {
        alignItems: 'center'
    },
    petHeader: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    searchInputPets: {
        height: 50,
        backgroundColor: COLORS.white,
        borderRadius: 7,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    petsBtn: {
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    petsNameBtn: {
        color: COLORS.dark,
        fontSize: 10,
        marginTop: 5,
        fontWeight: 'bold',
    },
    petCardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    petDetail: {
        height: 120,
        backgroundColor: COLORS.white,
        flex: 1,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        padding: 20,
        justifyContent: 'center',
    },
    petAvatar: {
        height: 150,
        width: 140,
        backgroundColor: COLORS.background,
        borderRadius: 20,
    },
    petCardName : {
        fontWeight: 'bold',
        color: COLORS.dark,
        fontSize: 20,
    },
    petCardRace : {
        fontSize: 12,
        marginTop: 5,
        color: COLORS.dark
    },
    petCardAge : {
        fontSize: 11,
        marginTop: 5,
        color: COLORS.grey
    },
    petCardDistance : {
        fontSize: 12,
        color: COLORS.grey,
        marginLeft: 5
    },
    petCardImg : {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    petCardFotter : {
        marginTop: 5,
        flexDirection: 'row'
    },
    // =-=-=-=-=-=HOME PAGE=-=-=-=-=-=
    
    
    // =-=-=-=-=-=DETALHES=-=-=-=-=-=
    detailsContainer: {
        height: 120,
        backgroundColor: COLORS.white,
        marginHorizontal: 20,
        flex: 1,
        bottom: -60,
        borderRadius: 18,
        elevation: 10,
        padding: 20,
        justifyContent: 'center',
    },
    detailsContainerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    detailTitle : {
        fontSize: 20,
        color: COLORS.dark,
        fontWeight: 'bold'
    },
    detailAge : {
        fontSize: 13,
        color: COLORS.dark
    },
    detailType : {
        fontSize: 12,
        color: COLORS.dark
    },
    detailLocation:{
        fontSize: 14,
        color: COLORS.grey,
        marginLeft: 5 
    },
    detailDesc: {
        marginTop: 10,
        fontSize: 12.5,
        color: COLORS.dark,
        lineHeight: 20,
        marginHorizontal: 20,
    },
    detailFooter: {
        height: 100,
        backgroundColor: COLORS.light,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    iconCon: {
        backgroundColor: COLORS.primary,
        width: 50,
        height: 50,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    detailBtnDiv: {
        backgroundColor: COLORS.primary,
        flex: 1,
        height: 50,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailHeader: {
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-between',
    },
    detailsView : {
        flex: 1,
        backgroundColor: COLORS.white
    },
    detailViewPrincipal : {
        height: 400,
        backgroundColor: COLORS.background
    },
    detailViewImg : {
        height: 280,
        top: 20,
    },
    detailInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    detailMoreInfo : {
        marginTop: 80,
        justifyContent: 'space-between',
        flex: 1
    },
    moreInfoHeader : {
        flexDirection: 'row',
        paddingHorizontal: 20
    },
    detailsOwnerImg : {
        height: 40,
        width: 40,
        borderRadius: 20
    },
    detailOwnerName : {
        color: COLORS.dark,
        fontSize: 12,
        fontWeight: 'bold'
    },
    detailOwnerId : {
        color: COLORS.grey,
        fontSize: 11,
        fontWeight: 'bold',
        marginTop: 2,
    },
    moreInfoDate : {
        color: COLORS.grey,
        fontSize: 12
    },
    detailBtnDivText : {
        color: COLORS.white,
        fontWeight: 'bold'
    },

    // =-=-=-=-=-=DETALHES=-=-=-=-=-=
    
    
    // =-=-=-=-=-=SIDEBAR=-=-=-=-=-=
    sideBar : {
        paddingVertical: 30,
    },
    sideBarHeader : {
        marginLeft: 20,
        marginVertical: 40,
    },
    sideBarImg : {
        height: 90,
        width: 90,
        borderRadius: 20
    },
    sideBarTitle : {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 13,
        marginTop: 10,
    },

    // =-=-=-=-=-=SIDEBAR=-=-=-=-=-=
    
    // =-=-=-=-=-=LOGIN=-=-=-=-=-=
    inputContainer: { 
        flexDirection: 'row',
        marginTop: 20
    },
    input: {
        color: COLORS.dark,
        paddingLeft: 30,
        borderBottomWidth: 1,
        borderColor: COLORS.primary,
        borderBottomWidth: 0.5,
        flex: 1,
        fontSize: 18,
    },
    inputIcon: {
        marginTop: 15,
        position: 'absolute'
    },
    inputIconLeft: {
        marginTop: 15,
        backgroundColor: '#ffffff00'
    },
    btnPrimary: {
        backgroundColor: COLORS.primary,
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },

    btnSecondary: {
        height: 50,
        borderWidth: 1,
        borderColor: '#a5a5a5',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        flex: 1,
        flexDirection: 'row',
    },
    btnImage: {
        width: 20,
        height: 20,
        marginLeft: 5
    },
    line: {
        height: 1,
        width: 30,
        backgroundColor: '#a5a5a5'
    },
    loginHeader : {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent : "center",
    },
    loginHeaderText1 : {
        fontWeight: 'bold',
        fontSize: 30,
        color: COLORS.dark,
    },
    loginHeaderText2 : {
        fontWeight: 'bold',
        fontSize: 30,
        color: COLORS.primary
    },
    loginH3 : {
        fontSize: 27,
        fontWeight: 'bold',
        color: COLORS.dark
    },
    loginH4 : {
        fontSize: 15,
        fontWeight: 'bold',
        color: COLORS.primary
    },
    loginContainer : {
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: COLORS.white
    },
    btnContent : {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18 
    },
    btnContentDs: {
        color: '#cfcdcd',
        fontWeight: 'bold',
        fontSize: 15
    },
    loginSectionBreak : {
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    secBreakText : {
        marginHorizontal: 5,
        fontWeight: 'bold'
    },
    otherLogins : {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btnOtherLogin : {
        fontWeight: 'bold',
        fontSize: 16
    },
    loginFooter : {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 20,
    },
    footerNormalText : {
        color: COLORS.dark,
        fontWeight: 'bold'
    },
    footerBigText : {
        color: COLORS.primary,
        fontWeight: 'bold'
    },
    warningText: {
        color: COLORS.danger,
        fontWeight: 'bold'
    },
    warningView: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
    }


    // =-=-=-=-=-=LOGIN=-=-=-=-=-=
})