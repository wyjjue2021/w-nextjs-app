import React from 'react';
import { Row, Col, Button } from 'antd';
import { observer, inject } from 'mobx-react';
import starIcon from '@/assets/star-icon.png';
import nostarIcon from '@/assets/nostar-icon.png';
import lineIcon from '@/assets/main/优质专线.png';
import recommendIcon from '@/assets/main/优质运力推荐.png';
import carIcon from '@/assets/main/车辆.png';
import companyIcon from '@/assets/main/企业.png';
import tabTouchIcon from '@/assets/main/tab滑块.png';
import no1Icon from '@/assets/main/no1.png';
import no2Icon from '@/assets/main/no2.png';
import no3Icon from '@/assets/main/no3.png';
import styles from './tabComponent.module.less';

class CommonTable extends React.Component {
  render() {
    const { columns, dataSource, rowKey } = this.props;
    return (
      <div className="table-outer">
        <div className="table-head">
          <Row gutter={24}>
            {columns.map(item => (
              <Col span={item.span} key={item.dataIndex}>
                <span>{item.title}</span>
              </Col>
            ))}
          </Row>
        </div>
        <div className="table-body">
          {dataSource.map((ele, index) => (
            <Row
              gutter={24}
              key={ele[rowKey || 'id']}
              style={index > 0 ? { borderTop: '1px dashed #eee' } : {}}
            >
              {columns.map(item => (
                <Col span={item.span} key={item.dataIndex}>
                  <span>
                    {item.render
                      ? item.render(ele[item.dataIndex], ele, index)
                      : ele[item.dataIndex]}
                  </span>
                </Col>
              ))}
            </Row>
          ))}
        </div>
      </div>
    );
  }
}

class CarTable extends React.Component {
  state = {
    data: [],
  };
  lineColumns = [
    {
      title: <span style={{ marginLeft: 30 }}>序号</span>,
      dataIndex: 'index',
      span: 3,
      render: (text, recored, index) => {
        return (
          <div style={{ boxSizing: 'border-box', marginLeft: 30, width: 40, textAlign: 'center' }}>
            {index === 0 ? (
              <img src={no1Icon.src} alt="" width="40px" />
            ) : index === 1 ? (
              <img src={no2Icon.src} alt="" width="40px" />
            ) : index === 2 ? (
              <img src={no3Icon.src} alt="" width="40px" />
            ) : (
              <span>{index + 1}</span>
            )}
          </div>
        );
      },
    },
    {
      title: '车牌号',
      dataIndex: 'plate',
      span: 3,
      render: (text, record) => text || '-',
    },
    {
      title: '车型',
      dataIndex: 'vehicleType',
      span: 3,
      render: (text, record) => text || '-',
    },
    {
      title: '车长（m）',
      dataIndex: 'carlong',
      span: 3,
      render: (text, record) => (!text || text === '0' ? '-' : text),
    },
    {
      title: '额定载重（t）',
      dataIndex: 'ratedLoad',
      span: 3,
      render: (text, record) => (!text || text === '0' ? '-' : text),
    },
    {
      title: '额定容积（m³）',
      dataIndex: 'ratedVolume',
      span: 4,
      render: (text, record) => (!text || text === '0' ? '-' : text),
    },
    {
      title: '常跑路线',
      dataIndex: 'routeList',
      span: 5,
      render: (text, record) => <span title={text}>{text}</span>,
    },
  ];
  componentDidMount() {
    this.getInfo();
  }
  getInfo = async () => {
    // const res = await getHotCar({
    //   pageSize: 10,
    //   skipNum: 0,
    // });
    // if (res.data) {
    //   this.setState({
    //     data: res.data,
    //   });
    // }
  };
  render() {
    const { data } = this.state;
    return <CommonTable dataSource={data} columns={this.lineColumns} rowKey="encryptedPlate" />;
  }
}

class LineTable extends React.Component {
  
