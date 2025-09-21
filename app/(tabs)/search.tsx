import CartButton from "@/components/CartButton";
import MenuItem from "@/components/MenuItem";
import { images } from "@/constants";
import cn from "clsx";
import React from "react";
import {
    FlatList,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const data = [
  {
    id: 1,
    image: images.burgerTwo,
  },
  {
    id: 2,
    image: images.pizzas,
  },
  {
    id: 3,
    image: images.burgerTwo,
  },
  {
    id: 4,
    image: images.burgerTwo,
  },
  {
    id: 5,
    image: images.burgerTwo,
  },
  {
    id: 6,
    image: images.burgerTwo,
  },
];
const Search = () => {
  return (
    <SafeAreaView className="bg-white-100 flex-1 h-full">
      <FlatList
        data={data}
        renderItem={({ item, index }) => {
          const renderItem = index % 2 === 0;
          return (
            <View
              className={cn(
                "flex-1 max-w-[48%] ",
                renderItem ? "mt-0" : "mt-10"
              )}
            >
              <View
                className={cn(
                  "bg-white shadow-lg rounded-3xl gap-2.5 justify-end items-center m-4 pb-4"
                )}
              >
                <Image className="size-28 -mt-10" source={item.image} />
                <Text className="font-quicksand-bold">Wendy's Burger</Text>
                <Text className="font-quicksand-semibold text-gray-200">
                  From $10.4
                </Text>
                <TouchableOpacity className="flex-1 flex-row justify-center items-center gap-2">
                  <Image source={images.plus} className="size-4" />
                  <Text className="text-primary font-quicksand-bold">
                    Add to cart
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
        numColumns={2}
        contentContainerClassName="gap-7 px-5 pb-32"
        ListHeaderComponent={
          <View className="my-3 bg-white-100 gap-5">
            <View className="flex-1 justify-between flex-row">
              <View className="gap-0">
                <Text className="text-primary text-sm font-quicksand-bold">
                  SEARCH
                </Text>
                <View className="flex-row justify-center items-center gap-2">
                  <Text className="font-quicksand-bold text-base">
                    Find your favourite
                  </Text>
                  <Image
                    source={images.arrowDown}
                    className="size-3"
                    resizeMode="contain"
                  />
                </View>
              </View>
              <CartButton />
            </View>
            <View className="searchbar px-4 ">
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder={"Search for any food"}
                placeholderTextColor={"#A0A0A0"}
                className={cn(" flex-1 p-4 font-quicksand-semibold")}
              />
              <Image
                source={images.search}
                tintColor={"#5d5f5d"}
                className="size-5 pr-5"
                resizeMode="contain"
              />
            </View>
            <MenuItem/>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default Search;
