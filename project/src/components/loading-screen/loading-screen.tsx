type Style = {
  [key: string]: string;
};

function LoadingScreen(): JSX.Element {
  const loader: Style = {
    position: 'absolute',
    top: 'calc(50% - 32px)',
    left: 'calc(50% - 32px)',
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    perspective: '800px',
  };
  const innerOne: Style = {
    position: 'absolute',
    boxSizing: 'border-box',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    left: '0%',
    top: '0%',
    animation: 'rotate-one 1s linear infinite',
    borderBottom: '3px solid #4481C3',
  };
  const innerTwo: Style = {
    position: 'absolute',
    boxSizing: 'border-box',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    right: '0%',
    top: '0%',
    animation: 'rotate-two 1s linear infinite',
    borderRight: '3px solid #4481C3',
  };
  const innerThree: Style = {
    position: 'absolute',
    boxSizing: 'border-box',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    right: '0%',
    bottom: '0%',
    animation: 'rotate-three 1s linear infinite',
    borderTop: '3px solid #4481C3',
  };

  return (
    <div style={loader}>
      <div style={innerOne}>
        <style>
          {`@keyframes rotate-one {
            0% {
              transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
            }
            100% {
              transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
            }
            }`}
        </style>
      </div>
      <div style={innerTwo}>
        <style>
          {`@keyframes rotate-two {
              0% {
                transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
              }
              100% {
                transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
              }
            }`}
        </style>
      </div>
      <div style={innerThree}>
        <style>
          {`@keyframes rotate-three {
              0% {
                transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
              }
              100% {
                transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
            }`}
        </style>
      </div>
    </div>
  );
}

export default LoadingScreen;
