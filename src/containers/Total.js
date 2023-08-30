import { connect } from 'react-redux'
import Total from '../components/Total'

const mapStateToProps = (state) => {
    return {
        Car: state.cars
    }
}

export default connect(mapStateToProps)(Total)