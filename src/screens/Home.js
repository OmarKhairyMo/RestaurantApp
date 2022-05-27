import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { colors } from "../theme/colors";
import { RESTAURANT_lIST } from "../constants/RestaurantList";
import { useNavigation } from "@react-navigation/native";

const { height } = Dimensions.get("screen");
const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Restaurant</Text>
      </View>
      {/* list */}
      <View style={{ flex: 1 }}>
        <FlatList
          data={RESTAURANT_lIST}
          keyExtractor={(_, index) => `${index}`}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Menu", { categoryId: item.menuId })
              }
            >
              <ImageBackground
                source={{ uri: item.img }}
                imageStyle={{ width: "100%", height: "100%" }}
                style={{
                  height: height * 0.25,
                  marginVertical: 10,
                  marginHorizontal: 10,
                }}
              >
                <View
                  style={{
                    backgroundColor: colors.black,
                    height: "20%",
                    width: "100%",
                    position: "absolute",
                    bottom: 0,
                    padding: 10,
                    opacity: 0.5,
                  }}
                ></View>
                <Text
                  style={[
                    styles.headerTitle,
                    { position: "absolute", bottom: 8, left: 15 },
                  ]}
                >
                  {item.name}
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  header: {
    height: height * 0.1,
    backgroundColor: colors.primary,
    justifyContent: "flex-end",
    paddingLeft: 10,
    paddingBottom: 10,
  },
  headerTitle: {
    color: colors.white,
    fontWeight: "500",
    fontSize: 20,
  },
});
