import React, { useEffect } from 'react';
import {
  Dimensions,
  SafeAreaView,
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  StyleSheet,
  LogBox
} from 'react-native';
import COLORS from '../../const/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import pets from '../../const/pets';
import mycss from '../../style/Styles'
const {height} = Dimensions.get('window');
// Nomeando os pets e seus tipos.
const petCategories = [
  {name: 'GATOS', icon: 'cat'},
  {name: 'CACHORROS', icon: 'dog'},
  {name: 'PÁSSAROS', icon: 'ladybug'},
  {name: 'COELHOS', icon: 'rabbit'},
];

// Função testando códigos condicionais, para retornar
// um elemento de acordo com uma informação.
function Sex(sex){
  if (sex == 'macho') {
    return (<Icon name="gender-male" size={22} color={COLORS.grey}></Icon>);
  }else if(sex == 'femea'){
    return (<Icon name="gender-female" size={22} color={COLORS.grey}></Icon>);
  }
};


// CONTEUDO DOS CARDS, é chamado para renderizar os cards
// de pets
const Card = ({pet, navigation}) => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      // Função que leva para os detalhes
      // Precisa do nome e do animal.
      onPress={() => navigation.navigate('DetailsScreen', pet)}>
      <View style={mycss.petCardContainer}>
        {/* IMAGEM DO PET */}
        <View style={mycss.petAvatar}>
          <Image
            source={pet.image}
            style={mycss.petCardImg}
          />
        </View>

        {/* Detalhes do card aqui */}
        <View style={mycss.petDetail}>
          {/* Nome e Icone de sexo */}
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={mycss.petCardName}>
              {pet?.name}
            </Text>
            {Sex(pet?.sex)}
          </View>

          {/* Raça e idade */}
          <Text style={mycss.petCardRace}>
            {pet?.type}
          </Text>
          <Text style={mycss.petCardAge}>
            {pet?.age}
          </Text>

          {/* Renderiza a distancia do animal */}
          <View style={mycss.petCardFotter}>
            <Icon name="map-marker" color={COLORS.primary} size={18} />
            <Text style={mycss.petCardDistance}>
              Distância:{pet?.distance}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

// É aqui que renderiza total a homeScreen
const HomeScreen = ({navigation}, user) => {
  const [selectedCategoryIndex, setSeletedCategoryIndex] = React.useState(0);
  const [filteredPets, setFilteredPets] = React.useState([]);

  // Função para filtrar os pets de acordo com seu tipo.
  const filterPet = index => {
    const currentPets = pets.filter(
      item => item?.pet?.toUpperCase() == petCategories[index].name,
    )[0]?.pets;
    setFilteredPets(currentPets);
  };

  // Efeito de troca que deixa tudo mais legal, e também
  // serve para renderizar os pets assim que a página abre.
  React.useEffect(() => {
    filterPet(0);
  }, []);

  return (
    <SafeAreaView style={{flex: 1, color: COLORS.white}}>
      <View style={mycss.petHeader}>
        <Icon name="sort-variant" size={28} onPress={navigation.toggleDrawer} />
        <Text style={mycss.Title}>
          <Icon name="paw" size={25}></Icon>
          adotAqui  
          <Icon name={"paw"} size={25}></Icon>
        </Text>
        <Image
          source={require('../../assets/person.jpg')}
          style={mycss.HomeImg}
        />
      </View>
      <ScrollView style={{ flex: 1}} showsVerticalScrollIndicator={false}>
        <View style={cssVariable.mainContainer}>
          {/* Render the search inputs and icons */}
          <View style={mycss.searchInputPets}>
            <Icon name="magnify" size={24} color={COLORS.grey} />
            <TextInput
              placeholderTextColor={COLORS.grey}
              placeholder="Procurar por um amigo..."
              style={{flex: 1}}
            />
            <Icon name="sort-ascending" size={24} color={COLORS.grey} />
          </View>

          {/* Render all the categories */}
          <View
            style={mycss.PetSection}>
            {petCategories.map((item, index) => (
              <View key={'pet' + index} style={mycss.centerAlign}>
                <TouchableOpacity
                  onPress={() => {
                    setSeletedCategoryIndex(index);
                    filterPet(index);
                  }}
                  style={[
                    mycss.petsBtn,
                    {
                      backgroundColor:
                        selectedCategoryIndex == index
                          ? COLORS.primary
                          : COLORS.white,
                    },
                  ]}>
                  <Icon
                    name={item.icon}
                    size={30}
                    color={
                      selectedCategoryIndex == index
                        ? COLORS.white
                        : COLORS.primary
                    }
                  />
                </TouchableOpacity>
                <Text style={mycss.petsNameBtn}>{item.name}</Text>
              </View>
            ))}
          </View>

          {/* FLATLIST pra renderizar os icones de cada categoria */}
          <View style={{marginTop: 20}}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={filteredPets}
              renderItem={({item}) => (
                <Card pet={item} navigation={navigation} />
              )}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Para fazer a tela ficar com visual melhor
// sempre de acordo com a tela atual
// foi necessário fazer esse estilo aqui para
// puxar a variávei height
const cssVariable = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.light,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 40,
    minHeight: height,
  },
});

export default HomeScreen;
