export const aux = {
	reg_Az: /[A-z]|\s/,
	reg_09: /[0-9]|null/,
	format: (val) => val.replace(/\d{4}(?=.)/g, '$& '), //Generates a whitespace every 4 numbers
}

export const card = {
	name: 'name',
	code: 'code',
	month: 'month',
	year: 'year',
	cvc: 'cvc',
}

export const fields = {
	name: '',
	code: '',
	month: '',
	year: '',
	cvc: ''
}