import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="138" cy="138" r="138" />
    <rect x="0" y="282" rx="10" ry="10" width="280" height="35" />
    <rect x="202" y="358" rx="0" ry="0" width="0" height="18" />
    <rect x="0" y="323" rx="10" ry="10" width="280" height="86" />
    <rect x="0" y="419" rx="10" ry="10" width="100" height="30" />
    <rect x="121" y="419" rx="30" ry="30" width="150" height="45" />
  </ContentLoader>
);

export default Skeleton;
