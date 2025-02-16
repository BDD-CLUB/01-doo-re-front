import { Flex } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';

import CategoryButton from '../Button/CategoryButton';
import { CategoryProps } from '../type';

const Category = ({ id, name, subCategory }: CategoryProps) => {
  const currentPath = usePathname();
  const teamPath = `/team/${id}`;

  return (
    <Flex direction="column" w="100%">
      <CategoryButton
        path={teamPath}
        text={name}
        isSelected={currentPath === teamPath}
        isTeam
        isTeamMatch={currentPath.startsWith(`${teamPath}/`)}
      />
      {subCategory.map((study) => {
        const studyPath = `${teamPath}/study/${study.id}`;

        return (
          <CategoryButton
            key={`study-${study.id}`}
            path={studyPath}
            text={study.name}
            isSelected={currentPath === studyPath}
            isStudy
          />
        );
      })}
    </Flex>
  );
};

export default Category;
