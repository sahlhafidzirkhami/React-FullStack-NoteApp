import dynamic from 'next/dynamic';

const Component = dynamic(() => import(/* webpackChunkName: "dashboard-page" */ '../src/components/templates/Dashboard/index'), {
  ssr: false,
});
export default Component;