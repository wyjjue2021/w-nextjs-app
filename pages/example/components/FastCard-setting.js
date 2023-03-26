import React from 'react';
// import { DraggableArea } from 'react-draggable-tags';
import { Button, message } from 'antd';
// import { saveUserFunction } from '../service';

class FastCardSetting extends React.Component {
  state = {
    visible: false,
    loading: false,
    doneData: [],
    waitData: [],
    copied: false,
  };
  componentDidMount() {
    // 为了展示动态样式
    setTimeout(() => {
      this.setState({
        visible: true,
      });
    });
  }
  handleCancel = () => {
    console.log('oncancel');
    this.setState({
      visible: false,
      doneData: [],
      waitData: [],
      copied: false,
    });
    setTimeout(() => {
      this.props.handleCancel();
    }, 400);
  };
  handleChange = tags => {
    const data = tags.map((item, index) => {
      item.sortNumber = index;
      return item;
    });
    this.setState({
      doneData: data,
    });
  };
  // handleSave = async () => {
  //   let { doneData, loading, copied } = this.state;
  //   const { selectedData } = this.props;
  //   let tempData = [...doneData];
  //   if (tempData.length === 0) {
  //     if (!copied) {
  //       tempData = [...selectedData];
  //       this.setState({
  //         doneData: tempData,
  //         copied: true,
  //       });
  //     }
  //   }
  //   if (tempData.length < 3) {
  //     message.error('快捷应用不能少于3个');
  //     return;
  //   }

  //   if (loading) {
  //     return;
  //   }
  //   const params = tempData.map((item, index) => {
  //     // item.sortNumber = index;
  //     return { functionCode: item.functionCode };
  //   });
  //   this.setState({
  //     loading: true,
  //   });

  //   try {
  //     const res = await saveUserFunction(params);
  //     this.setState({
  //       loading: false,
  //     });
  //     if (res.data && res.code === 0) {
  //       this.setState({
  //         doneData: [],
  //         waitData: [],
  //         copied: false,
  //       });
  //       this.props.onUpdateCallback();
  //       this.handleCancel();
  //     }
  //   } catch (exception) {
  //     this.setState({
  //       loading: false,
  //     });
  //   }
  // };
  handleAdd = record => {
    let { doneData, waitData } = this.state;
    const { selectedData = [], unSelectedData = [] } = this.props;
    let tempDoneData = [...doneData];
    if (tempDoneData.length === 0) {
      tempDoneData = [...selectedData];
    }
    let tempWaitData = [...waitData];
    if (tempWaitData.length === 0) {
      tempWaitData = [...unSelectedData];
    }
    if (tempDoneData.length >= 8) {
      message.error('最多添加8个');
      return;
    }
    record.status = 1;
    record.sortNumber = tempWaitData.length;
    tempDoneData.push(record);
    this.setState({
      copied: true,
      doneData: tempDoneData,
      waitData: tempWaitData.filter(item => item.functionCode !== record.functionCode),
    });
  };
  handleDel = record => {
    let { doneData, waitData, copied } = this.state;
    const { selectedData = [], unSelectedData = [] } = this.props;
    let tempDoneData = [...doneData];
    if (!copied) {
      tempDoneData = [...selectedData];
    }
    let tempWaitData = [...waitData];
    if (tempWaitData.length === 0) {
      tempWaitData = [...unSelectedData];
    }
    record.status = 0;
    tempWaitData.push(record);
    tempWaitData.sort((a, b) => {
      return (a.originSortNumber || 0) - (b.originSortNumber || 0);
    });
    this.setState({
      copied: true,
      doneData: tempDoneData.filter(item => item.functionCode !== record.functionCode),
      waitData: tempWaitData,
    });
  };
  render() {
    const { visible, doneData, waitData, loading } = this.state;
    const { selectedData, unSelectedData } = this.props;
    let tempDone = doneData && doneData.length > 0 ? doneData : selectedData;
    let tempWait = waitData && waitData.length > 0 ? waitData : unSelectedData;

    return (
      <>
        <div className="modal-setting">
          {visible && <div className="modal-setting-mask" onClick={this.handleCancel}></div>}
          <div
            className={
              visible ? 'modal-setting-card modal-setting-card-open' : 'modal-setting-card'
            }
          >
            <div className="modal-setting-card-outer">
              <div className="modal-setting-header">
                <span className="modal-setting-header-title">快捷应用设置</span>
              </div>
              <div className="modal-setting-content">
                <div className="modal-setting-content-text">
                  <span>已添加（最多8个）</span>
                </div>
                <div>
                  <div className="card-drag-box">
                    {/* <DraggableArea
                      tags={tempDone}
                      render={({ tag, index }) => (
                        <div className="done-tag">
                          <span className="tag-text">{tag.functionName}</span>
                          <svg
                            t="1649163954022"
                            className="icon-del"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="4812"
                            width="18"
                            height="18"
                            fill="#2B82D8"
                            style={{ backgroundColor: '#fff' }}
                            onClick={this.handleDel.bind(this, tag)}
                          >
                            <path
                              d="M512 1024C229.236364 1024 0 794.763636 0 512S229.236364 0 512 0s512 229.236364 512 512S794.763636 1024 512 1024zM512 46.545455C254.929455 46.545455 46.545455 254.929455 46.545455 512s208.384 465.454545 465.454545 465.454545 465.454545-208.384 465.454545-465.454545S769.070545 46.545455 512 46.545455z"
                              p-id="4813"
                            ></path>
                            <path
                              d="M709.469091 281.623273l32.907636 32.907636L314.530909 742.376727l-32.907636-32.907636L709.469091 281.623273z"
                              p-id="4814"
                            ></path>
                            <path
                              d="M314.530909 281.623273l427.869091 427.869091-32.907636 32.907636L281.623273 314.530909 314.530909 281.623273z"
                              p-id="4815"
                            ></path>
                          </svg>
                        </div>
                      )}
                      onChange={tags => this.handleChange(tags)}
                    /> */}
                  </div>
                </div>
                <div className="modal-setting-content-text">
                  <span>待添加</span>
                </div>
                <div className="modal-setting-content-wait">
                  {tempWait.map(item => (
                    <div className="wait-tag" key={item.functionCode}>
                      <span className="tag-text">{item.functionName}</span>
                      <svg
                        t="1649164642917"
                        className="icon-add"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="5615"
                        width="18"
                        height="18"
                        fill="#2B82D8"
                        onClick={this.handleAdd.bind(this, item)}
                      >
                        <path
                          d="M828.704 196.576c-84.608-84.192-197.056-130.56-316.704-130.56s-232.128 46.368-316.736 130.56C110.624 280.8 64 392.832 64 512c0 119.2 46.624 231.2 131.232 315.424 84.608 84.192 197.088 130.56 316.736 130.56s232.128-46.368 316.704-130.56c84.672-84.256 131.296-196.288 131.264-315.456C959.968 392.8 913.376 280.8 828.704 196.576zM736 544l-192 0 0 192c0 17.696-14.336 32-32 32s-32-14.304-32-32l0-192L288 544c-17.664 0-32-14.336-32-32s14.336-32 32-32l192 0L480 288c0-17.664 14.336-32 32-32s32 14.336 32 32l0 192 192 0c17.696 0 32 14.336 32 32S753.696 544 736 544z"
                          p-id="5616"
                        ></path>
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
              <div className="modal-setting-footer">
                <Button type="default" onClick={this.handleCancel}>
                  取消
                </Button>
                &nbsp;&nbsp;
                <Button type="primary" loading={loading} onClick={this.handleSave}>
                  保存
                </Button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default FastCardSetting;
