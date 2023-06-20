import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';
import type { Navigation } from '@/types/index';
import styles from './actor-summary.css';

type Route = RouteProp<{ params: { detail: SummaryType } }>;

type SummaryType = {
  id: number;
  avatar?: string;
  name?: string;
  name_en?: string;
  gender?: string;
  birthday?: string;
  age?: string;
  country?: string;
  born_place?: string;
  professions?: Array<string>;
  constellation?: string;
  height?: string;
  blood_type?: string;
  summary?: string;
};

function ActorSummary(): React.ReactElement {
  const navigation: Navigation = useNavigation();
  const route: Route = useRoute();
  const { detail } = route.params;

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.page}>
        <View style={styles.summary}>
          <View style={styles.summaryContent}>
            <View style={styles.summaryTitle}>
              <Text style={styles.summaryTitleText}>基本信息</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.itemLabel}>中文名: </Text>
              <Text style={styles.itemValue}>{detail?.name}</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.itemLabel}>英文名: </Text>
              <Text style={styles.itemValue}>{detail?.name_en}</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.itemLabel}>性别: </Text>
              <Text style={styles.itemValue}>{detail?.gender}</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.itemLabel}>生日: </Text>
              <Text style={styles.itemValue}>{detail?.birthday}</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.itemLabel}>年龄: </Text>
              <Text style={styles.itemValue}>{detail?.age}</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.itemLabel}>国籍: </Text>
              <Text style={styles.itemValue}>{detail?.country}</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.itemLabel}>出生地: </Text>
              <Text style={styles.itemValue}>{detail?.born_place}</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.itemLabel}>职业: </Text>
              <Text style={styles.itemValue}>
                {detail?.professions?.join(',')}
              </Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.itemLabel}>星座: </Text>
              <Text style={styles.itemValue}>{detail?.constellation}</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.itemLabel}>身高: </Text>
              <Text style={styles.itemValue}>{detail?.height}</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.itemLabel}>血型: </Text>
              <Text style={styles.itemValue}>{detail?.blood_type}</Text>
            </View>
          </View>
          <View style={styles.summaryContent}>
            <View style={styles.summaryTitle}>
              <Text style={styles.summaryTitleText}>简介</Text>
            </View>
            <Text style={styles.descText}>{detail?.summary}</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.close}>
        <Pressable onPress={navigation.goBack} style={styles.closeView}>
          <Text style={styles.closeIcon}>{'\ue612'}</Text>
        </Pressable>
      </View>
    </>
  );
}

export default ActorSummary;
