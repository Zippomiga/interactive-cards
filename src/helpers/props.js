import { aux } from "./_aux_"

class Input {
	constructor(pH, mL, id, blank, val, onCh, fix) {
		this.pH = pH
		this.mL = mL
		this.id = id
		this.blank = blank
		this.val = val
		this.onCh = (e) => {
			if(onCh === 'AZ') aux.reg_Az.test(e.nativeEvent.data) ? fix(e) : null
			if(onCh === '09') aux.reg_09.test(e.nativeEvent.data) ? fix(e) : null
		}
	}
}

class Label {
	constructor(title, htmlFor) {
		this.title = title
		this.htmlFor = htmlFor
	}
}

export function input(pH, mL, id, blank, val, onCh, fix) {
	return new Input(pH, mL, id, blank, val, onCh, fix)
}

export function label(title, htmlFor) {
	return new Label(title, htmlFor)
}