import {useAppSelector} from '../../hooks/index';

function ErrorMessage(): JSX.Element | null {
  const {error} = useAppSelector((state) => state.APP);

  if (error) {
    return (
      <div
        style = {{
          position:'fixed',
          top:' 30px',
          right: '30px',
          padding: '10px',
          backgroundColor:'#d96666',
          color: 'white',
          borderRadius: '5px',
        }}
      >
        {error}
      </div>
    );
  }

  return null;
}

export default ErrorMessage;
