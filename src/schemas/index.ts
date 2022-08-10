import * as Yup from 'yup'

export const signInSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email').required('Required'),
	password: Yup.string().min(6, 'Too short').max(20, 'Too long').required('Required'),
})

export const signUpSchema = Yup.object().shape({
	// firstName: Yup.string().min(3, 'Too short').max(20, 'Too long').required('Required'),
	// lastName: Yup.string().min(3, 'Too short').max(20, 'Too long').required('Required'),
	email: Yup.string().email('Invalid email').required('Required'),
	password: Yup.string().min(6, 'Too short').max(20, 'Too long').required('Required'),
})

export const forgotPasswordSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email').required('Required'),
})

export const orderAddressSchema = Yup.object().shape({
	companyName: Yup.string().required('This field is required'),
	streetAddress: Yup.string().required('This field is required'),
	city: Yup.string().required('This field is required'),
	state: Yup.string().required('This field is required'),
	email: Yup.string().email('Email incorrect').required('This field is required'),
	postalCode: Yup.string().required('This field is required'),
	phone: Yup.string().required('This field is required'),
})

// export const newOrderSchema = Yup.object().shape({

// })
