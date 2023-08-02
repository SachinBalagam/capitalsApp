import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    ActiveCountryId: countryAndCapitalsList[0].id,
  }

  onOptionChange = event => {
    this.setState({
      ActiveCountryId: event.target.value,
    })
  }

  render() {
    const {ActiveCountryId} = this.state
    const Active = countryAndCapitalsList.filter(
      each => each.id === ActiveCountryId,
    )
    const {country} = Active[0]

    return (
      <div className="bg-container">
        <div className="card">
          <h1>Countries and Capitals</h1>
          <div className="question-container">
            <select
              className="select-style"
              value={ActiveCountryId}
              onChange={this.onOptionChange}
            >
              {countryAndCapitalsList.map(each => (
                <option value={each.id} key={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country</p>
          </div>
          <h1>{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
