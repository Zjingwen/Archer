import Mock from './mock';
import React from 'react';
import styles from './index.css';
import { connect } from 'dva';
import { Icon, Input, Button, Row, Col, Tag, Tabs, Card, Form, Upload, Switch, Avatar } from 'antd';
import Frome from '../../components/Frome';
import Modal from '../../components/Modal';
import Confirm from '../../components/Confirm';
import DatePicker from '../../components/DateRange';

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class Title extends React.Component {
    render() {
        return (
            <Row>
                <Col span={2}>
                    <h3>{this.props.title}</h3>
                </Col>
            </Row>
        )
    }
};

class TagsFrome extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tags: props.tags,
            inputVisible: false,
            inputValue: '',
            tagElem: '',
            tagClosable: false,//是否可删除
            tagVisible: false,//是否可添加
        }
    }

    componentDidUpdate(nextProps) {

        this.setState({
            tags: nextProps.tags
        }, () => {
            this.renderTags();
        });
    }

    handleClose = (e, id) => {
        e.preventDefault();

        const { tags } = this.state;//.filter(tag => tag !== id);

        console.log(tags);
        console.log(id);

        Confirm.call(this, {
            title: '删除',
            content: '是否真的要删除？',
            okText: '是的',
            okType: 'danger',
            cancelText: '不是',
            onOk() {
                console.log('ok');
                this.setState({ tags })
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    showInput = () => {
        this.setState({ inputVisible: true }, () => this.input.focus());
    }

    handleInputChange = (e) => {
        this.setState({ inputValue: e.target.value });
    }

    handleInputConfirm = () => {
        let { tags, inputValue } = this.state;
        let id = Date.parse(new Date());

        if (inputValue && tags.indexOf(inputValue) === -1) {
            tags = [...tags, { id: id, name: inputValue }]
        }

        this.setState({
            tags,
            inputVisible: false,
            inputValue: ''
        }, () => {
            this.renderTags();
        });
    }

    renderTags = () => {
        const { tags, tagClosable } = this.state;

        if (!tags) return;

        const tagElem = tags.map((tag, index) => {
            return (
                <Tag key={tag.id} closable={tagClosable} onClose={(e) => this.handleClose(e, tag.id)}>
                    {tag.name}
                </Tag>
            );
        });

        this.setState({
            tagElem: tagElem
        })
    }

    saveInputRef = input => this.input = input;

    render() {
        const { inputVisible, inputValue, tagElem, tagVisible } = this.state;

        return (
            <Row className={styles.h50}>
                <Col span={24}>
                    {tagElem}
                    {tagVisible && inputVisible && (
                        <Input
                            ref={this.saveInputRef}
                            type="text"
                            size="small"
                            style={{ width: 78 }}
                            value={inputValue}
                            onChange={this.handleInputChange}
                            onPressEnter={this.handleInputConfirm}
                        />
                    )}
                    {tagVisible && !inputVisible && (
                        <Tag
                            onClick={this.showInput}
                            style={{ background: '#fff', borderStyle: 'dashed' }}
                        >
                            <Icon type="plus" /> 添加标签
                        </Tag>
                    )}
                </Col>
            </Row>
        )
    }
};

class DynamicFieldSet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: [],
            list: props.list
        }
    }

    componentDidUpdate() {
        this.handleRender()
    }

    handleRemove = (index) => {
        let { list } = this.state;
        list.splice(index, 1);

        this.setState({
            list: list
        })
        this.handleRender();
    }

    handleChangeText(e, index) {
        console.log(e.target);
        console.log(index)
        let { list } = this.state;
        list[index].text = e.target.value;

        this.setState({
            list: list
        }, (res) => {
            this.handleRender()
        });
    }

    handleRender = () => {

        if (!this.state.list) return;

        const props = {
            action: '//jsonplaceholder.typicode.com/posts/',
            onChange({ file, fileList }) {
                if (file.status !== 'uploading') {
                    console.log(file, fileList);
                }
            }
        };

        const temp = this.state.list.map((value, index) => {
            return (
                <Row key={index}>
                    <Col span={2}>
                        <Upload {...props}>
                            <Avatar icon="user" />
                        </Upload>
                    </Col>
                    <Col span={10} offset={1}><Input placeholder='介绍文字' onChange={(e) => this.handleChangeText.call(this, e, index)} value={value.text} /></Col>
                    <Col span={7} offset={1}>
                        是否禁止 <Switch defaultChecked />
                    </Col>
                    <Col span={3}>
                        <Button shape="circle" icon='close' onClick={this.handleRemove.bind(this, index)} />
                    </Col>
                </Row>
            )
        });

        this.setState({
            temp: temp
        });
    }

    handleAdd = () => {

        this.state.list.push({
            text: '',
            icon: '',
            disabled: ''
        });

        this.handleRender();
    };

    render() {

        return (
            <FormItem label='说明介绍'>
                {this.state.temp}
                <Button type='dashed' style={{ width: '100%' }} onClick={this.handleAdd}>添加说明介绍</Button>
            </FormItem>
        )
    }
};

