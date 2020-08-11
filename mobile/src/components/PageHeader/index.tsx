import React from "react";
import { View, Image, Text } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import backIcon from "../../assets/images/icons/back.png";
import logoImg from "../../assets/images/logo.png";

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

interface PageHeaderProps {
  title: string;
  headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  headerRight,
  children,
}) => {
  const { navigate } = useNavigation();
  const handleGoback = () => {
    navigate("Landing");
  };

  return (
    <View style={styles.containter}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoback}>
          <Image source={backIcon} resizeMode="contain"></Image>
        </BorderlessButton>
        <Image source={logoImg} resizeMode="contain"></Image>
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {headerRight}
      </View>
      {children}
    </View>
  );
};

export default PageHeader;
