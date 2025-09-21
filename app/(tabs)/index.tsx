import { images, offers } from "@/constants";

import CartButton from "@/components/CartButton";
import cn from "clsx";
import { Fragment } from "react";
import { FlatList, Image, Pressable, Text, TouchableOpacity, View, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";
export default function Index() {
  return (
     <SafeAreaView className="flex-1 bg-white">
      
      <FlatList data={offers}
      renderItem={({item,index})=>{
        const isEven=index%2===0;
        return (
          <View>
            <Pressable className={cn("offer-card",isEven? "flex-row-reverse":"flex-row")} style={{backgroundColor:item.color}}
            android_ripple={{color:"#fffff22"}}
            >
              {({pressed})=>(
                <Fragment>
                  <View className={"h-full w-1/2"}>
                  <Image source={item.image} className={"size-full"} resizeMode="contain" />

                  </View>
                  <View className={cn("offer-card__info",isEven ? "pl-10" : "pr-10")}>
                    <Text className={"text-3xl font-quicksand-bold text-white"}>
                      {item.title} 
                    </Text>
                    <Image source={images.arrowRight}
                    className="size-10"
                    resizeMode="contain"
                    tintColor={"#FFFFFF"}
                    />

                  </View>
                </Fragment>
              )}

            </Pressable>
          </View>
        )
      }}
      contentContainerClassName="pb-28 px-5 my-3"
      ListHeaderComponent={()=>{
        return <View className="flex-between flex-row ">
        <View className="flex-start">
          <Text className="text-primary text-base font-quicksand-bold">DELIVER TO</Text>
         <TouchableOpacity className="flex-center flex-row">
          <Text className="text-base font-quicksand-bold text-dark-100">Croatia</Text>
          <Image  source={images.arrowDown} className="size-3" resizeMode="contain"/>
        </TouchableOpacity>
        </View>
        
        <CartButton/>

      </View>
      }}
      />
     </SafeAreaView>
  );
}
