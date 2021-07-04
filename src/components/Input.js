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
  const [value, setValue] = React.useState('');

  const handleInputChange = React.useCallback((e) => {
    const value = e.target.value;

    setValue(value)
  }, [setValue]);

// const [errors, setErrors] = React.useState({
//     // true if error
//     // false if correct

//     required: true,
//     minLength: true,
//     isUrl: true

//     // userName: {
//     //   required: true,
//     //   minLength: true
//     // }
//     // userActivity: {
//     //   required: true,
//     //   minLength: true
//     // },
//     // avatarLink: {
//     //   required: true,
//     //   isUrl: true
//     // },
//     // cardTitle: {
//     //   required: true,
//     //   minLength: true
//     // },
//     // cardLink: {
//     //   required: true,
//     //   isUrl: true
//     // }
//   });

//   const handleInputChange = React.useCallback((e) => {
//     const value = e.target.value;
//     const name = e.target.name;

//     setFormValues(prevState => ({ ...prevState, [name]: value}))
//   }, [setFormValues]);

//   React.useEffect(function validateInputs() {
//     const { userName } = formValues;


//     const userNameValidationResult = Object.keys(validators.userName)
//       .map((errorKey) => {
//         const errorResult = validators.userName[errorKey](userName);

//         return { [errorKey]: errorResult };
//       })
//       .reduce((acc, el) => ({...acc, ...el}), {});

//     setErrors({
//       userName: userNameValidationResult
//     });
//   }, [formValues, setErrors]);

//   const { userName } = formValues;
//   const isUserNameInvalid = Object.values(errors.userName).some(Boolean);

//   const isSubmitDisabled = isUserNameInvalid;


  return (
    <>
      <input type={props.type} name={props.name} value={value} onChange={handleInputChange} className="form__input" placeholder={props.placeholder} maxLength={props.maxLength} />
      {props.errors.required && <span className="form__input-error form__input-error_active">Вы пропустили это поле.</span>}
      {props.errors.minLength && <span className="form__input-error form__input-error_active">Минимальня длина - 2 символа</span>}
      {props.errors.isUrl && <span className="form__input-error link-input-error">Введите адрес сайта</span>}

      {/* <button className="button button_action_submit form__button" disabled={isSubmitDisabled}>Test</button> */}
    </>
  )
}

export default Input;
