'use client';

import { Flex, Image, Card, IconButton, useDisclosure } from '@chakra-ui/react';
import { BiArrowBack } from 'react-icons/bi';

import CurriculumCardData from '@/mocks/curriculum';

import CurriculumItem from './CurriculumItem';
import ActionModal from '../../../components/Modal/ActionModal';
import CurriculumModal from '../CurriculumModal';

const CurriculumCard = () => {
  const { isOpen: isActionModalOpen, onOpen: onActionModalOpen, onClose: onActionModalClose } = useDisclosure();

  return (
    <Flex direction="column" w="100%">
      <IconButton
        color="white"
        bg="green_dark"
        _hover={{ bg: 'green_dark' }}
        aria-label=""
        icon={<BiArrowBack />}
        onClick={onActionModalOpen}
        size="icon_sm"
      />
      <Flex h={{ base: '30vh', lg: '35vh', '2xl': '40vh' }}>
        <Image
          display={{ base: 'none', md: 'block' }}
          w={{ base: '30vh', lg: '35vh', '2xl': '40vh' }}
          borderTopRightRadius="0"
          borderTopLeftRadius="2xl"
          borderBottomLeftRadius="2xl"
          borderBottomRightRadius="0"
          alt="curriculum card"
          src="/images/curriculumCrops/carrot_5.png"
        />
        <Card
          direction="row"
          w="100%"
          py="4"
          pr="1"
          borderTopRightRadius="2xl"
          borderTopLeftRadius={{ base: '2xl', md: '0' }}
          borderBottomLeftRadius={{ base: '2xl', md: '0' }}
          borderBottomRightRadius="2xl"
        >
          <Flex className="scroll" direction="column" gap="3" overflowY="auto" w="100%">
            {CurriculumCardData.map((data) => {
              return (
                <CurriculumItem
                  key={data.id}
                  id={data.id}
                  name={data.name}
                  itemOrder={data.itemOrder}
                  isCompleted={data.isCompleted}
                />
              );
            })}
          </Flex>
        </Card>
      </Flex>
      <ActionModal
        isOpen={isActionModalOpen}
        onClose={onActionModalClose}
        title="커리큘럼"
        subButtonText="이전"
        onSubButtonClick={() => {
          onActionModalClose();
        }}
        mainButtonText="다음"
        onMainButtonClick={() => {
          onActionModalClose();
        }}
      >
        <CurriculumModal />
      </ActionModal>
    </Flex>
  );
};

export default CurriculumCard;

// 'use client';

// import { Button, Flex, Image, Card, IconButton, useDisclosure } from '@chakra-ui/react';
// import { MdOutlineArrowForwardIos } from 'react-icons/md';

// import CurriculumCardData from '@/mocks/curriculum';

// import CurriculumItem from './CurriculumItem';
// import ActionModal from '../../../components/Modal/ActionModal';
// import CurriculumModal from '../CurriculumModal';

// const CurriculumCard = () => {
//   const { isOpen: isActionModalOpen, onOpen: onActionModalOpen, onClose: onActionModalClose } = useDisclosure();

//   return (
//     <Flex direction="column" w="100%">
//       {/* <Button
//         leftIcon={
//           <IconButton
//             color="white"
//             bg="green_dark"
//             _hover={{ bg: 'green_dark' }}
//             aria-label=""
//             icon={<MdOutlineArrowForwardIos />}
//             size="icon_sm"
//           />
//         }
//         onClick={onActionModalOpen}
//         variant="link"
//       >
//         편집 모드
//       </Button> */}

//       <Flex h={{ base: '30vh', lg: '35vh', '2xl': '40vh' }}>
//         <Image
//           display={{ base: 'none', md: 'block' }}
//           w={{ base: '30vh', lg: '35vh', '2xl': '40vh' }}
//           borderTopRightRadius="0"
//           borderTopLeftRadius="2xl"
//           borderBottomLeftRadius="2xl"
//           borderBottomRightRadius="0"
//           alt="curriculum card"
//           src="/images/curriculumCrops/carrot_5.png"
//         />
//         <Card
//           direction="row"
//           w="100%"
//           py="4"
//           pr="1"
//           borderTopRightRadius="2xl"
//           borderTopLeftRadius={{ base: '2xl', md: '0' }}
//           borderBottomLeftRadius={{ base: '2xl', md: '0' }}
//           borderBottomRightRadius="2xl"
//         >
//           <Flex className="scroll" direction="column" gap="3" overflowY="auto" w="100%">
//             {CurriculumCardData.map((data) => {
//               return (
//                 <CurriculumItem
//                   key={data.id}
//                   id={data.id}
//                   name={data.name}
//                   itemOrder={data.itemOrder}
//                   isCompleted={data.isCompleted}
//                 />
//               );
//             })}
//           </Flex>
//         </Card>
//       </Flex>
//       <ActionModal
//         isOpen={isActionModalOpen}
//         onClose={onActionModalClose}
//         title="커리큘럼"
//         subButtonText="이전"
//         onSubButtonClick={() => {
//           onActionModalClose();
//         }}
//         mainButtonText="다음"
//         onMainButtonClick={() => {
//           onActionModalClose();
//         }}
//       >
//         <CurriculumModal />
//       </ActionModal>
//     </Flex>
//   );
// };

// export default CurriculumCard;
