import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import React, {useRef} from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Modal1 from './Modal1';
import Modal2 from './Modal2';

export default () => {
  const modal1 = useRef(null);
  const modal2 = useRef(null);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <BottomSheetModalProvider>
        <SafeAreaView style={{flex: 1}}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Button title="Open" onPress={() => modal1.current?.present()} />
          </View>

          <Modal1 ref={modal1} onPress={() => modal2.current?.present()} />
          <Modal2 ref={modal2} />
        </SafeAreaView>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};
