import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Game from '../Component/Game'

export default function DualModeGame(props) {
    const [Data, setData] = useState(props.route.params.data)
    console.log('props.route.params.data===========>>>>', Data);

    return (
        <View style={{ flex: 1 }}>
            {
                Data === '1' &&
                <Game
                    prizeBtn={false}
                    onPress={() => props.navigation.navigate('PlayTyp',{data:'1'})}
                />
            }
            {
                Data === '2' &&
                <Game
                    prizeBtn={true}
                    onPress={() => props.navigation.navigate('PlayTyp',{data:'2'})}
                />
            }
            {
                Data === '3' &&
                <Game
                    prizeBtn={true}
                    onPress={() => props.navigation.navigate('PlayTyp',{data:'3'})}

                />
            }
        </View>
    )
}

const styles = StyleSheet.create({})