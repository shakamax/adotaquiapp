import React from 'react';
import {
  Text,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  View,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../const/colors';
import myCss from '../../style/Styles';

const DetailsScreen = ({navigation, route}) => {
  const pet = route.params;
  return (
    <SafeAreaView style={myCss.detailsView}>
      {/* Para melhor adaptação da tela nos celulares */}
      {/* é necessária a ScrollView */}
      <ScrollView>

      <StatusBar backgroundColor={COLORS.background} />
      <View style={myCss.detailViewPrincipal}>
        <ImageBackground
          resizeMode="contain"
          source={pet?.image}
          style={myCss.detailViewImg}>
          {/* Header */}
            <View style={myCss.detailHeader}>
            <Icon
              name="arrow-left"
              size={28}
              color={COLORS.dark}
              onPress={navigation.goBack}
            />
            <Icon name="dots-vertical" size={28} color={COLORS.dark} />
          </View>
        </ImageBackground>

        <View style={myCss.detailsContainer}>
          {/* Aqui onde vai ficar o nome e seu icone de sexo */}
            <View style={myCss.detailsContainerHeader}>
            <Text style={myCss.detailTitle}>
              {pet.name}
            </Text>
            {Sex(pet?.sex)}
          </View>

          {/* Renderiza os detalhes do animal, Tipo e Idade */}
          <View style={myCss.detailInfo}>
            <Text style={myCss.fontSize}>{pet.type}</Text>
            <Text style={myCss.detailAge}>{pet.age}</Text>
          </View>

          {/* Render location and icon */}
          <View style={{marginTop: 5, flexDirection: 'row'}}>
            <Icon name="map-marker" color={COLORS.primary} size={20} />
            <Text style={myCss.detailLocation}>
              Asa norte, Distrito Federal
            </Text>
          </View>
        </View>
      </View>

      {/* Mais informações */}
      <View style={myCss.detailMoreInfo}>
        <View>
          {/* Imagem Usuário, nome e Data */}
          <View style={myCss.moreInfoHeader}>
            <Image
              source={require('../../assets/person.jpg')}
              style={myCss.detailsOwnerImg}
            />
            <View style={{flex: 1, paddingLeft: 10}}>
              <Text
                style={myCss.detailOwnerName}>
                Maria Clara
              </Text>
              <Text
                style={myCss.detailOwnerId}>
                Dono
              </Text>
            </View>
              <Text style={myCss.moreInfoDate}>25 Maio, 2020</Text>
          </View>
          <Text style={myCss.detailDesc}>
            Preciso me mudar por motivos de trabalho, não posso levar meu bixinho,
            então eu espero encontrar alguém que cuide e der amor.
          </Text>
        </View>

        {/* Render footer */}
        <View style={myCss.detailFooter}>
          <View style={myCss.iconCon}>
            <Icon name="heart-outline" size={22} color={COLORS.white} />
          </View>
          <View style={myCss.detailBtnDiv}>
            <Text style={myCss.detailBtnDivText}>
              Adoção
            </Text>
          </View>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Função que faz a verificação do sexo e retorna o icone correto.
function Sex(sex) {
  if (sex == 'macho') {
    return (<Icon name="gender-male" size={22} color={COLORS.grey}></Icon>);
  } else if (sex == 'femea') {
    return (<Icon name="gender-female" size={22} color={COLORS.grey}></Icon>);
  }
};

export default DetailsScreen;
