import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';

import styles from './nearbyjobs.style';
import { COLORS } from '../../../constants';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import useFetch from '../../../hook/useFetch';

const Nearbyjobs = () => {
  const router = useRouter();

  const { data, isLoading, error } = useFetch(
    'search', {
      query: 'React developer',
      num_pages: 1
    });

    console.log(data);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} /> 
        ) : error ? (
          <Text>Something went wrong</Text>
        ) :
          <FlatList 
            data={[1, 2, 3, 4, 5, 6, 7, 8]}
            renderItem={({ item }) => (
              <PopularJobCard 
                item={item}
              />
            )}
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        }
      </View>
    </View>
  )
}

export default Nearbyjobs