import { Box, Flex, Button, Image } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { feConfigs } from '@/web/common/system/staticData';
import { useSystemStore } from '@/web/common/system/useSystemStore';
import MyIcon from '@/components/Icon';
import { useRouter } from 'next/router';

const Intro = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const { isPc, gitStar } = useSystemStore();
  const [showVideo, setShowVide] = useState(false);

  return (
    <Flex flexDirection={'column'} pt={['24px', '50px']} alignItems={'center'} userSelect={'none'}>
      <Flex zIndex={1} flexDirection={['column', 'row']} mt={[5, 8]}>
        <Button
          fontSize={['xl', '3xl']}
          h={['38px', 'auto']}
          borderRadius={'xl'}
          py={[2, 3]}
          w={'150px'}
          onClick={() => router.push(`/login`)}
        >
          {t('home.Login')}
        </Button>
      </Flex>
    </Flex>
  );
};

export default Intro;
