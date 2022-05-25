import { PageContainer } from '@ant-design/pro-layout';
import { Alert, Card, Typography } from 'antd';
import { useIntl } from 'umi';
import styles from './Welcome.less';

const gridStyle = {
  width: '25%',
  textAlign: 'center',
  fontSize: '16px',
};
const CodePreview = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

const Welcome = () => {
  const intl = useIntl();
  return (
    <PageContainer>
      <Card>
        <Alert
          message={intl.formatMessage({
            id: 'pages.nav',
            defaultMessage: 'Faster and stronger heavy-duty components have been released.',
          })}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />
        <Card title="">
          <Card.Grid style={gridStyle}>
            <a href="http://ilxdh.com/cat/173" target={'_blank'} rel="noreferrer">
              龙轩导航
            </a>
          </Card.Grid>
          {/* <Card.Grid hoverable={false} style={gridStyle}>
            https://limestart.cn/
          </Card.Grid> */}
          <Card.Grid style={gridStyle}>
            <a href="https://limestart.cn/" target={'_blank'} rel="noreferrer">
              青柠导航
            </a>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <a href="https://www.bookmarkearth.com/" target={'_blank'} rel="noreferrer">
              书签地球
            </a>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <a href="https://xydh.fun/xungeer" target={'_blank'} rel="noreferrer">
              每天华尔街
            </a>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <a href="https://www.52pojie.cn/" target={'_blank'} rel="noreferrer">
              吾爱破解
            </a>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <a href="https://ikuuu.co/user#" target={'_blank'} rel="noreferrer">
              Ikuuu
            </a>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <a href="https://www.macat.vip/user" target={'_blank'} rel="noreferrer">
              马克喵
            </a>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <a href="https://www.macz.com/" target={'_blank'} rel="noreferrer">
              macz
            </a>
          </Card.Grid>
        </Card>
      </Card>
      {/* <Card>
        <Alert
          message={intl.formatMessage({
            id: 'pages.welcome.alertMessage',
            defaultMessage: 'Faster and stronger heavy-duty components have been released.',
          })}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />
        <Typography.Text strong>
          <FormattedMessage id="pages.welcome.advancedComponent" defaultMessage="Advanced Form" />{' '}
          <a
            href="https://procomponents.ant.design/components/table"
            rel="noopener noreferrer"
            target="__blank"
          >
            <FormattedMessage id="pages.welcome.link" defaultMessage="Welcome" />
          </a>
        </Typography.Text>
        <CodePreview>yarn add @ant-design/pro-table</CodePreview>
        <Typography.Text
          strong
          style={{
            marginBottom: 12,
          }}
        >
          <FormattedMessage id="pages.welcome.advancedLayout" defaultMessage="Advanced layout" />{' '}
          <a
            href="https://procomponents.ant.design/components/layout"
            rel="noopener noreferrer"
            target="__blank"
          >
            <FormattedMessage id="pages.welcome.link" defaultMessage="Welcome" />
          </a>
        </Typography.Text>
        <CodePreview>yarn add @ant-design/pro-layout</CodePreview>
      </Card> */}
    </PageContainer>
  );
};

export default Welcome;
