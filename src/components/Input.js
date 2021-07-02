import React from 'react';

const validators = {
  userName: {
    required: (value) => { return value === ''; },
    minLength: (value) => { return value.length < 2; }
  },
  userActivity: {
    required: (value) => { return value === ''; },
    minLength: (value) => { return value.length < 2; }
  },
  avatarLink: {
    required: (value) => { return value === ''; },
    isUrl: (value) => { return !/^(https?:\/\/)?([\w-]{1,32}\.[\w-]{1,32})[^\s@]*$/.test(value); }
  },
  cardTitle: {
    required: (value) => { return value === ''; },
    minLength: (value) => { return value.length < 2; }
  },
  cardLink: {
    required: (value) => { return value === ''; },
    isUrl: (value) => { return !/^(https?:\/\/)?([\w-]{1,32}\.[\w-]{1,32})[^\s@]*$/.test(value); }
  }
}

function Input(props) {
  const [formValues, setFormValues] = React.useState({
    userName: ''
    // userActivity: '',
    // avatarLink: '',
    // cardTitle: '',
    // cardLink: ''
  });

  const [formValidity, setFormValidity] = React.useState({
    userNameValid: false
    // userActivityValid: false,
    // avatarLinkValid: false,
    // cardTitleValid: false,
    // cardLinkValid: false
  });

  const errors = {
    // true if error
    // false if correct

    userName: {
      required: true,
      minLength: true
    }
    // userActivity: {
    //   required: true,
    //   minLength: true
    // },
    // avatarLink: {
    //   required: true,
    //   isUrl: true
    // },
    // cardTitle: {
    //   required: true,
    //   minLength: true
    // },
    // cardLink: {
    //   required: true,
    //   isUrl: true
    // }
  };

  const handleInputChange = React.useCallback((e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormValues(prevState => ({ ...prevState, [name]: value}))
  }, [setFormValues]);

  React.useEffect(function validateInputs() {
    const { userName } = formValues;


    const userNameValidationResult = Object.keys(validators.userName).map(
      errorKey => {
        const errorResult = validators.userName[errorKey](userName);

        return { [errorKey]: errorResult };
      }
    ).reduce((acc, el) => ({...acc, ...el}), {});

  }, [formValues, setFormValidity]);

  const { userName } = formValues;
  const { userNameValid } = formValidity;
  const isSubmitDisabled = !userNameValid;

  return (
    <>
      <input type={props.type} name={props.name} value={userName} onChange={handleInputChange} id="link-input" required className="form__input form__input_type_link" placeholder="Ссылка на картинку" ref={props.inputRef} />
      {/* {!userNameValid && <span className="form__input-error link-input-error">Вы пропустили это поле.</span>} */}
      {errors.userName.required && <span className="form__input-error link-input-error">Вы пропустили это поле.</span>}
      {errors.userName.minLength && <span className="form__input-error link-input-error">Минимальня длина - 2 символа</span>}
      {/* {errors..isUrl && <span className="form__input-error link-input-error">Введите адрес сайта</span>} */}

      <button disabled={isSubmitDisabled}></button>
    </>
  )
}

export default Input;
