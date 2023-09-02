
import { StyleSheet, } from 'react-native'
import React,{useRef} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SubData from '../Component/SubData';

export default function DuoMode(props) {
    const bottomSheetRef = useRef();

    const openBottomSheet = () => {
        bottomSheetRef.current.open();
    };
    const closeBottomSheet = () => {
        bottomSheetRef.current.close();
    };
    
    return (
        <SafeAreaView style={styles.mainContent}>
            <SubData onPress={()=>openBottomSheet()}
            navigation={() => props.navigation.navigate('PlayTyp')}
            bottomSheetRef={bottomSheetRef}
            closeBottomSheet={closeBottomSheet}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContent: {
        flex: 1,
        backgroundColor: 'white'
    },

})