import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { feConfigs } from '@/web/common/system/staticData';
import { serviceSideProps } from '@/web/common/utils/i18n';
import { useRouter } from 'next/router';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Ability from './components/Ability';
import Choice from './components/Choice';
import Footer from './components/Footer';
import Loading from '@/components/Loading';

const Home = ({ homeUrl = '/' }: { homeUrl: string }) => {
  const router = useRouter();

  if (homeUrl !== '/') {
    router.replace(homeUrl);
  }

  useEffect(() => {
    router.prefetch('/app/list');
    router.prefetch('/login');
  }, [router]);

  return (
    <>
      <Box id="home" bg={'myWhite.600'} h={'100vh'} overflowY={'auto'} overflowX={'hidden'}>
        <Box maxW={'1200px'} pt={'70px'} m={'auto'}>
          <p>
            欢迎来到我们的产品！这是一个强大的平台，允许你创建自己的AI助手。你可以定制AI助手的功能，使其满足你的特定需求。无论是日常任务的自动化，还是复杂的数据分析，我们的产品都能帮助你轻松实现。
          </p>
          <Intro />
        </Box>
      </Box>
      {homeUrl !== '/' && <Loading bg={'white'} />}
    </>
  );
};

export async function getServerSideProps(content: any) {
  return {
    props: {
      ...(await serviceSideProps(content)),
      homeUrl: process.env.HOME_URL || '/'
    }
  };
}

export default Home;
