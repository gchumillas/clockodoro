import React from 'react'
import { Pressable, View, Modal, StyleSheet } from 'react-native'
import { GAP, BORDER_RADIUS, PALETTE } from '~/src/constants'

/**
 * @param {object} params
 * @param {boolean} params.open
 * @param {() => void} params.onClose
 * @param {React.ReactNode} children
 */
const ModalMenu = ({ open, onClose, children }) => {
  const childs = React.Children.toArray(children)

  return (
    <Modal visible={open} animationType="fade" transparent statusBarTranslucent>
      <Pressable style={styles.root} onPress={onClose}>
        <View style={styles.contents}>
          {childs.map((child, i) => (
            <View
              key={i}
              style={{
                ...styles.item,
                borderBottomWidth: i < childs.length - 1 ? 1 : 0
              }}
            >
              {child}
            </View>
          ))}
        </View>
      </Pressable>
    </Modal>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  contents: {
    backgroundColor: PALETTE.white,
    paddingVertical: 0.5 * GAP,
    borderRadius: BORDER_RADIUS
  },
  item: {
    borderBottomColor: PALETTE.black,
    borderBottomWidth: 1
  }
})

export default ModalMenu