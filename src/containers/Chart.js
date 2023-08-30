import { connect } from 'react-redux'
import Chart from '../components/Chart'

const mapStateToProps = (state) => {
    return {
        Car: state.cars
    }
}

export default connect(mapStateToProps)(Chart)