import React, {Fragment} from 'react';
import {Button} from "./components/Button/Button";
import { ButtonSize, ButtonType } from "./components/Button/ButtonProps";

function App() {
  return (
    <Fragment>
      <div style={{display: "flex", width: "50%"}}>
        <Button
          size={ButtonSize.large}
          type={ButtonType.primary}
          text={'Button'}
        />
        <Button
          size={ButtonSize.large}
          type={ButtonType.secondary}
          text={'Button'}
        />
        <Button
          size={ButtonSize.large}
          type={ButtonType.outlined}
          text={'Button'}
        />
        <Button
          size={ButtonSize.large}
          type={ButtonType.text}
          text={'Button'}
        />
      </div>

      <div style={{display: "flex", width: "50%",  marginTop: "50px"}}>
        <Button
          size={ButtonSize.medium}
          type={ButtonType.primary}
          text={'Button'}
        />
        <Button
          size={ButtonSize.medium}
          type={ButtonType.secondary}
          text={'Button'}
        />
        <Button
          size={ButtonSize.medium}
          type={ButtonType.outlined}
          text={'Button'}
        />
        <Button
          size={ButtonSize.medium}
          type={ButtonType.text}
          text={'Button'}
        />
      </div>

      <div style={{display: "flex", width: "50%",  marginTop: "50px"}}>
        <Button
          size={ButtonSize.small}
          type={ButtonType.primary}
          text={'Button'}
        />
        <Button
          size={ButtonSize.small}
          type={ButtonType.secondary}
          text={'Button'}
        />
        <Button
          size={ButtonSize.small}
          type={ButtonType.outlined}
          text={'Button'}
        />
        <Button
          size={ButtonSize.small}
          type={ButtonType.text}
          text={'Button'}
        />
      </div>
    </Fragment>
  );
}

export default App;
