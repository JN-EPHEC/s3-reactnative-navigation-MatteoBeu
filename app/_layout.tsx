import "react-native-reanimated";
import React from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";

type ShopStackParamList = {
  ProductList: undefined;
  ProductDetail: { product: { id: string; title: string; description: string } };
};

type ProductListProps = NativeStackScreenProps<ShopStackParamList, "ProductList">;

type ProductDetailProps = NativeStackScreenProps<ShopStackParamList, "ProductDetail">;

const PRODUCTS = [
  { id: "1", title: "Laptop", description: "High-performance laptop" },
  { id: "2", title: "Mouse", description: "Wireless optical mouse" },
  { id: "3", title: "Keyboard", description: "Mechanical keyboard" },
];

function ProductListScreen({ navigation }: ProductListProps) {
  return (
    <FlatList
      data={PRODUCTS}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable
          onPress={() =>
            navigation.navigate("ProductDetail", { product: item })
          }
          style={{
            padding: 20,
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
          }}
        >
          <Text style={{ fontSize: 18 }}>{item.title}</Text>
        </Pressable>
      )}
    />
  );
}

function ProductDetailScreen({ route }: ProductDetailProps) {
  const { product } = route.params;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>{product.title}</Text>
      <Text style={{ fontSize: 16 }}>{product.description}</Text>
    </View>
  );
}


const ShopStack = createNativeStackNavigator<ShopStackParamList>();

function ShopStackScreen() {
  return (
    <ShopStack.Navigator>
      <ShopStack.Screen name="ProductList" component={ProductListScreen} options={{ title: "Shop" }} />
      <ShopStack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: "Product Details" }} />
    </ShopStack.Navigator>
  );
}

// Cart Screen
function MyCartScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Your Shopping Cart is empty.</Text>
    </View>
  );
}

// Bottom Tab Navigator
const Tab = createBottomTabNavigator();

export default function RootLayout() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#FF5733",  // Active tab color
        tabBarInactiveTintColor: "#007AFF", // Inactive tab color
      }}
    >
      <Tab.Screen
        name="Shop"
        component={ShopStackScreen}
        options={{
          tabBarLabel: "Shop",
          tabBarIcon: () => <Text style={{ fontSize: 20 }}>🛒</Text>,
        }}
      />
      <Tab.Screen
        name="MyCart"
        component={MyCartScreen}
        options={{
          tabBarLabel: "My Cart",
          tabBarIcon: () => <Text style={{ fontSize: 20 }}>🛍️</Text>,
        }}
      />
    </Tab.Navigator>
  );
}