class SetDateRange extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder: props.placeholder
        }
    }

    onChange = (value, dataString) => {
        console.group('date onChange');
        console.log(value);
        console.log(dataString);
        console.groupEnd();
    };

    onOk = (value, dataString) => {
        console.group('date onOk');
        console.log(value);
        console.log(dataString);
        console.groupEnd();
    };

    render() {
        const { placeholder } = this.state;
        return (
            <DatePicker
                placeholder={placeholder}
                onChange={this.onChange}
                onOk={this.onOk}
            />
        )
    }
};

class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            form: props.form,
            title: '编辑'
        };
    }

    showModal = () => {
        this.setState({
            visible: true
        });
    };

    hanldeOk = () => {
        let {form} = this.state;
        console.log(form);
    };

    hanldeCancel = () => {

    };

    showConfirm = () => {
        Confirm({
            title: '删除',
            content: '是否真的要删除？',
            okText: '是的',
            okType: 'danger',
            cancelText: '不是',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };

    hanldeChange = (e) => {
        let { form } = this.state;
        form[e.target.name] = e.target.value;
        this.setState({
            form: form
        })
    };

    render() {
        const { visible, form, title } = this.state;

        let activity = form.activity ? activityRender() :'';

        let span = form.activity ? 12 : 24;
        let gutter = form.activity ? 22: 24;
        let width = form.activity ? 800: 500;
        
        function activityRender(){
            return (
                <Col span={12}>
                    <h3>活动价格</h3>
                    <FormItem label='标题'>
                        <Input placeholder='请输入标题' />
                    </FormItem>
                    <FormItem label='价格'>
                        <Input placeholder='请输入价格'/>
                    </FormItem>
                    <FormItem label='开始时间' >
                        <SetDateRange placeholder='开始时间' />
                    </FormItem>
                    <FormItem label='结束时间'>
                        <SetDateRange placeholder='结束时间' />
                    </FormItem>
                    <DynamicFieldSet />
                </Col>
            )
        }

        return (
            <span>
                <Icon type="edit" onClick={this.showModal} style={{ cursor: 'pointer' }} />
                <Icon type="close" style={{ marginLeft: 10, cursor: 'pointer' }} onClick={this.showConfirm} />
                <Modal
                    visible={visible}
                    title={title}
                    onOk={this.hanldeOk}
                    onCancel={this.hanldeCancel}
                    width={width}
                >
                    <Form>
                        <Row gutter={gutter}>
                            <Col span={span}>
                                <h3>默认展示 <Icon className={[styles.fr,styles.cp,styles.line25]} type="plus" /></h3>
                                <FormItem label='标题'>
                                    <Input placeholder='请输入标题' defaultValue={form.title} name="title" onChange={this.hanldeChange} />
                                </FormItem>
                                <FormItem label='价格'>
                                    <Input placeholder='请输入价格' defaultValue={form.price} name="price" onChange={this.hanldeChange} />
                                </FormItem>
                                <DynamicFieldSet list={form.list} />
                            </Col>
                            {activity}
                        </Row>
                    </Form>
                </Modal>
            </span>
        )
    }
};

class PcFrome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }

        const self = this;

        setTimeout(() => {
            self.setState({
                items: Mock.pc
            })
        }, 1500);
    }

    componentDidUpdate(nextProps) {

    }

    render() {
        const list = this.state.items.map((value, index) => {
            return (
                <Col span={6} key={index}>
                    <Card
                        title={value.title}
                        bordered={true}
                        style={{ marginBottom: 20 }}
                        extra={<Edit form={value} />}
                    >
                        <h3>默认详情</h3>
                        <p>默认价格：¥{value.price}</p>
                        <p>包含功能：
                            {value.list.map((value, index) => {
                                const dis = value.disabled ? '' : { textDecoration: 'line-through' };
                                return (<span key={'activit_' + index}><br /><strong style={{ ...dis }}>{value.text}</strong></span>)
                            })}
                        </p>
                        {value.activity && (
                            <div>
                                <h3>活动详情</h3>
                                <p>活动价格：{value.activity ? '¥' + value.activity['price'] : ''}</p>
                                <p>活动时间：<br /> {value.activity ? value.activity.startTime : ''} <br />{value.activity ? value.activity.endTime : ''}</p>
                            </div>
                        )}
                    </Card>
                </Col>
            )
        });

        return (
            <Row gutter={16} type="flex" align="top">
                {list}
            </Row>
        )
    }
};

