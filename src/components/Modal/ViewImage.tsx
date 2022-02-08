import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  Image,
  Link,
  ModalBody,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size="4xl"
    >
      <ModalOverlay />

      <ModalContent
        bg="pGray.800"
        mx="auto"
        w="auto"
        h="auto"
        maxW="900px"
        maxH="600px"
      >

        <ModalBody p="0" >
          <Image src={imgUrl} maxW="900px" maxH="600px"/>
        </ModalBody>

        <ModalFooter bg="pGray.800" h="2rem" py="20px" borderBottomRadius="5px">
          <Link href={imgUrl} isExternal fontSize="1rem" mr="auto">
            Abrir original
          </Link>
        </ModalFooter>

      </ModalContent>
    </Modal>
  )
}
