import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';

//高さを判断して値設定
const STATUSBAR_HEIGHT = Platform.OS == 'ios' ? 20 : StatusBar.crrentHeight;


export default function App() {
  return (
    <View style={styles.container}>
      <Text>aaaaaaaaaaaaaaaaaaOpen up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //不使用スタイルを削除
    //alignItems: 'center',
    //justifyContent: 'center',
    //paddingtopにステータスバーの高さ指定して下にずらす
    paddingTop: STATUSBAR_HEIGHT,
  },
});
