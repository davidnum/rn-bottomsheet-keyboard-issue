import React, {forwardRef, useRef} from 'react';
import {
  BottomSheetScrollView,
  BottomSheetModal,
  useBottomSheetDynamicSnapPoints,
  BottomSheetBackdrop,
  BottomSheetTextInput,
  TouchableOpacity,
} from '@gorhom/bottom-sheet';
import {Button, Text} from 'react-native';

const initialSnapPoints = ['CONTENT_HEIGHT'];

export default forwardRef(({onPress}, ref) => {
  const input = useRef(null);

  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);

  const _onPress = () => {
    input.current.blur();
    onPress();
  };

  return (
    <BottomSheetModal
      ref={ref}
      index={0}
      keyboardBlurBehavior="restore"
      backdropComponent={props => (
        <BottomSheetBackdrop
          {...props}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
        />
      )}
      snapPoints={animatedSnapPoints}
      handleHeight={animatedHandleHeight}
      contentHeight={animatedContentHeight}>
      <BottomSheetScrollView
        keyboardShouldPersistTaps="handled"
        onLayout={handleContentLayout}
        style={{height: 300, padding: 16}}>
        <Text style={{fontSize: 25, marginBottom: 16}}>Modal 1</Text>
        <BottomSheetTextInput
          ref={input}
          placeholder="Some input"
          style={{borderWidth: 1, padding: 8}}
        />
        <Button title="Open Modal 2" onPress={_onPress} />
      </BottomSheetScrollView>
    </BottomSheetModal>
  );
});
