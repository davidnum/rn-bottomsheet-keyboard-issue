import React, {forwardRef} from 'react';
import {
  BottomSheetView,
  BottomSheetModal,
  useBottomSheetDynamicSnapPoints,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import {Text} from 'react-native';

const initialSnapPoints = ['CONTENT_HEIGHT'];

export default forwardRef((_, ref) => {
  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);

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
      <BottomSheetView
        onLayout={handleContentLayout}
        style={{height: 150, padding: 16}}>
        <Text style={{fontSize: 25, marginBottom: 16}}>Modal 2</Text>
      </BottomSheetView>
    </BottomSheetModal>
  );
});
