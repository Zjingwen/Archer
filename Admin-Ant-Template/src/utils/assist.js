export function authentication(content){// 检查是否登陆，需要登陆则跳转login
  const userInfo = window.localStorage.getItem('userInfo');

  if(!userInfo){
    content.props.history.push('/login');
  }
}

export function jsonToQuery(str) {
  let _str = '';

  for (let o in str) {
    if (str[o] !== -1) {
      _str += o + '=' + str[o] + '&';
    }
  }
  _str = _str.substring(0, _str.length-1);
  return _str;
};

export function queryToJson(str){
  return str.split('?')[1].split('&').reduce(function(prev, curr, i, arr) {
    let p = curr.split('=');
    prev[decodeURIComponent(p[0])] = decodeURIComponent(p[1]);
    return prev;
  }, {});
};

/**
 * 检查参数是否缺失
 * @param {array} left 必备参数
 * @param {object} right 传入的参数
 * @returns {array} 返回缺失的参数，为空表示不缺失
 */
export function checkQuery(left, right){
  return left.filter((v)=> !right.hasOwnProperty(v));
};