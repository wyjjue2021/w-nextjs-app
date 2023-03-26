// import React,{ useState} from 'react';
// import { inject, observer} from 'mobx-react'
// import Carousel from './components/Carousel';
// import withMain from '@/components/WithMain';
// import FastCard from './components/FastCard';
// import PersonCenterCard from './components/PersonCenterCard';
// import AroundServiceCard from './components/AroundServiceCard';
// import SpecialOffer from './components/SpecialOffer';
// import FootNavCard from './components/FootNavCard';
// import DriverGoods from './components/DriverGoods';
// import ChooseForYou from './components/ChooseForYou';
// import TabComponent from './components/TabComponent';
// import { selectStatistics } from './service';
// import styles from './index.less';


// const Main = (props) => {

//   const [list, setList] = useState([
//     {
//       title: '公路港',
//       numText: '65',
//       unit: ' +',
//     },
//     {
//       title: '零担覆盖城市',
//       numText: '600',
//       unit: ' +',
//     },
//     {
//       title: '线上运力资源',
//       numText: '100',
//       unit: '万辆',
//     },
//     {
//       title: '年运单量',
//       numText: '2000',
//       unit: '万单',
//     },
//   ])

//   const [portData, setPortData] =  useState([])

//   const {welcomeStore: pageStore} = props


//   /**
//    * 获取公路港统计信息
//    */
//    selectStatistics = async () => {
//     const res = await selectStatistics();
//     if (res.data && res.code === 0) {
//       const _portData = [
//         {
//           title: '公路港',
//           numText: res.data.roadPort || '0',
//           unit: ' +',
//         },
//         {
//           title: '零担覆盖城市',
//           numText: res.data.partLoadCity || '0',
//           unit: ' +',
//         },
//         {
//           title: '线上运力资源',
//           numText: res.data.transport || '0',
//           unit: '万辆',
//         },
//         {
//           title: '年运单量',
//           numText: res.data.yearWaybillCount || '0',
//           unit: '万单',
//         },
//       ];
//       setPortData(_portData)
//     }
//   };

//   useEffect(() => {
//     pageStore
//   }, []);

//   return <div className={styles['page-outer']}>
//   <div className="main-outer main-outer-one">
//     <div className="main-card fast-card">
//       {/* <FastCard /> */}
//     </div>
//     <div className="main-card carousel-card">
//       {/* <Carousel /> */}
//     </div>
//     <div className="main-card">
//       <div className="center-card">
//         {/* <PersonCenterCard data={orderStatics} /> */}
//       </div>
//       <div className="around-service-card">
//         {/* <AroundServiceCard /> */}
//       </div>
//     </div>
//   </div>
//   <div className="main-outer main-outer-two">
//     <div className="main-card deliverGoods-card">
//       {/* <DriverGoods onLink={this.props.onLink} /> */}
//     </div>
//     <div className="main-card chooseForYou-card">
//       {/* <ChooseForYou onLink={this.props.onLink} /> */}
//     </div>
//   </div>
//   <div className="main-outer main-outer-three">
//     {/* <SpecialOffer /> */}
//   </div>
//   <div className="main-outer main-outer-four">
//     {/* <TabComponent onLink={this.props.onLink} /> */}
//   </div>
//   <div className="main-outer main-outer-five">
//     <div className="main-card dataDisplay-card">
//       {/* <FootNavCard data={portData} onLink={onLink} /> */}
//     </div>
//   </div>
// </div>
// }


// export default inject('welcomeStore')(observer((withMain()(Main)))) ;
