import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RESTAURANT_lIST } from "../constants/RestaurantList";
import { Divider } from "../components/Divider";
import { colors } from "../theme/colors";
import { MENU_LIST } from "../constants/MenuList";

const Menu = () => {
  const { params } = useRoute();
  const navigation = useNavigation();
  const currentMenuList = MENU_LIST.filter(
    (item, index) => params.categoryId === item.menuTypeId
  );
  console.log(currentMenuList, "Current Menu List");
  return (
    <View style={styles.container}>
      <FlatList
        ItemSeparatorComponent={() => <Divider />}
        data={currentMenuList}
        keyExtractor={(_, index) => `${index}`}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Details", { productId: item.id })
            }
            style={{ padding: 20 }}
          >
            <Text style={styles.productNameTextStyle}>{item.productName}</Text>
          </TouchableOpacity>
        )}
      />
      <View style={styles.totalView}>
        <Text style={styles.totalStyle}>Total: 0.0</Text>
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  productNameTextStyle: {
    fontSize: 16,
    fontWeight: "500",
  },
  totalView: {
    position: "absolute",
    bottom: 0,
    backgroundColor: colors.lightGray,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  totalStyle: {
    fontSize: 16,
  },
});
