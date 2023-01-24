import { aux } from "./_aux_"

export function input(pH, mL, id, blank, val, onCh, fix) {
	class Input {
		constructor() {
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

	return new Input()
}

export function label(title, htmlFor) {
	class Label {
		constructor() {
			this.title = title
			this.htmlFor = htmlFor
		}
	}

	return new Label()
}