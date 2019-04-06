import Loadable from 'react-loadable';

export default function(ipt){
  return Loadable({
    loader: () => ipt,
    loading(){
      return <div>...loading</div>;
    },
    delay: 3000,
  });
}

