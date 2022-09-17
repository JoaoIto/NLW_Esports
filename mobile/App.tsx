/* rnbc Para estrutura padrão e rnso para estilização*/

import { StatusBar } from 'react-native';
import { Background } from './src/components/Background';
import { Home } from './src/screens/Home'
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_900Black
} from '@expo-google-fonts/inter'
import { Loading } from './src/components/Loading';
export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_900Black
  });
  return (
    <Background>

      <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
      />
      {fontsLoaded ? <Home/> : <Loading/>}
    </Background>
  );
}
