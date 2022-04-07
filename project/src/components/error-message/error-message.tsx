import {useAppSelector} from '../../hooks/index';
import { getError } from '../../store/app-process/selectors';


function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(getError);

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
          zIndex: '100',
        }}
      >
        {error}
      </div>
    );
  }

  return null;
}

export default ErrorMessage;
