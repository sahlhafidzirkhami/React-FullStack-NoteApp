import dynamic from 'next/dynamic';

const Component = dynamic(() => import(/* webpackChunkName: "dashboard-page" */ '@/components/templates/Dashboard'), {
  ssr: false,
});
export default Component;