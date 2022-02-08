import { Button, Box,Image,Text } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';
import ButtonLoadMore from '../components/Button/ButtonLoadMore';

type Image = {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface GetImagesAxiosResponse {
  after?: string;
  data: Image[];
}

export default function Home(): JSX.Element {

  const fetchImages = async ({ pageParam = null }) : Promise<GetImagesAxiosResponse> => {
    const { data } = await api.get('/api/images',{
      params: {
        after: pageParam
      }
    });
    return data;
  };

  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'images',
    fetchImages,
    {
      getNextPageParam: (lastPage, pages ) => lastPage.after || null ,  // TODO GET AND RETURN NEXT PAGE PARAM
    }
  );

  const formattedData = useMemo(() => {
    const formatted = data?.pages.flatMap((array)=> {
      return array.data?.flat();
    });

    return formatted;
  }, [data]);

  // TODO RENDER LOADING SCREEN
  if(isLoading && !isError){
    return (
      <>
        <Header />
        <Loading />
      </>
    )
  }

  // TODO RENDER ERROR SCREEN
  if(isError && !isLoading){
    return (
      <>
        {/* <Header /> */}
        <Error />
      </>
    )
  }

  return (
    <>
      <Header />

      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />
        {/* TODO RENDER LOAD MORE BUTTON IF DATA HAS NEXT PAGE */}
      </Box>

      {
        hasNextPage &&
        (
          <Box maxW={1120} px={20} mx="auto" mb={20}>
            <ButtonLoadMore  fetchNextPage={fetchNextPage} isFetchingNextPage={isFetchingNextPage}/>
          </Box>
        )

      }
    </>
  );
}
