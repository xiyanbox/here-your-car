import React, {PureComponent} from 'react';
import {connect} from 'dva';
import {
  Form,
  Input,
  DatePicker,
  Select,
  Button,
  Card,
  InputNumber,
  Radio,
  Icon,
  Tooltip
} from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import styles from './style.less';

const FormItem = Form.Item;
const {Option} = Select;
const {RangePicker} = DatePicker;
const {TextArea} = Input;
@connect(state => ({submitting: state.form.regularFormSubmitting}))
@Form.create()
export default class LearnerSave extends PureComponent {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.dispatch({type: 'form/submitRegularForm', payload: values});
      }
    });
  }
  render() {
    const {submitting} = this.props;
    const {getFieldDecorator, getFieldValue} = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: {
          span: 24
        },
        sm: {
          span: 7
        }
      },
      wrapperCol: {
        xs: {
          span: 24
        },
        sm: {
          span: 12
        },
        md: {
          span: 10
        }
      }
    };

    const submitFormLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 10,
          offset: 7
        }
      }
    };

    return (
      <PageHeaderLayout title="学员基本信息录入">
        <Card bordered={false}>
          <Form onSubmit={this.handleSubmit} hideRequiredMark style={{
            marginTop: 8
          }}>
            <FormItem {...formItemLayout} label="学员姓名">
              {getFieldDecorator('learnerName', {
                rules: [
                  {
                    required: true,
                    message: '请输入学员姓名'
                  }
                ]
              })(<Input placeholder="姓名"/>)}
            </FormItem>
            <FormItem {...formItemLayout} label="学员年龄">
              {getFieldDecorator('learnerAge', {
                rules: [
                  {
                    required: true,
                    message: '请输入学员年龄'
                  }
                ]
              })(<Input placeholder="年龄"/>)}
            </FormItem>
            <FormItem {...formItemLayout} label="身份证号">
              {getFieldDecorator('identityNo', {
                rules: [
                  {
                    required: true,
                    message: '请输入学员身份证号'
                  }
                ]
              })(<Input placeholder="身份证号"/>)}
            </FormItem>
            <FormItem {...formItemLayout} label="学员职业">
              {getFieldDecorator('learnerOccupation', {
                rules: [
                  {
                    required: true,
                    message: '请输入学员职业'
                  }
                ]
              })(<Input placeholder="职业"/>)}
            </FormItem>
            <FormItem {...formItemLayout} label="联系方式">
              {getFieldDecorator('contactNo', {
                rules: [
                  {
                    required: true,
                    message: '请输入联系方式'
                  }
                ]
              })(<Input placeholder="联系方式"/>)}
            </FormItem>
            <FormItem {...formItemLayout} label="入校时间">
              {getFieldDecorator('startTime', {
                rules: [
                  {
                    required: true,
                    message: '请选择入校时间'
                  }
                ]
              })(<DatePicker style={{
                width: '100%'
              }} placeholder="选择入校时间"/>)}
            </FormItem>
            <FormItem {...formItemLayout} label="学习阶段">
              {getFieldDecorator('studyStage', {
                initialValue:'1',
                rules: [
                  {
                    required: true,
                    message: '请选择学习阶段'
                  }
                ]
              })(
                <Select  style={{
                  width: '100%'
                }} placeholder="请选择学习阶段">
                  <Option value="1">科目一</Option>
                  <Option value="2">科目二</Option>
                  <Option value="3">科目三</Option>
                  <Option value="4">科目四</Option>
                </Select>
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="驾照类型">
              {getFieldDecorator('dirverLicense', {
                initialValue:'3',
                rules: [
                  {
                    required: true,
                    message: '请选择驾照类型'
                  }
                ]
              })(
                <Select style={{
                  width: '100%'
                }} placeholder="请选择驾照类型">
                  <Option value="1">A照</Option>
                  <Option value="2">B照</Option>
                  <Option value="3">C照</Option>
                  <Option value="4">D照</Option>
                </Select>
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="教练">
              {getFieldDecorator('teacher', {
                initialValue:'3',
                rules: [
                  {
                    required: true,
                    message: '请选择教练'
                  }
                ]
              })(
                <Select  style={{
                  width: '100%'
                }} placeholder="请选择驾照类型">
                  <Option value="1">马伟龙</Option>
                  <Option value="2">龙卷风</Option>
                  <Option value="3">郭猛男</Option>
                  <Option value="4">袁培培</Option>
                </Select>
              )}
            </FormItem>
            <FormItem {...submitFormLayout} style={{
              marginTop: 32
            }}>
              <Button type="primary" htmlType="submit" loading={submitting}>
                提交
              </Button>
              <Button style={{
                marginLeft: 8
              }}>保存</Button>
            </FormItem>
          </Form>
        </Card>
      </PageHeaderLayout>
    );
  }
}
