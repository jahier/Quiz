import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Game from '../Component/Game'

export default function DualModeGame(props) {
    const [Data, setData] = useState(props.route.params.data)
    console.log('props.route.params.data===========>>>>', Data);
    const navigation = () => {
        if (Data === '1') {
            props.navigation.navigate('PlayTyp', { data: Data })
        }
        else {
            props.navigation.navigate('WinningShow', { data: Data })

        }
    }
    return (
        <View style={{ flex: 1 }}>
            {
                Data === '1' &&
                <Game
                    prizeBtn={false}
                    onPress={() => navigation()}
                />
            }
            {
                Data === '2' &&
                <Game
                    prizeBtn={false}
                    onPress={() => navigation()}
                />
            }
            {
                Data === '3' &&
                <Game
                    prizeBtn={false}
                    onPress={() => navigation()}

                />
            }
        </View>
    )
}

const styles = StyleSheet.create({})