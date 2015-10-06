import CheckboxList from './inputs/checkbox-list'
import DatePicker from './inputs/date-picker'
import SingleSelectDropdown from './inputs/single-select-dropdown'
import MultiSelectDropdown from './inputs/multi-select-dropdown'
import Link from './link'
import List from './list'
import MultilineTextInput from './inputs/multiline-text-input'
import NumberInput from './inputs/number-input'
import RadioButtonList from './inputs/radio-button-list'
import Section from './section'
import Table from './table'
import TextInput from './inputs/text-input'

const isTable = property => {
  return property.items[0] && property.items[0].properties
}

export default property => {
  switch (property.type) {
    case 'array': return isTable(property) ? Table : List
    case 'date': return DatePicker
    case 'number': return NumberInput
    case 'object': return Section
    case 'string[]':
      return property.display === 'checkbox' ?
        CheckboxList :
        MultiSelectDropdown

    case 'string':
      if (property.links.navigate) {
        return Link
      }

      switch (property.display) {
        case 'checkbox': return CheckboxList
        case 'radio': return RadioButtonList
        case 'select': return SingleSelectDropdown
        case 'textarea': return MultilineTextInput
        default: return TextInput
      }
  }

  throw Error(`Unsupported input type '${property.type}'`)
}
