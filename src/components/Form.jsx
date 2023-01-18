import { card } from "../helpers/_aux_"
import { input, label } from "../helpers/props"
import Label from "./Label"
import Input from "./Input"
import '../styles/form.css'

const Form = ({ inputs, fix, blanks }) => {
	return (
		<form onSubmit={(e) => e.preventDefault()}>
			<Label {...label('Cardholder Name', card.name)} />
			<Input {...input('e.g Zippo', 20, card.name, blanks.name, inputs.name, 'AZ', fix)} />
			<Label {...label('Card Number', card.code)} />
			<Input {...input('e.g 2014 1403 0912 2018', 16, card.code, blanks.code, inputs.code, '09', fix)} />
			<div className='month-year-cvc'>
				<div className='month-year'>
					<Label {...label('Exp. Date', card.month)} />
					<div className='inputs-month-year'>
						<Input {...input('MM', 2, card.month, blanks.month, inputs.month, '09', fix)} />
						<Input {...input('YY', 2, card.year, blanks.year, inputs.year, '09', fix)} />
					</div>
				</div>
				<div className='cvc'>
					<Label {...label('CVC', card.cvc)} />
					<Input {...input('e.g 912', 3, card.cvc, blanks.cvc, inputs.cvc, '09', fix)} />
				</div>
			</div>
		</form>
	)
}

export default Form