import React from 'react';
import { StyleSheet, View } from 'react-native';
import UserStore from './store/UserStore';
import { Avatar, Badge } from 'react-native-elements';

interface Props {
  uri: string;
  size: number;
  badgeValue?: string;
  badgeStatus?: "primary" | "success" | "warning" | "error";
  onPress?: () => void;
  store: UserStore;
}

/**
 * Please be careful with her, it took way too long to get this to perfectly line up.
 */
export default (props: Props) => {
  const { badgeValue, badgeStatus, onPress, size, uri } = props;

  return (
    <View style={{ height: size, width: size + (badgeValue ? 10 : 0) }}>
      <Avatar
        rounded
        source={{ uri }}
        avatarStyle={{ alignContent: 'center', height: size, width: size, borderRadius: size }}
        containerStyle={{ height: size, width: size }}
        onPress={onPress}
      />
      { badgeStatus && (badgeValue ?
        (<Badge
          value={badgeValue}
          status={badgeStatus}
          textStyle={{ fontFamily: 'aria', height: size / 5 }}
          badgeStyle={{ height: size / 3, borderRadius: size / 5 }}
          containerStyle={{ position: 'absolute', top: 0, right: 0, alignContent: 'center', justifyContent: 'center' }}
        />) :
        (<Badge
          status={badgeStatus}
          badgeStyle={{ height: size / 5, width: size / 5, borderRadius: size / 5 }}
          containerStyle={{ position: 'absolute', top: size / 32, right: size / 32 }}
        />))
      }
    </View>
  );
};
