import { Stack } from "expo-router";


export default function Layout() {
return (
<Stack>
<Stack.Screen name="index" options={{ title: "Home" }} />
<Stack.Screen name="about/index" options={{ title: "About" }} />
<Stack.Screen name="services/index" options={{ title: "Services" }} />
<Stack.Screen name="contact/index" options={{ title: "Contact" }} />
</Stack>
);
}