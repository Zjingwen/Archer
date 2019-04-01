//标签
const tags = [
    {
        id: 1,
        name: 'pc端服务',
        template: 1
    },
    {
        id: 2,
        name: '移动端服务',
        template: 2
    },
    {
        id: 3,
        name: '优惠套餐',
        template: 3
    },
    {
        id: 4,
        name: '增值服务',
        template: 4
    }
];

//pc端服务
const pc = [{
    id: '1',
    title: '月费版（30天）',
    price: '299',
    list: [
        { icon: 'xxx', text: '发单助手', disabled: true },
        { icon: 'xxx', text: '分销系统', disabled: true },
        { icon: 'xxx', text: 'CMS建站', disabled: true },
        { icon: 'xxx', text: '手机App', disabled: true },
        { icon: 'xxx', text: '微信群管', disabled: true },
        { icon: 'xxx', text: '代理裂变', disabled: false },
        { icon: 'xxx', text: 'APP个性化免费试用', disabled: false },
        { icon: 'xxx', text: '小程序／公众号高折返', disabled: false },
    ],
    activity: {
        price: '199',
        startTime: '2018-04-18 00:00:00',
        endTime: '2018-04-18 12:00:00'
    },
},
{
    id: '2',
    title: '季费版（90天）',
    price: '599',
    list: [
        { icon: 'xxx', text: '发单助手', disabled: true },
        { icon: 'xxx', text: '分销系统', disabled: true },
        { icon: 'xxx', text: 'CMS建站', disabled: true },
        { icon: 'xxx', text: '手机App', disabled: true },
        { icon: 'xxx', text: '微信群管', disabled: true },
        { icon: 'xxx', text: '代理裂变', disabled: false },
        { icon: 'xxx', text: 'APP个性化免费试用', disabled: false },
        { icon: 'xxx', text: '小程序／公众号高折返', disabled: false },
    ],
},
{
    id: '3',
    title: '年费版（356天）',
    price: '1299',
    list: [
        { icon: 'xxx', text: '发单助手', disabled: true },
        { icon: 'xxx', text: '分销系统', disabled: true },
        { icon: 'xxx', text: 'CMS建站', disabled: true },
        { icon: 'xxx', text: '手机App', disabled: true },
        { icon: 'xxx', text: '微信群管', disabled: true },
        { icon: 'xxx', text: '代理裂变', disabled: false },
        { icon: 'xxx', text: 'APP个性化免费试用', disabled: false },
        { icon: 'xxx', text: '小程序／公众号高折返', disabled: false },
    ],
},
{
    id: '4',
    title: '终身版',
    price: '3999',
    list: [
        { icon: 'xxx', text: '发单助手', disabled: true },
        { icon: 'xxx', text: '分销系统', disabled: true },
        { icon: 'xxx', text: 'CMS建站', disabled: true },
        { icon: 'xxx', text: '手机App', disabled: true },
        { icon: 'xxx', text: '微信群管', disabled: true },
        { icon: 'xxx', text: '代理裂变', disabled: true },
        { icon: 'xxx', text: 'APP个性化免费试用', disabled: true },
        { icon: 'xxx', text: '小程序／公众号高折返', disabled: true },
    ],
}]

export default { tags, pc }