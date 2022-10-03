import React from 'react'
import { Pressable, View, Modal, StyleSheet } from 'react-native'

/**
 * @param {object} params
 * @param {boolean} params.open
 * @param {() => void} params.onClose
 * @param {React.ReactNode} children
 */
const ModalMenu = ({ open, onClose, children }) => {
  return (
    <Modal visible={open} animationType="fade" transparent statusBarTranslucent>
      <Pressable style={styles.root} onPress={onClose}>
        <View style={styles.contents}>
          {children}
        </View>
      </Pressable>
    </Modal>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white'
  },
  contents: {
    borderWidth: 1,
    borderColor: 'white'
  }
})

export default ModalMenu