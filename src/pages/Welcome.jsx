import { PageContainer } from '@ant-design/pro-layout';
import { Alert, Card } from 'antd';
import { useIntl } from 'umi';
import styles from './Welcome.less';
import navData from './navData';
const gridStyle = {
    width: '12.5%',
    textAlign: 'center',
    fontSize: '16px',
    cursor: 'pointer',
};



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
                    {navData.map((item) => {
                        return (
                            <Card.Grid style={gridStyle} key={item.index} onClick={() => {
                                window.open(item.url, '_blank');
                            }}>
                                <a href={item.url} target={'_blank'} rel="noopener noreferrer" title={item.title}>
                                    {item.name}
                                </a>
                            </Card.Grid>
                        );
                    })}
                    {/* <Card.Grid hoverable={false} style={gridStyle}>
            <a href="http://ilxdh.com/cat/173" target={'_blank'} rel="noreferrer">
              龙轩导航
            </a>
          </Card.Grid> */}
                </Card>
            </Card>
            <br />
            <Card>
                <Alert
                    message={intl.formatMessage({
                        id: 'pages.music',
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
                <div className={styles.page}>
                    <meting-js auto="https://music.163.com/#/discover/toplist?id=3778678" />
                </div>
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
