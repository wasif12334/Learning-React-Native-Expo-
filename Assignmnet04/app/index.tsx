import { ScrollView, View, Image, Text  } from "react-native";
import { router ,Link} from "expo-router";
import styles from "./style";

export default function Home() {
  return (
    <ScrollView horizontal style={styles.homeContainer}>
      
      <View style={styles.slideBox}>
        <Image
          source={{ uri: "" }}
          style={styles.slideImg}
        />
        <Text style={styles.slideText}>Slide 1</Text>
        <Link style={styles.navBtn} href="/about">
              Go to About
            </Link>

      </View>

      <View style={styles.slideBox}>
        <Image
          source={{ uri: "" }}
          style={styles.slideImg}
        />
        <Text style={styles.slideText}>Slide 2</Text>
       <Link style={styles.navBtn} href="/services">
          Go to Services
        </Link>

      </View>

      <View style={styles.slideBox}>
        <Image
          source={{ uri: "" }}
          style={styles.slideImg}
        />
        <Text style={styles.slideText}>Slide 3</Text>
        <Link style={styles.navBtn} href="/contact">
                        Go to Contact
        </Link>

      </View>

    </ScrollView>
  );
}