class AddPcItem extends React.Component {

    state = {
        modalConfig: {
            visible: false,
            width: 800,
            title: "添加价格",
            onOk(val) {
                console.log(val)
            },
            onCancel(val) {
                console.log(val)
            }

        }
    }

    hanldeOnClick = () => {
        let { modalConfig } = this.state;
        modalConfig.visible = true;

        this.setState({
            'modalConfig': modalConfig
        })
    }
    render() {
        let { modalConfig } = this.state;
        return (
            <Row className={styles.h50}>
                <Col><Button onClick={this.hanldeOnClick}>添加</Button></Col>
                <Modal {...modalConfig}>
                    添加价格
                </Modal>
            </Row>
        )
    }
};

class TabsFrome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: props.tags
        }
    }

    componentDidUpdate(nextProps) {
        this.setState({
            tags: nextProps.tags
        })
    }

    getTemplate(id) {

        if (id === 1) {
            return (<PcFrome />)
        }

        if (id === 2) {
            return (<div>待开发</div>)
        }

        if (id === 3) {
            return (<div>待开发</div>)
        }

        if (id === 4) {
            return (<div>待开发</div>)
        }
    }

    render() {
        let { tags } = this.state;

        return (
            <Row>
                <Col span={24}>
                    <Tabs
                        defaultActiveKey={tags[0] ? tags[0].id.toString() : '0'}
                        tabPosition="top"
                    >
                        {tags && (
                            tags.map((value) => {
                                return (
                                    <TabPane tab={value.name} key={value.id}>
                                        <AddPcItem id={value.id} />
                                        {this.getTemplate(value.template)}
                                    </TabPane>
                                )
                            })
                        )}
                    </Tabs>
                </Col>
            </Row>
        )
    }
};

class IndexPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tags: []
        }

        const self = this;

        setTimeout(() => {
            self.setState({
                tags: Mock.tags
            })
        }, 1500);
    }

    render() {
        let { tags } = this.state;
        return (
            <Frome>
                <Title title="标签管理" />
                <TagsFrome tags={tags} />
                <TabsFrome tags={tags} />
            </Frome>
        )
    }
};

export default connect()(IndexPage);