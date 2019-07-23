import React from "react";
//import { Header } from "react-navigation";
import { View, Text, StyleSheet, Platform, TouchableOpacity } from "react-native";
//import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import { withNavigation } from 'react-navigation'

import { connect } from 'react-redux';
import * as sidebarActions from '../SideBar/actions';

const Header = props => {
  return (
    <View
      style={{
        height: 56,
        marginTop: Platform.OS == "ios" ? 30 : 0
      }}
    >
        <View>
            <TouchableOpacity onPress={() => { props.setSidebarState(true)}}>
                <View style={styles.drawerItem}>
                    <Icon
                        name={Platform.OS === "android" ? "md-menu" : "ios-menu"}
                        size={30}
                        color="#111"
                        //style={styles.drawerItemIcon}
                    />
                </View>
            </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      backgroundColor: "white",
      flex: 1
    },
    drawerItem: {
      flexDirection: "row",
      alignItems: "center",
      padding: 10,
      backgroundColor: "#eee"
    },
    drawerItemIcon: {
      marginRight: 10
    }
  });

const mapDispatchToProps = dispatch => {
    return {
        setSidebarState: (state) => dispatch(sidebarActions.setSidebarState(state))
    };
};

export default connect(null, mapDispatchToProps)(withNavigation(Header));