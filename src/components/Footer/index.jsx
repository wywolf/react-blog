import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';
import { useIntl } from 'umi';

const Footer = () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: 'Leo出品',
  });
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'cnblog',
          title: '博客园',
          href: 'https://www.cnblogs.com/wyLeoKing/',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://wywolf.github.io/leo.github.io/',
          blankTarget: true,
        },
        {
          key: 'yuque',
          title: '语雀',
          href: 'https://www.yuque.com/u22414866',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
