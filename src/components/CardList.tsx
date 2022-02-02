import { Badge, Box, Grid, GridItem, Image, SimpleGrid, Text, useDisclosure } from '@chakra-ui/react';
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

  // TODO SELECTED IMAGE URL STATE

  // TODO FUNCTION HANDLE VIEW IMAGE

  return (
    <>
      {/* TODO CARD GRID */}

      <Grid templateColumns="repeat(3,1fr)">
        {
          cards.map(card => (
            <GridItem w="293px" h="290px">
              <Box w="293px" overflow="hidden" bg="pGray.800" borderRadius="6px">
                <Image
                  src={card.url}
                  alt={card.title}
                  maxW="293px"
                  // maxH="192px"
                />

                <Box
                  my="5"
                  mx="4"
                  as="h4"
                  fontWeight="bold"
                  lineHeight="20px"
                  fontSize="25px"
                  color="pgray.50"
                >
                  {card.title}
                </Box>

                <Box
                  my="4"
                  mx="4"
                  as="h4"
                  fontWeight="normal"
                  lineHeight="21px"
                  fontSize="18px"
                  color="pgray.100"
                >
                  {card.description}
                </Box>

              </Box>
            </GridItem>
          ))
        }
      </Grid>

      {/* TODO MODALVIEWIMAGE */}
    </>
  );
}
