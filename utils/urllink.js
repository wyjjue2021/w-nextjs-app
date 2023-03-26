// import Exception from '@/pages/exception';
// import { jumpTo } from '@/tabs';
const jumpTo = () => {}
import { toLoginPage } from '@/utils';

const HOST_RYY_TEST = 'https://statictest.tf56.com/ryy/#';
const HOST_RYY_PRODUCT = 'https://www.lujing56.cn/ryy/#';
const HOST_LYT_TEST = 'http://lyttest.tf56.com/lytMall/#';
const HOST_LYT_PRODUCT = 'http://www.lujing56.cn/lytMall/#';
const HOST_YUNCANG_TEST = 'https://cwmstest.tf56.com';
const HOST_YUNCANG_PRODUCT = 'https://cwms.tf56.com';
const HOST_LINGDAN_TEST = 'https://huozhutest.tf56net.com/cross-domain';
const HOST_LINGDAN_PRODUCT = 'https://huozhu.tf56net.com/cross-domain';
const HOST_CARRIER_TEST = 'https://carriertest.tf56net.com';
const HOST_CARRIER_PRODUCT = 'https://carrier.tf56net.com';

/**
 * 融易运首页
 */
const PATH_RYY_HOME = '/';
/**
 * 融易运-业务管理--承运订单--创建订单（整车直发）
 * {@param type=add}
 */
const PATH_RYY_CREATE_ORDER = '/businessManage/carrierOrder/add';
/**
 * 融易运-业务管理--承运订单--再下一单（整车-再下一单）
 * {@param type=again&code=订单编号 }
 */
const PATH_RYY_READD_ORDER = '/businessManage/carrierOrder/add';
/**
 * 融易运-业务管理--承运订单--编辑（整车订单编辑）
 * {@param type=editor&code订单编号}
 */
const PATH_RYY_EDIT_ORDER = '/businessManage/carrierOrder/edit';
/**
 * 融易运-业务管理--排队叫号管理--预约管理（厂区叫号）
 */
const PATH_RYY_BOOKING = '/businessManage/queneSystem/booking';
/**
 * 陆运通首页
 */
const PATH_LYT_HOME = '/index/homepage';
/**
 * 陆运通-业务管理--我要发货--普通发货（整车代发）
 */
const PATH_LYT_DELIVERY = '/deliver';
/**
 * 陆运通-业务管理--我要发货--创建订单
 */
const PATH_LYT_BOOKING = '/booking';
/**
 * 云仓首页
 */
const PATH_YUNCANG_HOME = '/index';
/**
 * 库存查询（云仓总仓库存查询）
 */
const PATH_YUNCANG_STORAGE = '/whole-report/goods-report/index';

/**
 * 零担-货线PC首页
 */
const PATH_LINGDAN_HOME = 'home';
/**
 * 零担-创建订单
 */
const PATH_LINGDAN_ADD_ORDER = 'bill-order-add';
/**
 * 零担-修改订单
 * {@param orderNumber=订单编号}
 */
const PATH_LINGDAN_EDIT_ORDER = 'bill-order-edit';
/**
 * 零担-再下一单
 * {@param orderNumber=订单编号}
 */
const PATH_LINGDAN_READD_ORDER = 'bill-order-again';
/**
 * 零担-定位夹（定位器管理）
 */
const PATH_LINGDAN_LOCATOR = 'locator-manage';

/**
 * 通用跳转
 * @param {路径 #urllink.XXXX，可为相对路径(系统内跳转)} url
 * @param {target(可为空) eg: _blank} target
 */
const jump = (url, target = '') => {
  if (url.indexOf('http') === 0) {
    if (target) {
      window.open(url, target);
    } else {
      window.open(url);
    }
  } else {
    // 系统内路径
    const newUrl = url.indexOf('/hywportal') > -1 ? url : `/hywportal${url}`;
    jumpTo(newUrl);
  }
};

/**
 * 跳转至融易运
 * @param {路径 #urllink.XXXX} path
 * @param {参数(可为空) eg: a=xx&b=xx} param
 */
const jump2ryy = (path, param = '') => {
  if (!path) {
    // throw new Exception('method jump2ryy in urllink.js : path param cannot be empty');
  }
  const user = window.g_app._store.getState().user || {};
  if (!user.isLogin && path !== PATH_RYY_HOME) {
    toLoginPage();
    return;
  }
  const cookie = user.sessionKey;
  let newParam = `sourceSite=unifiedEntry&accessToken=${cookie}`;
  if (param) {
    newParam = `${newParam}&${param}`;
  }
  const host = window.location.host;
  if (host.indexOf('test') > -1) {
    jump(`${HOST_RYY_TEST}${path}?${newParam}`, '_blank');
  } else {
    jump(`${HOST_RYY_PRODUCT}${path}?${newParam}`, '_blank');
  }
};
/**
 * 跳转至陆运通
 * @param {路径 #urllink.PATH_XXX} path
 * @param {参数(可为空) eg: a=xx&b=xx} param
 */
