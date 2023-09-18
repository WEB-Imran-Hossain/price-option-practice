import PropTypes from 'prop-types';
import { AiFillCheckCircle} from 'react-icons/ai'
const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex items-center gap-2'> <AiFillCheckCircle className='text-green-700'></AiFillCheckCircle>{feature}</p>
        </div>
    );
};

Feature.propType = {
    feature: PropTypes.string
}
export default Feature;