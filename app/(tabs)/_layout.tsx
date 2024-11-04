import { Tabs } from "expo-router"
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { COLORS } from "../../src/config/theme/colors";
import useFavoritesStore from "../../src/presentation/store/favorites.store";

const TabsLayout = () => {

    const favorites = useFavoritesStore(state => state.favorites)

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: COLORS.accent,
                tabBarStyle: {
                    backgroundColor: "#010409"
                },
                headerTitle: "",
                headerStyle: {
                    backgroundColor: "#010409",
                }
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} />,
                }}
            />

            <Tabs.Screen
                name="favorites"
                options={{
                    title: `Favorites${favorites.length > 0 ? ` (${favorites.length})` : ''}`,
                    tabBarIcon: ({ color }) => <AntDesign name="hearto" size={24} color={color} />,
                }}
            />
        </Tabs>
    )
}
export default TabsLayout
