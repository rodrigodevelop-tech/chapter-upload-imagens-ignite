import { Button } from "@chakra-ui/react";

type ButtonLoadMoreProps = {
  fetchNextPage: () => void;
  isFetchingNextPage: boolean;
}

export default function ButtonLoadMore({
  fetchNextPage,
  isFetchingNextPage
}: ButtonLoadMoreProps){
  return (
    <Button
      onClick={()=> fetchNextPage()}
    >
      {
        isFetchingNextPage ?
        'Carregando...'
        :
        'Carregar mais'
      }
    </Button>
  )
}
