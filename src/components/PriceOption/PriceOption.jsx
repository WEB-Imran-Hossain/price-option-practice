import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { name, price, description, features } = option;

    return (
        <div className='bg-blue-500 rounded-md p-4 flex flex-col text-white text-center'>
            <h2 className='text-center'>
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>

            <h4 className='text-3xl text-center my-8'>{name}</h4>
       <div className='pl-6'>
       {
            features.map((feature, idx)=> <Feature key={idx} feature={feature}></Feature>)
        }
       </div>

       <button className='btn btn-warning mt-12'>Buy Now</button>

        </div>
    );
};

PriceOption.propType = {
    option: PropTypes.object
}
export default PriceOption;