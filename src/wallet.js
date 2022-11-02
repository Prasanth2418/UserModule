import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { CashIcon } from "react-native-heroicons/solid";
import CreditCardDisplay from "react-native-credit-card-display";
import { TrashIcon } from "react-native-heroicons/outline";
import React from "react";

const Wallet = () => {
  return (
    <View style={styles.conatianer}>
      <View>
        <CashIcon
          color="black"
          size={30}
          style={{ marginTop: 40, marginLeft: 10 }}
        />
        <Text style={styles.mainConatiner}>Wallet & cards</Text>
      </View>
      <View style={{ borderBottomWidth: 0.6, marginTop: -10 }} />

      <View>
        <Text style={{ position: "relative", left: 20, top: 25, fontSize: 20 }}>
          ICICI Bank{" "}
        </Text>
        <TouchableOpacity>
          <View style={{ position: "relative", left: "65%", top: 5 }}>
            <TrashIcon color="red"  />
          </View>
        </TouchableOpacity>

        <ScrollView
          horizontal={true}
          style={{ position: "relative", left: 10, top: 10, right: 10 }}
        >
          <CreditCardDisplay
            number={4242424242424242}
            cvc={456}
            expiration="04/21"
            name="John J. Doe"
            since="2004"
          />
        </ScrollView>
      </View>
      <View style={{ borderBottomWidth: 0.6, marginTop: 20 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  conatianer: {
    margin: 0,
    padding: 0,
  },
  mainConatiner: {
    position: "relative",
    marginLeft: 45,
    top: -25,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Wallet;