  constructor(props) {
    super(props);
    const {pageProps} = props
    this.state = {
      data: pageProps.resLine || [],
    };
    this.lineColumns = [
      {
        title: <span style={{ marginLeft: 30 }}>序号</span>,
        dataIndex: 'index',
        span: 3,
        render: (text, recored, index) => {
          return (
            <div
              style={{ boxSizing: 'border-box', marginLeft: 30, width: 40, textAlign: 'center' }}
            >
              {index === 0 ? (
                <img src={no1Icon.src} alt="" width="40px" />
              ) : index === 1 ? (
                <img src={no2Icon.src} alt="" width="40px" />
              ) : index === 2 ? (
                <img src={no3Icon.src} alt="" width="40px" />
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
          );
        },
      },
      {
        title: '线路名称',
        dataIndex: 'one',
        span: 5,
        render: (text, record) => (
          <span className="line-item">
            {record.supplierSpecialLineVO &&
              record.supplierSpecialLineVO.matchLine &&
              (record.supplierSpecialLineVO.matchLine.startCity ||
                record.supplierSpecialLineVO.matchLine.startProvince)}
            <span className="line"></span>
            {record.supplierSpecialLineVO?.matchLine?.maxAging && (
              <span className="time-box">{`${
                record.supplierSpecialLineVO?.matchLine?.maxAging
              }${record.supplierSpecialLineVO?.matchLine?.agingUnit || '天'}${record
                .supplierSpecialLineVO?.matchLine?.transportType || ''}`}</span>
            )}
            <span className="line"></span>
            {record.supplierSpecialLineVO &&
              record.supplierSpecialLineVO.matchLine &&
              (record.supplierSpecialLineVO.matchLine.endCity ||
                record.supplierSpecialLineVO.matchLine.endProvince)}
          </span>
        ),
      },
      {
        title: '承运商名称',
        dataIndex: 'companyName',
        span: 3,
        render: (text, record) => <span title={text}>{text || '-'}</span>,
      },
      {
        title: '经营地点',
        span: 3,
        render: (text, record) => record.businessAddressList[0].addressDetail || '',
      },
      {
        title: '入驻形式',
        dataIndex: 'isBelongInner',
        span: 2,
        render: text => (text ? '港内' : '非港内'),
      },
      {
        title: '传化认证',
        // dataIndex: 'transfarAuth',
        span: 2,
        render: (text, record) => {
          return record.supplierSpecialLineVO &&
            record.supplierSpecialLineVO.lineInfoList &&
            record.supplierSpecialLineVO.lineInfoList.length > 0 &&
            record.supplierSpecialLineVO.lineInfoList[0].signStatusCode
            ? '是'
            : '否';
        },
      },
      {
        title: '企业认证',
        dataIndex: 'isAuthentication',
        span: 2,
        render: (text, record) => (text ? '是' : '否'),
      },
      {
        title: '星级',
        span: 4,
        render: (text, record) => {
          // console.log('start', this.setStar(record));
          return this.setStar(record);
        },
      },
    ];
  }
  componentDidMount() {
    !this.props.pageProps.pageServerRender && this.getInfo();
  }
  // 星级渲染
  setStar = res => {
    let _starts = [];
    let _nostarts = [];
    for (let i = 0; i < Number(res.evaluateStar); i++) {
      _starts.push('star_' + i);
    }
    for (let i = 0; i < 5 - Number(res.evaluateStar); i++) {
      _nostarts.push('nostar_' + i);
    }
    const star = _starts.map((item, index) => {
      return <img src={starIcon.src} key={'star_' + index} className="icon-star"></img>;
    });
    const nostar = _nostarts.map((item, index) => {
      return <img src={nostarIcon.src} key={'nostar_' + index} className="icon-star"></img>;
    });
    return star.concat(nostar);
  };
  getInfo = async () => {
    // const { isLogin } = this.props.user || {};
    // // 默认杭州到成都
    const params = {
      startProvinceCode: '330000',
      startCityCode: '330100',
      endProvinceCode: '510000',
      endCityCode: '510100',
      priorityType: 0,
      pageSize: 10,
      skipCount: 0,
    };
    // if (isLogin) {
    //   const res = await getNewOrder({
    //     skipCount: 0,
    //     pageSize: 1,
    //     orderBy: 'gmtCreat',
    //     orderByType: 'DESC',
    //   });
    //   if (res.data && res.data.length > 0) {
    //     const {
    //       sendProvinceCode,
    //       sendCityCode,
    //       receiveProvinceCode,
    //       receiveCityCode,
    //     } = res.data[0].orderRelation;
    //     params.startProvinceCode = sendProvinceCode;
    //     params.startCityCode = sendCityCode;
    //     params.endProvinceCode = receiveProvinceCode;
    //     params.endCityCode = receiveCityCode;
    //   }
    // }
    const {exampleStore : pageStore} = this.props
    const resLine = await pageStore.getList(params);
    if (resLine) {
      // 数据小于10条，取默认杭州到成都数据补全10条
      if (false && params.startCityCode !== '330100' && params.endCityCode !== '510100' && resLine.data.length < 10) {
        params.startProvinceCode = '330000';
        params.startCityCode = '330100';
        params.endProvinceCode = '510000';
        params.endCityCode = '510100';
        const resLineNull = await getHotLine(params);
        this.setState({
          data: [...(resLine || []), ...(resLineNull.data || [])].slice(0, 10),
        });
      } else {
        this.setState({
          data: resLine,
        });
      }
    }
  };
  render() {
    // console.log(this.props, 'LineTable')
    const { data } = this.state;
    return <CommonTable dataSource={data} columns={this.lineColumns} rowKey="id" />;
  }
}

const LineConnect = inject('exampleStore')(observer(LineTable));

class CompanyTable extends React.Component {
  state = {
    data: [],
  };
  lineColumns = [
    {
      title: '序号',
      dataIndex: 'index',
      span: 3,
      render: (text, recored, index) => {
        return (
          <div style={{ boxSizing: 'border-box', marginLeft: 30, width: 40, textAlign: 'center' }}>
            {index === 0 ? (
              <img src={no1Icon.src} alt="" width="40px" />
            ) : index === 1 ? (
              <img src={no2Icon.src} alt="" width="40px" />
            ) : index === 2 ? (
              <img src={no3Icon.src} alt="" width="40px" />
            ) : (
              <span>{index + 1}</span>
            )}
          </div>
        );
      },
    },
    {
      title: '企业名称',
      dataIndex: 'supplierName',
      span: 6,
      render: (text, record) => text || '',
    },
    {
      title: '会员认证',
      dataIndex: 'isBelongInner',
      span: 5,
      render: (text, record) => (text ? '是' : '否'),
    },
    {
      title: '传化认证',
      dataIndex: 'isAuthentication',
      span: 5,
      render: (text, record) => {
        return record.supplierSpecialLineVO &&
          record.supplierSpecialLineVO.lineInfoList &&
          record.supplierSpecialLineVO.lineInfoList.length > 0 &&
          record.supplierSpecialLineVO.lineInfoList[0].signStatusCode
          ? '是'
          : '否';
      },
    },
    {
      title: '企业星级',
      // dataIndex: 'four',
      span: 5,
      render: (text, record) => {
        // console.log('start', this.setStar(record));
        return this.setStar(record);
      },
    },
  ];
  componentDidMount() {
    // this.getInfo();
  }
  // 星级渲染
  setStar = res => {
    let _starts = [];
    let _nostarts = [];
    for (let i = 0; i < Number(res.evaluateStar); i++) {
      _starts.push('star_' + i);
    }
    for (let i = 0; i < 5 - Number(res.evaluateStar); i++) {
      _nostarts.push('nostar_' + i);
    }
    const star = _starts.map((item, index) => {
      return <img src={starIcon.src} key={'star_' + index} className="icon-star"></img>;
    });
    const nostar = _nostarts.map((item, index) => {
      return <img src={nostarIcon.src} key={'nostar_' + index} className="icon-star"></img>;
    });
    return star.concat(nostar);
  };
  getInfo = async () => {
    // const resLine = await getHotCompany({
    //   pageSize: 10,
    //   skipCount: 0,
    //   priorityType: 2,
    // });
    // // console.log('resLine', resLine);
    // if (resLine.data) {
    //   this.setState({
    //     data: resLine.data,
    //   });
    // }
  };
  render() {
    const { data } = this.state;
    return <CommonTable dataSource={data} columns={this.lineColumns} rowKey="id" />;
  }
}
class TabComponent extends React.Component {

  state = {
    tabsKey: 'line',
  };
  handleTabChange = tabsKey => {
    this.setState({
      tabsKey,
    });
  };
  handleGo = () => {
    const { tabsKey } = this.state;
    if (tabsKey === 'line') {
      this.props.onLink({ path: '/hywportal/specialLineList?tabsKey=line' });
    }
    if (tabsKey === 'car') {
      this.props.onLink({ path: '/hywportal/vehicleSchedule' });
    }
    if (tabsKey === 'company') {
      this.props.onLink({ path: '/hywportal/enterpriseList' });
    }
  };
  render() {
    const { tabsKey } = this.state;
    // console.log(this.props.pageProps, '444444')
    return (
      <div className={styles['tab-component']}>
        <div className="title-img-outer">
          <img src={recommendIcon.src} alt="err" style={{ height: 48 }} />
        </div>
        <div className="tab-key">
          <div className="tab-key-left">
            <div
              // className={tabsKey === 'line' ? 'tab-key-item tab-key-item-actived' : 'tab-key-item'}
              className="tab-key-item"
              onClick={this.handleTabChange.bind(this, 'line')}
            >
              {tabsKey === 'line' ? (
                <>
                  {/* <img src={lineIcon} alt="" height="20px" /> */}
                  <span>专线</span>
                  <img src={tabTouchIcon.src} className="tab-touch tab-line-touch" />
                </>
              ) : (
                <span>专线</span>
              )}
            </div>
            <div
              // className={tabsKey === 'car' ? 'tab-key-item tab-key-item-actived' : 'tab-key-item'}
              className="tab-key-item"
              onClick={this.handleTabChange.bind(this, 'car')}
            >
              {tabsKey === 'car' ? (
                <>
                  {/* <img src={carIcon} alt="" height="20px" /> */}
                  <span>车辆</span>
                  <img src={tabTouchIcon.src} className="tab-touch tab-car-touch" />
                </>
              ) : (
                <span>车辆</span>
              )}
            </div>
            {/* <div
              // className={
              //   tabsKey === 'company' ? 'tab-key-item tab-key-item-actived' : 'tab-key-item'
              // }
              className="tab-key-item"
              onClick={this.handleTabChange.bind(this, 'company')}
            >
              {tabsKey === 'company' ? (
                <>
                  <img src={companyIcon} alt="" height="20px" />
                  <img src={tabTouchIcon} className="tab-touch tab-company-touch" />
                </>
              ) : (
                <span>企业</span>
              )}
            </div> */}
          </div>
          <div className="tab-key-right" onClick={this.handleGo}>
            <Button type="primary" ghost>
              查看全部
            </Button>
          </div>
        </div>
        <div className="tab-table">{tabsKey === 'line' && <LineConnect pageProps={this.props.pageProps} />}</div>
        <div className="tab-table">{tabsKey === 'car' && <CarTable />}</div>
        <div className="tab-table">{tabsKey === 'company' && <CompanyTable />}</div>
      </div>
    );
  }
}


export default TabComponent;