const jump2lyt = (path, param = '') => {
  if (!path) {
    // throw new Exception('method jump2lyt in urllink.js : path param cannot be empty');
  }
  const user = window.g_app._store.getState().user || {};
  if (!user.isLogin && path !== PATH_LYT_HOME) {
    toLoginPage();
    return;
  }
  const cookie = user.sessionKey;
  let newParam = `sourceSite=unifiedEntry&accessToken=${cookie}`;
  if (param) {
    newParam = `${newParam}&${param}`;
  }
  const host = window.location.host;
  if (host.indexOf('test') > -1) {
    jump(`${HOST_LYT_TEST}${path}?${newParam}`, '_blank');
  } else {
    jump(`${HOST_LYT_PRODUCT}${path}?${newParam}`, '_blank');
  }
};
/**
 * 跳转至零担PC端(PATH_LINGDAN_ADD_ORDER,PATH_LINGDAN_EDIT_ORDER,PATH_LINGDAN_HOME,PATH_LINGDAN_LOCATOR,PATH_LINGDAN_READD_ORDER)
 * @param {路径 #urllink.XXXX} path
 * @param {参数(可为空) eg: a=xx&b=xx} param
 *
 */
export const jump2lingdan = (path, param = '') => {
  if (!path) {
    // throw new Exception('method jump2lingdan in urllink.js : path param cannot be empty');
  }
  const user = window.g_app._store.getState().user || {};
  if (!user.isLogin && path !== PATH_LINGDAN_HOME) {
    toLoginPage();
    return;
  }
  const cookie = user.sessionKey;
  let newParam = `routeName=${path}&session_key=${cookie}`;
  if (param) {
    newParam = `${newParam}&${param}`;
  }
  const host = window.location.host;
  if (host.indexOf('test') > -1) {
    jump(`${HOST_LINGDAN_TEST}?${newParam}`, '_blank');
  } else {
    jump(`${HOST_LINGDAN_PRODUCT}?${newParam}`, '_blank');
  }
};
/**
 * 跳转至云仓
 * @param {路径 #urllink.XXXX} path
 * @param {参数(可为空) eg: a=xx&b=xx} param
 */
const jump2yuncang = (path, param = '') => {
  if (!path) {
    // throw new Exception('method jump2yuncang in urllink.js : path param cannot be empty');
  }
  const user = window.g_app._store.getState().user || {};
  if (!user.isLogin && path !== PATH_YUNCANG_HOME) {
    toLoginPage();
    return;
  }
  const cookie = user.sessionKey;
  let newParam = `?accessToken=${cookie}&sourceSite=hywportal`;
  if (param) {
    newParam = `${newParam}&${param}`;
  }
  const host = window.location.host;
  if (host.indexOf('test') > -1) {
    jump(`${HOST_YUNCANG_TEST}${path}${newParam}`, '_blank');
  } else {
    jump(`${HOST_YUNCANG_PRODUCT}${path}${newParam}`, '_blank');
  }
};

/**
 * 跳转至承运商
 * @param {路径 #urllink.XXXX} path
 */
const jump2carrier = (path = '/') => {
  const host = window.location.host;
  if (host.indexOf('test') > -1) {
    jump(`${HOST_CARRIER_TEST}${path}`, '_blank');
  } else {
    jump(`${HOST_CARRIER_PRODUCT}${path}`, '_blank');
  }
};
const jumpUnique = (url, target = '') => {
  if (!url) {
    return;
  }
  if (url.indexOf('http') === 0) {
    // http开头
    if (url.indexOf('/ryy') > -1) {
      if (url.indexOf('/addOrder') > -1) {
        jump2ryy(PATH_RYY_CREATE_ORDER, 'type=add');
      } else if (url.indexOf('/booking') > -1) {
        jump2ryy(PATH_RYY_BOOKING);
      }
    } else if (url.indexOf('/yuncang') > -1) {
      if (url.indexOf('/queryStorage') > -1) {
        jump2yuncang(PATH_YUNCANG_STORAGE);
      }
    } else if (url.indexOf('/lyt') > -1) {
      if (url.indexOf('/addOrder') > -1) {
        jump2lyt(PATH_LYT_DELIVERY);
      }
    } else if (url.indexOf('/lingdan') > -1) {
      if (url.indexOf('/addOrder') > -1) {
        jump2lingdan(PATH_LINGDAN_ADD_ORDER);
      } else if (url.indexOf('/locatorManagement') > -1) {
        jump2lingdan(PATH_LINGDAN_LOCATOR);
      }
    }
  } else {
    // 系统内路径
    let newUrl = url.indexOf('/hywportal') > -1 ? url : `/hywportal${url}`; // 如果不是'/hywporatl'开头的则添加此前缀
    if (target) {
      // _blank 在浏览器新页签打开
      const originStr = typeof window !== 'undefined' ? window.location.origin : '';

      newUrl = `${originStr}${newUrl}`;
      jump(newUrl, target);
    } else {
      jumpTo(newUrl);
    }
  }
};
export default {
  jump,
  jump2lingdan,
  jump2lyt,
  jump2ryy,
  jump2yuncang,
  jump2carrier,
  jumpUnique,
  PATH_LINGDAN_ADD_ORDER,
  PATH_LINGDAN_EDIT_ORDER,
  PATH_LINGDAN_HOME,
  PATH_LINGDAN_LOCATOR,
  PATH_LINGDAN_READD_ORDER,
  PATH_LYT_DELIVERY,
  PATH_LYT_BOOKING,
  PATH_LYT_HOME,
  PATH_RYY_BOOKING,
  PATH_RYY_CREATE_ORDER,
  PATH_RYY_EDIT_ORDER,
  PATH_RYY_HOME,
  PATH_RYY_READD_ORDER,
  PATH_YUNCANG_HOME,
  PATH_YUNCANG_STORAGE,
};
