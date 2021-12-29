import FormContainer from "components/Form/FormContainer"
import ValidationError from "components/Form/ValidationError"
import { useForm, useFormState } from "react-hook-form"
import { useDispatch } from "react-redux"
import { setError } from "features/user/userSlice"
import useAuth from "hooks/useAuth"
import { useNavigate } from "react-router-dom"
import FormButton from "../FormButton"
import Label from "../Label"
import Field from "../Field"

const SignUpForm = ({ children }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { authError, createAccount } = useAuth()
  const {
    register,
    handleSubmit,
    control,
    resetField,
    getValues,
    formState: { errors },
  } = useForm()

  const { isSubmitting } = useFormState({ control })

  const onSubmit = async (data) => {
    const response = await createAccount(data)

    if (response.error) {
      dispatch(setError(response.error.code))
      resetField("name")
      resetField("email")
      resetField("password")
      resetField("passwordRepeat")
      return false
    }

    resetField("name")
    resetField("email")
    resetField("password")
    resetField("passwordRepeat")
    navigate("/", { replace: true })
  }

  const inputClasses =
    "block placeholder-gray-400 border border-gray-200 bg-gray-50 text-gray-800 w-full p-4 focus:border focus:outline-2 focus:outline-gray-200 outline-white"

  return (
    <FormContainer>
      {children}
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        {authError && <p className="my-4 text-red-500 text-sm">{authError}</p>}

        <Field marginPosition="lg:mr-2">
          <Label htmlFor="name">Full Name</Label>
          <input
            type="text"
            className={inputClasses}
            placeholder="Name"
            {...register("name", {
              required: {
                value: true,
                message: "Field can not be empty",
              },
              pattern: {
                value: /[a-zA-Z -]/,
                message: "No special characters or numbers allowed",
              },
            })}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name && (
            <ValidationError>{errors.name?.message}</ValidationError>
          )}
        </Field>
        <Field marginPosition="lg:ml-2">
          <Label htmlFor="email">Email</Label>
          <input
            type="email"
            className={inputClasses}
            placeholder="Email"
            {...register("email", {
              required: {
                value: true,
                message: "Field can not be empty",
              },
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Invalid email",
              },
            })}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && (
            <ValidationError>{errors.email?.message}</ValidationError>
          )}
        </Field>
        <Field>
          <Label htmlFor="password">Password</Label>
          <input
            type="password"
            className={inputClasses}
            placeholder="Password"
            {...register("password", {
              required: "Field can not be empty",
              minLength: {
                value: 6,
                message: "Must be longer than 6 characters",
              },
            })}
            aria-invalid={errors.password ? "true" : "false"}
          />
          {errors.password && (
            <ValidationError>{errors.password?.message}</ValidationError>
          )}
        </Field>
        <Field>
          <Label htmlFor="passwordRepeat">Repeat Password</Label>
          <input
            type="password"
            className={inputClasses}
            placeholder="Repeat Password"
            {...register("passwordRepeat", {
              required: "Field can not be empty",
              minLength: {
                value: 6,
                message: "Must be longer than 6 characters",
              },
              validate: (value) =>
                value === getValues("password") || "Passwords must match",
            })}
            aria-invalid={errors.passwordRepeat ? "true" : "false"}
          />
          {errors.passwordRepeat && (
            <ValidationError>{errors.passwordRepeat?.message}</ValidationError>
          )}
        </Field>
        <FormButton disabled={isSubmitting} onClick={handleSubmit(onSubmit)}>
          {isSubmitting ? "Signing In..." : "Sign In"}
        </FormButton>
      </form>
    </FormContainer>
  )
}

export default SignUpForm