import { useRoute } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

import { MENU_LIST } from "../constants/MenuList";
import { colors } from "../theme/colors";

const { height } = Dimensions.get("window");
const Details = () => {
  const { params } = useRoute();
  console.log(params.productId, "asldjkhalsdj");
  const currentItem = MENU_LIST.find(
    (item, index) => item.id === params.productId
  );
  console.log(currentItem, "Is this working?");
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <View
        style={{ height: height * 0.4, backgroundColor: "red", marginTop: 50 }}
      >
        <Image
          source={{ uri: currentItem.productImg }}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <View style={styles.body}>
        <View
          style={{
            height: 100,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Text style={styles.productNameStyle}>Chicken Burger</Text>
        </View>
        <Text style={styles.descritionStyle}>Description</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <View style={{ width: "85%" }}>
            <Text style={{ color: "white" }}>
              {currentItem.productDescription}
            </Text>
          </View>

          <Text style={{ color: "white" }}>${currentItem.productPrice}</Text>
        </View>
        <View
          style={{
            height: 60,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "flex-end",
            marginTop: 10,
          }}
        >
          <Text
            style={{ color: colors.white, fontWeight: "bold", fontSize: 16 }}
          >
            Quantity:
          </Text>
          <TextInput
            textAlign="center"
            style={styles.textInputStyle}
            keyboardType={"numeric"}
            placeholder="Enter Quantity"
          />
        </View>
      </View>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.buttonTitleStyle}>Add This item</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    paddingTop: 25,
  },
  productNameStyle: {
    fontSize: 26,
    fontWeight: "bold",
    color: colors.itemTitle,
  },
  descritionStyle: {
    fontSize: 20,
    fontWeight: "500",
    color: colors.white,
    alignSelf: "center",
    marginTop: 15,
  },
  body: {
    flex: 1,
    paddingHorizontal: 25,
  },
  textInputStyle: {
    borderBottomColor: "red",
    paddingHorizontal: 10,
    marginLeft: 10,
    borderWidth: 2,
    color: colors.white,
  },
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.lightGray,
    alignSelf: "center",
  },
  buttonTitleStyle: {
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
