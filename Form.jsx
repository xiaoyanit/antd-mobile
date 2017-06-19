import React from 'react';
import { createForm } from 'rc-form';
import moment from 'moment'; // moment.min ~= 48kb
import { district } from 'antd-mobile-demo-data';

import { Picker, Tabs, DatePicker, List, Checkbox, Button, Steps, NavBar, InputItem } from 'antd-mobile';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';
import DrawerTest from './Drawer';
const CheckboxItem = Checkbox.CheckboxItem;
const TabPane = Tabs.TabPane;

// 如果不是使用 List.Item 作为 children
const CustomChildren = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{
        backgroundColor: '#fff', height: '0.9rem', lineHeight: '0.9rem', padding: '0 0.3rem',
      }}
    >
      {props.children}
      <span style={{ float: 'right' }}>{props.extra}</span>
    </div>
  );
};

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pickerValue: [],
      // pickerValue: ['340000', '340800', '340824']
      // dpValue: moment(),
      dpValue: null,
    };
  }

  render() {
    const { getFieldProps } = this.props.form;
    const { pickerValue, dpValue } = this.state;
    return (
      <div style={{ marginBottom: 30 }}>
        {/*  <NavBar
        leftContent="返回" mode="light"
        onLeftClick={() => global.alert('onLeftClick')}
        rightContent={[
          <Icon key="0" type="retweet" />,

             <Button key="2" type="primary" inline onClick={(e) => global.alert(e.toString())}>
            Start
          </Button>,
        ]}
      >NavBar</NavBar>
      <Icon key="1" type="search" />,*/}
        {/*<SearchBar placeholder="搜索" />*/}

        <Tabs defaultActiveKey="1">
          <TabPane tab="非销售人员" key="1">
            {/*<div style={{ margin: '20px 0' }}>
            <Button loading inline>loading 按钮</Button>
            <Button type="warning" across>warning 通栏按钮</Button>
          </div>

          <Steps direction="horizontal">
            <Steps.Step title="现在" description="立即买入" />
            <Steps.Step title="11月3日" description="买入成功" />
            <Steps.Step title="11月4日" description="收益到账" />
          </Steps> */}

            <div className="form">
              <List renderHeader={() => <b>选择时间</b>}>
                <InputItem placeholder="22">普通键盘</InputItem>
                <CheckboxItem onChange={(e) => global.console.log('checkbox', e)}>
                  CheckboxItem
                </CheckboxItem>
                <Picker
                  extra="请选择(可选)"
                  data={district}
                  title="选择地区"
                  {...getFieldProps('district', {
                    initialValue: ['340000', '340800', '340824'],
                  }) }
                >
                  <List.Item arrow="horizontal">省市区选择</List.Item>
                </Picker>
                <DatePicker
                  mode="date"
                  title="选择日期"
                  extra="可选,小于结束日期"
                  {...getFieldProps('date1', { initialValue: moment() }) }
                  minDate={moment('2015-08-06', 'YYYY-MM-DD')}
                  maxDate={moment('2017-12-03', 'YYYY-MM-DD')}
                >
                  <List.Item arrow="horizontal">日期</List.Item>
                </DatePicker>
              </List>
              <Picker
                data={district}
                title="选择地区"
                extra="请选择(可选)"
                value={pickerValue}
                onChange={(v) => this.setState({ pickerValue: v })}
              >
                <CustomChildren>省市区选择</CustomChildren>
              </Picker>
              <DatePicker
                mode="date"
                title="选择日期"
                extra="请选择(可选)"
                value={dpValue}
                onChange={(v) => this.setState({ dpValue: v })}
              >
                <CustomChildren>时间选择</CustomChildren>
              </DatePicker>
            </div>
            <div>
            </div>
          </TabPane>


          <TabPane tab="销售人员" key="2">
           {/**
            *
            <DrawerTest />
            */}
            <div
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', height: 2000,
              }}
            >
              选项卡二内容，内容很长，测试向下滑动页面，是否会导致 tab content 内容的左右偏移
          </div>
          </TabPane>
        </Tabs>
      </div>);
  }
}

export default createForm()(Test);

