import {  SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE
  const { isOpen, onOpen, onClose } = useDisclosure();

  // TODO SELECTED IMAGE URL STATE
  const [imageUrlSelected,  setImageUrlSelected] = useState<string>('');

  // TODO FUNCTION HANDLE VIEW IMAGE
  function handleViewImage(url: string){
    setImageUrlSelected(url);
    onOpen();
  }

  return (
    <>
      {/* TODO CARD GRID */}
      <SimpleGrid columns={3} spacing="50px">
        {
          cards.map(card => (
            <Card data={card} viewImage={ ()=> handleViewImage(card.url) }  />
          ))
        }
      </SimpleGrid>
      {/* TODO MODALVIEWIMAGE */}
      {
        isOpen && (
          <ModalViewImage isOpen onClose={onClose} imgUrl={imageUrlSelected}/>
        )
      }
    </>
  );
}
